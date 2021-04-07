import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { API } from "../constants/Api";
import "react-datepicker/dist/react-datepicker.css";

function HotelDetail(props) {
	console.log(props);
	const [hotel, sethotel] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [startDate, setStartDate] = useState(new Date());

	let history = useHistory();

	const { id } = useParams();

	if (!id) {
		history.push("/");
	}

	const url = API + "/" + id;

	useEffect(
		function () {
			async function fetchData() {
				try {
					const response = await fetch(url);
					const json = await response.json();
					console.log(json);
					sethotel(json);
	
				} catch (error) {
					setError(error.toString());
				} finally {
					setLoading(false);
				}
			}
			fetchData();
		},
		[url]
	);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>An error occured: {error}</div>;
	}

	return (
        <>
        <div className="detail-container">
            <div className="detail-card">
                <h1>{hotel.name}</h1>
                <img src={hotel.img} alt={hotel.name}></img>
                <p>{hotel.description}</p>

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
            </div>
        </div>
        </>
	);
}


export default HotelDetail;
