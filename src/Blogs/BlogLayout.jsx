const BlogLayout = ({ title, image, children }) => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>{title}</h1>
      <img src={image} alt={title} style={{ width: "100%", maxWidth: "600px" }} />
      <div>{children}</div>
    </div>
  );
};

export default BlogLayout;