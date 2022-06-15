const PageHeader = ({ text }) => {
  return (
    <h1
      style={{
        textAlign: "center",
        fontSize: 36 + "px",
      }}>
      {text}
    </h1>
  );
};

export default PageHeader;
