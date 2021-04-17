import { useState, useEffect } from "react";
import { API_URL } from "../constants/Api";

function Messages() {

    const [messages, setMessages] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

    useEffect(function () {
		async function fetchData() {
			try {
				const response = await fetch(API_URL + "/messages");
				const json = await response.json();
				console.log(json);
				setMessages(json);

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
                {messages.map(function (questions) {
                const { name, subject, mail, message, id } = questions;
                return <div className="message-cards" key={id}>
                            <p>From - {name}</p>
							<p>Subject - {subject}</p>
                            <p>Mail - {mail}</p>
                            <p>Message - {message}</p>
                        </div>
                    })}
            </>
    )
}

export default Messages
