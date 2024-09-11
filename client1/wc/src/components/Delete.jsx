import axios from "axios";
// import { useNavigate } from 'react-router-dom';
import Scheduletable from "./scheduletable";

const Delete = ({handleShow}) => {
  // const navigate = useNavigate();

  const ondelete = (id) => {
    
    axios
      .delete(`http://localhost:8000/home/${id}`)
      .then(() => {
        alert("Schedule deleted successfully!");
        // navigate("/");
      })
      .catch((error) => {
        console.error("Error deleting schedule:", error);
        alert('An error occurred while deleting the schedule.');
      });
  };
 

  return (
    <>
      {/* <Scheduletable ondelete={ondelete}></Scheduletable> */}
      <Scheduletable ondelete={ondelete} handleShow={handleShow} />
    </>
  );
};

export default Delete;
