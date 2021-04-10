import React from 'react';
import { useForm } from 'react-hook-form';

function Contact() {
  const { register, handleSubmit, formState: { errors }} = useForm();
  const onSubmit = (data) => console.log(data);

  return (
	  <>
		<div className="contact-container">

			<h1>Contact us</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
			<input className="form-input" placeholder="Full Name" {...register('firstName', { required: true, minLength: 2  })} /> 
			{errors.firstName && <p className="errors">Required min 2 characters</p>}

			<input className="form-input" placeholder="Email" {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i  })} />
			{errors.email && <p className="errors">Invalid email</p>}

			<textarea className="form-input" placeholder="Message" rows="10" cols="50" {...register('message', { required: true, minLength: 10 })} />
			{errors.message && <p className="errors">Message must be more then 10 characters long </p>}

			<button className="btn">Send</button>
			</form>
		</div>
	  </>
  );
}

export default Contact
