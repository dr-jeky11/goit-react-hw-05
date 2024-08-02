import PacmanLoader from "react-spinners/PacmanLoader";

const customStyles = {
  margin: "auto auto",
};

export default function Loader() {
  return (
    <>
      <PacmanLoader color="#2dff81" cssOverride={customStyles} />
    </>
  );
}
