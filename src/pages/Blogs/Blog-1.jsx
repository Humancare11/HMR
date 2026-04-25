import BlogLayout from "./BlogLayout";
import blog1 from "../../assets/blog1.jpg";

const Blog1 = () => {
  return (
    <BlogLayout
      title="How Are Dead Bodies Transported by Plane?"
      image={blog1}
    >
      <p>This is full content of blog 1...</p>
      <p>Step-by-step guide...</p>
    </BlogLayout>
  );
};

export default Blog1;