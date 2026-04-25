import { Link } from "react-router-dom";
import blogs from "./blogs";

const Home = () => {
  const visibleBlogs = blogs.slice(0, 6);

  return (
    <div>
      <h1>Latest Blogs</h1>

      <div className="blog-grid">
        {visibleBlogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.image} alt={blog.title} />
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>

            <Link to={`/blog/${blog.id}`}>Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;