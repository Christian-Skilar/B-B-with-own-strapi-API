import { useState, useEffect } from "react";
import CardLink from "../functions/CardLink";
import { API } from "../constants/Api";
import bgImage from "../../img/cityskyline-fix.png";

function Hotels() {
	const [hotels, sethotels] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(function () {
		async function fetchData() {
			try {
				const response = await fetch(API);

				if (response.ok) {
					const json = await response.json();
					console.log(json);
					sethotels(json);
				} else {
					setError("An error occured");
				}
			} catch (error) {
				setError(error.toString());
			} finally {
				setLoading(false);
			}
		}
		fetchData();
	}, []);

	if (loading) {
		return <div className="loading">
					<h2>Page Is Loading...</h2>
				</div>;
	}

	if (error) {
		return <div>Ups, something went wrong: {error}</div>;
	}

	return (
		<div>
			{hotels.map(function (hotel) {
				const { id, name, img, description } = hotel;
				return <CardLink key={id} id={id} name={name} img={img} description={description}/>;
			})}
		<div className="bg-image">
			<img src={bgImage} alt="city Background"/>
			<img src={bgImage} alt="city Background" className="second"/>
		</div>
		</div>
	);
}

export default Hotels;