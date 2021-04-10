import { useState } from "react";
import DatePicker from "react-datepicker";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "react-datepicker/dist/react-datepicker.css";

function ModalComponent() {

    const [show, setShow] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

    return (
        <>
            <Button variant="primary" onClick={handleShow}> Book Now</Button>
        
            <Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Book Your Hotel</Modal.Title>
                </Modal.Header>
                
                <Form>
                    <Form.Control className="form-input" type="text" placeholder="Full Name" />
                    <Form.Control className="form-input" type="email" placeholder="Email" />
                    <div className="date-container">
                    <DatePicker className="input-date" selected={startDate} onChange={date => setStartDate(date)} />
                    <DatePicker className="input-date" selected={startDate} onChange={date => setStartDate(date)} />
                    </div>
                </Form>
                    <Button variant="secondary" onClick={handleClose}>Submit</Button>
            </Modal>
            </Container>
        </>
    )
}

export default ModalComponent
