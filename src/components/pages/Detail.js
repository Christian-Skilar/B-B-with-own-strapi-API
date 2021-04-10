import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ModalComponent from "../layout/Modal";
import { API } from "../constants/Api";
import { API_URL } from "../constants/Api";

function HotelDetail(props) {
	console.log(props);
	const [hotel, sethotel] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);


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
		return <div className="loading">
					<h2>Page Is Loading...</h2>
				</div>;
	}

	if (error) {
		return <div>Ups, something went wrong: {error}</div>;
	}

	return (
        <>
		<div className="container-box">
		<Link className="back-btn" to="/hotels"><FontAwesomeIcon className="back-arrow" icon="caret-left" />Back</Link>
            <div className="detail-card">
				<div>
					<h1>{hotel.name}</h1>
					<p>{hotel.description}</p>
					<div className="extra-info">
						<p>Max {hotel.max} people</p>
						<p>Roms - {hotel.roms}</p>
						<p>Price from {hotel.price},- Nok</p>
					</div>
					<ModalComponent />
				</div>
				<div>
					<img src={API_URL + hotel.img.url} alt={hotel.name}></img>
				</div>
            </div>
		</div>
        </>
	);
}


export default HotelDetail;
