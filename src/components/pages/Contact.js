import { useParams, useSearchParams } from "react-router-dom"; //useParams Hooks, rendering Dynamic Data
// useSearchParams  utilizies parameter query for manipulation

const Contact = () => {
  let { category, id } = useParams(); //Object destructuring . You can use it anywhere. Just like down in h1
  let [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  return (
    <div>
      <h1>Contact us - {category} </h1>
      <h1>Contact us - {id} </h1>
    </div>
  );
};

export default Contact;
