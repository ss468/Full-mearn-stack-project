import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Modal from 'react-bootstrap/Modal';
import Updatebutton from './updatebutton';
import Scheduletable from './scheduletable';
import axios from 'axios';



import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
import Delete from './Delete';




function Update() {
  const [show, setShow] = useState(false);
  const [id,Setid]=useState("");

  const handleClose = () => setShow(false);
  const handleShow = (idfromschedule) => {
    setShow(true);
    Setid(idfromschedule)
  }
  const [day,Setday]=useState("");
  const [mode,Setmode]=useState("");
  const[time,Settime]=useState("");
  // const {id}=useParams();

 const handleupdate=()=>{
    const data={
        day,
        mode,
        time
    };
    axios.put(`http://localhost:8000/home/${id}`,data)
    .then(
        ()=>{
            toast.success("SCHEDULE UPDATED SUCCESSFULLY!!!!");
            setShow(false);
        }
    )
    .catch((error)=>{
        console.log(error);
        toast.error("ERROR IN UPDATING SCHEDULE!!!");
    });
 };

  

  return (
    <>
        
        <Delete handleShow={handleShow} />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>UPDATE SCHEDULE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>DAY</Form.Label>
              <Form.Control
                type="Date"
                placeholder=""
                onChange={(e)=>Setday(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>MODE</Form.Label>
              <Form.Control
                type="text"
                placeholder="RINSE+DRY"
                onChange={(e)=>Setmode(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>TIME</Form.Label>
              <Form.Control
                type="time"
                placeholder=""
                onChange={(e)=>Settime(e.target.value)}
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleupdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer/>
    </>
  );
}

export default Update;