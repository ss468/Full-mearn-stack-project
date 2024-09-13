import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Modal } from "react-bootstrap";

import { useEffect } from "react";
import Addbutton from "./Addbutton";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Modal from 'react-bootstrap/Modal';

function Modalwc() {
  const [show, setShow] = useState(false);
  const [day, Setday] = useState("");
  const [mode, Setmode] = useState("");
  const [time, Settime] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSaveBook = () => {
    const data = {
      day,
      mode,
      time,
    };

    
      axios
        .post("http://localhost:8000/washingmac", data)
        .then(() => {
         toast.success("BOOKED SUCCESSFULLY!!!!");
          setShow(false);
        })
        .catch((error) => {
          toast.error("ERROR IN BOOKING SCHEDULE!!!");
          console.log(error);
        });
  
  };

  return (
    <>
      {/* <Button  onClick={handleShow}> */}
      <Addbutton handleShow={handleShow} />
      {/* </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Book schedule</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>DAY</Form.Label>
              <Form.Control
                type="date"
                placeholder=""
                onChange={(e) => Setday(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>MODE</Form.Label>
              <Form.Control
                type="text"
                placeholder="Rinse+Dry"
                onChange={(e) => Setmode(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>TIME</Form.Label>
              <Form.Control
                type="time"
                placeholder="7:30"
                onChange={(e) => Settime(e.target.value)}
                autoFocus
              />
            </Form.Group>
            {/* <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group> */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            CANCEL
          </Button>
          <Button variant="primary" onClick={handleSaveBook}>
            BOOK
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer/>
    </>
  );
}

export default Modalwc;
