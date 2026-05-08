import BlogLayout from "./BlogLayout";
import "./blogs.css"
// import blog1 from "../../assets/blog1.jpg";

const Blog1 = () => {
  return (
    <BlogLayout
      title="How Are Dead Bodies Transported by Plane?"
      // image={blog1}
    >
      <p>Introduction</p>
      <p>Losing a loved one is one of the most painful experiences in life. 
</p>
    </BlogLayout>
  );
};

export default Blog1;