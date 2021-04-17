import { useState, useEffect } from "react";
import { API_URL } from "../constants/Api";

function Enquiries() {

    const [enquiries, setEnquiries] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

    useEffect(function () {
		async function fetchData() {
			try {
				const response = await fetch(API_URL + "/enquiries");
				const json = await response.json();
				console.log(json);
				setEnquiries(json);

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
            <>
                {enquiries.map(function (booking) {
                const { name, mail, datefrom, dateto, id } = booking;
                return <div className="message-cards" key={id}>
                            <p>From - {name}</p>
                            <p>Mail - {mail}</p>
                            <p>Date - {datefrom}</p>
                            <p>To - {dateto}</p>
                        </div>
                    })}
            </>
    )
}

export default Enquiries