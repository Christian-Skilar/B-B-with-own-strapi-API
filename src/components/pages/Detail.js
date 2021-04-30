import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import ModalComponent from "../layout/Modal";
import { API } from "../constants/Api";
import { API_URL } from "../constants/Api";
import Placeholder from "../../img/placeholder.png";

function HotelDetail() {
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

    let imageUrl = Placeholder;
  
    if (hotel && hotel.img) {
        imageUrl = API_URL + hotel.img.url;
    }

	return (
			<div className="container">
			<Link className="back-btn" to="/hotels"><FontAwesomeIcon className="btn-icons" icon="caret-left" />Back</Link>
				<div className="detail-card">
					<div>
						<h2>{hotel.name}</h2>
						<p>{hotel.description}</p>
						<div className="extra-info">
							<p>Max {hotel.max} people</p>
							<p>Roms - {hotel.roms}</p>
							<p>Price from {hotel.price},- Nok</p>
						</div>
					</div>
					<div>
						<img src={imageUrl} alt={hotel.name}></img>
					</div>
				</div>
				<ModalComponent />
			</div>
	);
}


export default HotelDetail;
