
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { API_URL } from "../constants/Api";

function Contact() {

	const { register, handleSubmit, formState: { errors } } = useForm();
	const [submitted, setSubmitted] = useState(false);

    async function onSubmit (data) {
		console.log(data);
		setSubmitted(true);


            const response = await fetch (API_URL + "/messages", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
			console.log(response);
    }

  return (

		<div className="form-bg">
			<h1>Contact us</h1>
				<form onSubmit={handleSubmit(onSubmit)}>
					{submitted ? <div className="success">Success! The form was submitted</div> : null}
	
					<input	name="name"
							placeholder="Full Name"
							{...register("name", { required: true, minLength: 3 })}
							/> 
							{errors.name && <span className="error">This field is required</span>}

					<input 	name="subject" 
							placeholder="Subject" 
							{...register("subject", { required: true })}
							/> 
							{errors.subject && <span className="error">This field is required</span>}

					<input 	name="email" 
							placeholder="Email" 
							{...register("mail", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}
							/>
							{errors.email && <span className="error">This field is required</span>}

					<textarea 	name="message" 
								placeholder="Message" 
								className="border" 
								rows="10" 
								cols="50" 
								{...register("message", { required: true, minLength: 10 })}
								/>
								{errors.message && <span className="error">This field is required</span>}

					<button className="btn">Send</button>
				</form>

		</div>

  );
}

export default Contact


