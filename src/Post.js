import { useParams } from "react-router-dom";

function Post() {
  let { category, id } = useParams();
  return (
    <div>
      <h1>Post Pages - {category} </h1>
      <h1>Post Pages - {id} </h1>
    </div>
  );
}

export default Post;
