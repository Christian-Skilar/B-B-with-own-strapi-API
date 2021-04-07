import { useState, useEffect } from "react";
import CardLink from "../layout/CardLink";
import { API } from "../constants/Api";

function Hotels() {
	const [hotels, sethotels] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(function () {
		async function fetchData() {
			try {
				const response = await fetch(API);
				const json = await response.json();
				console.log(json);
				sethotels(json);

			} catch (error) {
				setError(error.toString());
			} finally {
				setLoading(false);
			}
		}
		fetchData();
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>An error occured: {error}</div>;
	}

	return (
		<div className="cards">
			{hotels.map(function (hotel) {
				const { id, name, img, description } = hotel;
				return <CardLink key={id} id={id} name={name} img={img} description={description} />;
			})}
		</div>
	);
}

export default Hotels;