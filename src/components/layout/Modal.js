import { useState } from "react";
import { API_URL } from "../constants/Api";

function ModalComponent() {

    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
	const [datefrom, setDatefrom] = useState('');
    const [dateto, setDateto] = useState('');

    const handleSubmit = async (event) => {
		event.preventDefault()

            const response = await fetch (API_URL + "/enquiries", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name, mail, datefrom, dateto})
            })
    
            const data = await response.json();
            console.log("data", data);
    }
  

    return (
		<div>

			<h2>Book now</h2>
			<form onSubmit={handleSubmit}>

			<input placeholder="Name" type="text" value={name} onChange={(event) =>setName(event.target.value)}/> 
    
			<input placeholder="Email" type="text" value={mail} onChange={(event) =>setMail(event.target.value)}/>

			<input placeholder="From" type="date" value={datefrom} onChange={(event) =>setDatefrom(event.target.value)}/> 

			<input placeholder="To" type="date" value={dateto} onChange={(event) =>setDateto(event.target.value)} />

			<button className="btn">Send</button>

			</form>
		</div>
    )
}

export default ModalComponent
