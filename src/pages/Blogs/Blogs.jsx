import { Link } from "react-router-dom";
import "./blogs.css";

const Blogs = () => {
  return (
    <div className="blogs-container">
      <h1>All Blogs</h1>

      <div className="blog-grid">
        <div className="blog-card">
          <h3>How to Transfer Human Remains in India</h3>
          <Link to="/blog/blog-1">Read More</Link>
        </div>

        <div className="blog-card">
          <h3>Air Ambulance Services Guide</h3>
          <Link to="/blog/blog-2">Read More</Link>
        </div>

        <div className="blog-card">
          <h3>ICU Setup at Home</h3>
          <Link to="/blog/blog-3">Read More</Link>
        </div>
      </div>
    </div>
  );
};

export default Blogs;