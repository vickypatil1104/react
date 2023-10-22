import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <div
        className="error-container"
        style={{
          margin: "auto",
          width: "50%",
          textAlign: "center",
          color: "red",
        }}
      >
        <h1>{error.data}</h1>
        <h2>{error.status}</h2>
        <h2>{error.statusText}</h2>
      </div>
    </>
  );
};

export default Error;
