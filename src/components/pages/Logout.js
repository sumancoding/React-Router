import { useLocation } from "react-router-dom";

const Logout = () => {
  let location = useLocation();
  return (
    <div>
      <h1> Logout Page</h1>
      <h2> {location.state.name} Logged Out !!</h2>
    </div>
  );
};

export default Logout;
