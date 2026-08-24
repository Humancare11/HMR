const fs = require('fs');
const path = require('path');

// 1. Resolve component file path with various React extensions
function resolveComponentFile(importPath, baseDir) {
  const resolvedPath = path.resolve(baseDir, importPath);
  
  // If the import path already exists as a file
  if (fs.existsSync(resolvedPath) && fs.statSync(resolvedPath).isFile()) {
    return resolvedPath;
  }
  
  const extensions = ['.jsx', '.js', '.tsx', '.ts', '/index.jsx', '/index.js', '/index.tsx', '/index.ts'];
  for (const ext of extensions) {
    const fullPath = resolvedPath + ext;
    if (fs.existsSync(fullPath) && fs.statSync(fullPath).isFile()) {
      return fullPath;
    }
  }
  return null;
}

// 2. Parse import names (handles default, named, and wildcard imports)
function parseImportNames(importClause) {
  const names = [];
  const cleaned = importClause.trim();
  if (cleaned.startsWith('{')) {
    const inner = cleaned.slice(1, -1);
    inner.split(',').forEach(item => {
      const parts = item.trim().split(/\s+as\s+/);
      const name = parts[parts.length - 1].trim();
      if (name) names.push(name);
    });
  } else if (cleaned.includes('* as')) {
    const parts = cleaned.split(/\s+as\s+/);
    names.push(parts[1].trim());
  } else {
    const name = cleaned.split(/\s+/)[0].trim();
    if (name) names.push(name);
  }
  return names;
}

// 3. Load production site URL from .env or fallback
function getSiteUrl() {
  if (process.env.VITE_SITE_URL) {
    return process.env.VITE_SITE_URL.replace(/\/+$/, '');
  }

  const envPath = path.resolve(__dirname, '../.env');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    const match = envContent.match(/^VITE_SITE_URL\s*=\s*(.+)$/m);
    if (match && match[1]) {
      return match[1].trim().replace(/\/+$/, '');
    }
  }
  
  return 'https://humanremainstransfer.com';
}

// 4. Validate routes to exclude admin, private, dynamic, and wildcards
function isValidRoute(routePath) {
  if (!routePath) return false;
  if (routePath.includes(':')) return false;
  if (routePath.includes('*')) return false;
  
  const excludedPatterns = [
    /^\/admin/i,
    /^\/private/i,
    /^\/dashboard/i,
    /^\/login/i,
    /^\/register/i,
    /^\/signin/i,
    /^\/signup/i,
    /^\/api/i,
    /^\/test/i,
    /^\/demo/i
  ];
  
  for (const pattern of excludedPatterns) {
    if (pattern.test(routePath)) {
      return false;
    }
  }
  
  return true;
}

// 5. Normalize route path
function normalizePath(routePath) {
  let cleaned = routePath.trim();
  if (!cleaned.startsWith('/')) {
    cleaned = '/' + cleaned;
  }
  if (cleaned.length > 1 && cleaned.endsWith('/')) {
    cleaned = cleaned.slice(0, -1);
  }
  return cleaned;
}

// 6. Format Date to YYYY-MM-DD
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function run() {
  console.log('--- Starting Sitemap Generator ---');
  
  const appPath = path.resolve(__dirname, '../src/App.jsx');
  if (!fs.existsSync(appPath)) {
    console.error('Error: src/App.jsx not found');
    process.exit(1);
  }
  
  const appDir = path.dirname(appPath);
  const appContent = fs.readFileSync(appPath, 'utf8');
  
  // Parse imports and lazy imports to map component names to file paths
  const imports = new Map();
  
  // Match standard imports
  const importRegex = /import\s+([\w\s{},*]+)\s+from\s+["']([^"']+)["']/g;
  let match;
  while ((match = importRegex.exec(appContent)) !== null) {
    const importClause = match[1];
    const importPath = match[2];
    if (!importPath.startsWith('.') && !importPath.startsWith('/')) continue;
    
    const resolvedFile = resolveComponentFile(importPath, appDir);
    if (resolvedFile) {
      const names = parseImportNames(importClause);
      for (const name of names) {
        imports.set(name, resolvedFile);
      }
    }
  }
  
  // Match lazy imports
  const lazyRegex = /(?:const|let|var)\s+(\w+)\s*=\s*(?:React\.)?lazy\s*\(\s*\(\s*\)\s*=>\s*import\s*\(\s*["']([^"']+)["']\s*\)\s*\)/g;
  while ((match = lazyRegex.exec(appContent)) !== null) {
    const name = match[1];
    const importPath = match[2];
    if (!importPath.startsWith('.') && !importPath.startsWith('/')) continue;
    
    const resolvedFile = resolveComponentFile(importPath, appDir);
    if (resolvedFile) {
      imports.set(name, resolvedFile);
    }
  }
  
  console.log(`Found ${imports.size} component imports in App.jsx.`);
  
  // Parse lines for Route elements
  const siteUrl = getSiteUrl();
  const lines = appContent.split(/\r?\n/);
  const uniqueUrls = new Map(); // loc -> lastmod
  
  for (const line of lines) {
    if (!line.includes('<Route')) continue;
    
    // Extract path
    const pathMatch = /path\s*=\s*(?:["']([^"']+)["']|\{\s*["']([^"']+)["']\s*\})/i.exec(line);
    if (!pathMatch) continue;
    const rawPath = pathMatch[1] || pathMatch[2];
    
    if (!isValidRoute(rawPath)) {
      console.log(`Skipping excluded/dynamic route: ${rawPath}`);
      continue;
    }
    
    const cleanPath = normalizePath(rawPath);
    const loc = cleanPath === '/' ? `${siteUrl}/` : `${siteUrl}${cleanPath}`;
    
    // Extract component name from element attribute
    const elementMatch = /element\s*=\s*({[^}]+})/i.exec(line);
    let lastmod = null;
    
    if (elementMatch) {
      const elementContent = elementMatch[1];
      for (const [name, filePath] of imports.entries()) {
        const wordRegex = new RegExp(`\\b${name}\\b`);
        if (wordRegex.test(elementContent)) {
          try {
            const stats = fs.statSync(filePath);
            lastmod = formatDate(stats.mtime);
          } catch (err) {
            console.warn(`Could not read modification date for component ${name} at ${filePath}`);
          }
          break;
        }
      }
    }
    
    // If we have a duplicate route, prefer the one with lastmod, or keep the existing
    if (uniqueUrls.has(loc)) {
      if (lastmod && !uniqueUrls.get(loc)) {
        uniqueUrls.set(loc, lastmod);
      }
    } else {
      uniqueUrls.set(loc, lastmod);
    }
  }
  
  // Generate XML
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  for (const [loc, lastmod] of uniqueUrls.entries()) {
    xml += '  <url>\n';
    xml += `    <loc>${loc}</loc>\n`;
    if (lastmod) {
      xml += `    <lastmod>${lastmod}</lastmod>\n`;
    }
    xml += '  </url>\n';
  }
  xml += '</urlset>\n';
  
  // Write to dist/ and public/
  const distDir = path.resolve(__dirname, '../dist');
  const publicDir = path.resolve(__dirname, '../public');
  
  if (fs.existsSync(distDir)) {
    fs.writeFileSync(path.join(distDir, 'sitemap.xml'), xml, 'utf8');
    console.log(`Successfully generated dist/sitemap.xml with ${uniqueUrls.size} URLs.`);
  } else {
    console.warn('dist/ directory does not exist yet (Vite build might have failed).');
  }
  
  if (fs.existsSync(publicDir)) {
    fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml, 'utf8');
    console.log(`Successfully generated public/sitemap.xml with ${uniqueUrls.size} URLs.`);
  }
  
  // 7. Handle robots.txt
  updateRobotsTxt(publicDir, distDir, siteUrl);
}

function updateRobotsTxt(publicDir, distDir, siteUrl) {
  const sitemapLine = `Sitemap: ${siteUrl}/sitemap.xml`;
  const defaultRobotsContent = `User-agent: *\nAllow: /\n\n${sitemapLine}\n`;
  
  const updateFile = (dirPath, filename) => {
    if (!fs.existsSync(dirPath)) return;
    const filePath = path.join(dirPath, filename);
    
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      if (content.includes('Sitemap:')) {
        // Replace existing sitemap directive(s)
        content = content.replace(/^Sitemap:.*$/gm, sitemapLine);
      } else {
        // Append sitemap directive
        content = content.trim() + '\n\n' + sitemapLine + '\n';
      }
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated existing ${filePath}`);
    } else {
      fs.writeFileSync(filePath, defaultRobotsContent, 'utf8');
      console.log(`Created new ${filePath}`);
    }
  };
  
  updateFile(publicDir, 'robots.txt');
  updateFile(distDir, 'robots.txt');
}

run();
