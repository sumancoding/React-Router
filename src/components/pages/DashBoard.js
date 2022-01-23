import { useNavigate } from "react-router-dom"; //Navigation made via useNavigate

const DashBoard = () => {
  let navigate = useNavigate();
  let data = {
    name: "Suman",
  };
  return (
    <div>
      <h1>Dash Board Pages</h1>
      <button
        onClick={() => {
          navigate("/logout", { state: data });
          {
            /* data sent via state */
          }
        }}
      >
        Logout{" "}
      </button>
    </div>
  );
};

export default DashBoard;
