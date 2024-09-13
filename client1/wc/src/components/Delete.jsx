import axios from "axios";
// import { useNavigate } from 'react-router-dom';
import Scheduletable from "./scheduletable";

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Delete = ({handleShow}) => {
  // const navigate = useNavigate();

  const ondelete = (id) => {
    
    axios
      .delete(`http://localhost:8000/home/${id}`)
      .then(() => {
        toast.success("Schedule deleted successfully!");
        // navigate("/");
      })
      .catch((error) => {
        console.error("Error deleting schedule:", error);
        toast.error('An error occurred while deleting the schedule.');
      });
  };
 

  return (
    <>
      {/* <Scheduletable ondelete={ondelete}></Scheduletable> */}
      <Scheduletable ondelete={ondelete} handleShow={handleShow} />
      <ToastContainer/>
    </>
  );
};

export default Delete;
