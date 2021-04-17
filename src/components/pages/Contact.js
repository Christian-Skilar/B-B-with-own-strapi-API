
import React, { useState } from 'react'
import { API_URL } from "../constants/Api";

function Contact() {

	const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [mail, setMail] = useState('');
	const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
		event.preventDefault()

            const response = await fetch (API_URL + "/messages", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name, subject, mail, message})
            })
    
            const data = await response.json();
            console.log("data", data);
    }

  return (

		<div className="form-bg">

			<h2>Contact us</h2>
			<form onSubmit={handleSubmit}>

			<input placeholder="Full Name" value={name} onChange={(event) =>setName(event.target.value)}/> 

			<input placeholder="Subject" value={subject} onChange={(event) =>setSubject(event.target.value)}/> 

			<input placeholder="Email" value={mail} onChange={(event) =>setMail(event.target.value)}/>

			<textarea placeholder="Message" value={message} onChange={(event) =>setMessage(event.target.value)} className="border" rows="10" cols="50"  />

			<button className="btn">Send</button>

			</form>
		</div>

  );
}

export default Contact

/*

import { useForm } from 'react-hook-form';

const { register, formState: { errors }} = useForm();

		<div className="container">

			<h2>Contact us</h2>
			<form onSubmit={handleSubmit}>

			<input placeholder="Full Name" value={fullname} onChange={(event) =>setFullname(event.target.value)} {...register('firstName', { required: true, minLength: 2  })} /> 
			{errors.firstName && <p className="errors">Required min 2 characters</p>}

			<input placeholder="Subject" value={subject} onChange={(event) =>setSubject(event.target.value)} {...register('subject', { required: true })} /> 
			{errors.subject && <p className="errors">Required</p>}

			<input placeholder="Email" value={email} onChange={(event) =>setEmail(event.target.value)} {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i  })} />
			{errors.email && <p className="errors">Invalid email</p>}

			<textarea placeholder="Message" value={message} onChange={(event) =>setMessage(event.target.value)} className="border" rows="10" cols="50" {...register('message', { required: true, minLength: 10 })} />
			{errors.message && <p className="errors">Message must be more then 10 characters long </p>}

			<button className="btn">Send</button>

			</form>
		</div>



*/