
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { API_URL } from "../constants/Api";
import Footer from "../layout/Footer";
import bgImage from "../../img/cityskyline-fix.png";

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
	  <>
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

					<input 	name="mail" 
							placeholder="Email" 
							{...register("mail", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}
							/>
							{errors.email && <span className="error">Please provide a valid email address</span>}

					<textarea 	name="message" 
								placeholder="Message" 
								className="border" 
								rows="10" 
								cols="50" 
								{...register("message", { required: true, minLength: 10 })}
								/>
								{errors.message && <span className="error">This field requires 10 + characters</span>}

					<div className="btn-container">
					<button className="btn-1">Send</button>
					</div>
				</form>

			</div>
			<div className="bg-image">
				<img src={bgImage} alt="city Background"/>
				<img src={bgImage} alt="city Background" className="second"/>
			</div>
			<Footer />
		</>
  );
}

export default Contact


