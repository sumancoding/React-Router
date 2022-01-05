import { useHistory } from "react-router-dom";

function Button() {
  let history = useHistory();
  function handleClick() {
    //history.push("/");
    history.goBack();
  }
  return (
    <div>
      <button type="button" onClick={handleClick}>
        {" "}
        Click Me !
      </button>
    </div>
  );
}

export default Button;
