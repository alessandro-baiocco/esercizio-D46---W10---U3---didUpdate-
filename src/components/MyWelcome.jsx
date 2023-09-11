const MyWelcome = ({ title, subTitle }) => {
  return (
    <div
      className="jumbotron text-center p-5"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1550399105-c4db5fb85c18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80)",
        backgroundSize: "contain",
        color: "white",
      }}
    >
      <h1 className="display-4">{title}</h1>
      <hr className="my-4" />
      <p className=" fs-2">{subTitle}</p>
    </div>
  );
};

export default MyWelcome;
