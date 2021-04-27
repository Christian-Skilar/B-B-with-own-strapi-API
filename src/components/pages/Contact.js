
import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { API_URL } from "../constants/Api";

const schema = yup.object().shape({
	fullName: yup.string().required("Please enter your name"),
	email: yup.string().required("Please enter an email address").email("Please enter a valid email address"),
	message: yup.string().required("Please enter your message").min(10, "The message must be at least 10 characters"),
});


function Contact() {

	const { register, handleSubmit: reactFormHandleSubmit, errors } = useForm({
		resolver: yupResolver(schema),
	});

	function onSubmit(data) {
		console.log(data);
	}

	console.log(errors);

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
    
			reactFormHandleSubmit()
            const data = await response.json();
            console.log("data", data);
    }

  return (

		<div className="form-bg">
			<h2>Contact us</h2>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input	name="fullName" 
							placeholder="Full Name" 
							value={name}
							onChange={(event) =>setName(event.target.value)} 
							ref={register}
							/> 
							{errors.fullName && <span>{errors.fullName.message}</span>}

					<input name="email" placeholder="Subject" value={subject} onChange={(event) =>setSubject(event.target.value)}/> 

					<input name="email" placeholder="Email" value={mail} onChange={(event) =>setMail(event.target.value)} ref={register}/>
					{errors.email && <span>{errors.email.message}</span>}

					<textarea name="message" placeholder="Message" value={message} onChange={(event) =>setMessage(event.target.value)} className="border" rows="10" cols="50" ref={register}/>
					{errors.message && <span>{errors.message.message}</span>}
					
					<button className="btn">Send</button>
				</form>
		</div>

  );
}

export default Contact

/*


import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { API_URL } from "../constants/Api";

const schema = yup.object().shape({
	fullName: yup.string().required("Please enter your name"),
	email: yup.string().required("Please enter an email address").email("Please enter a valid email address"),
	message: yup.string().required("Please enter your message").min(10, "The message must be at least 10 characters"),
});


function Contact() {

	const { register, handleSubmit: reactFormHandleSubmit, errors } = useForm({
		resolver: yupResolver(schema),
	});

	function onSubmit(data) {
		console.log(data);
	}

	console.log(errors);

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
    
			reactFormHandleSubmit()
            const data = await response.json();
            console.log("data", data);
    }

  return (

		<div className="form-bg">
			<h2>Contact us</h2>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input name="fullName" placeholder="Full Name" onChange={(event) =>setName(event.target.value)} value={name}/> 
					{errors.fullName && <span>{errors.name.message}</span>}

					<input name="email" placeholder="Subject" value={subject} onChange={(event) =>setSubject(event.target.value)}/> 

					<input name="email" placeholder="Email" value={mail} onChange={(event) =>setMail(event.target.value)} ref={register}/>
					{errors.email && <span>{errors.email.message}</span>}

					<textarea name="message" placeholder="Message" value={message} onChange={(event) =>setMessage(event.target.value)} className="border" rows="10" cols="50" ref={register}/>
					{errors.message && <span>{errors.message.message}</span>}
					
					<button className="btn">Send</button>
				</form>
		</div>

  );
}

export default Contact

*/

/*



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
					<input	name="fullName" 
							placeholder="Full Name" 
							onChange={(event) =>setName(event.target.value)} 
							value={name} />

					<input name="email" placeholder="Subject" value={subject} onChange={(event) =>setSubject(event.target.value)}/> 

					<input name="email" placeholder="Email" value={mail} onChange={(event) =>setMail(event.target.value)} />

					<textarea name="message" placeholder="Message" value={message} onChange={(event) =>setMessage(event.target.value)} className="border" rows="10" cols="50" />
					
					<button className="btn">Send</button>

				</form>
		</div>

  );
}

export default Contact

*/