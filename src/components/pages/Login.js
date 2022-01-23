import { useLocation } from "react-router-dom";

const Login = () => {
  let location = useLocation();
  return (
    <div>
      <h1> Login Pages </h1>
      <h2> {location.state.st} </h2> {/* this is from App page'*/}
    </div>
  );
};

export default Login;
