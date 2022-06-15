const PageHeader = ({ text }) => {
  return (
    <h1
      style={{
        textAlign: "center",
        fontSize: 36 + "px",
        fontWeight: "bold",
        lineHeight: "43px",
        textTransform: "uppercase",
        fontStyle: "normal",
      }}>
      {text}
    </h1>
  );
};

export default PageHeader;
