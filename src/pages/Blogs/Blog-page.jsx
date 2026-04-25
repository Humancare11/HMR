import { useParams } from "react-router-dom";
import blogs from "./blogs";

const BlogPage = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) return <h2>Blog not found</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{blog.title}</h1>
      <img src={blog.image} alt={blog.title} style={{ width: "100%" }} />
      <div>{blog.content}</div>
    </div>
  );
};

export default BlogPage;