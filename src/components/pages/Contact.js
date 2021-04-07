import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Heading from "../layout/Heading";

function Contact() {

	return (
        <>
			<Container className="contact-container">
			<Heading heading="Contact Us" />
			
				<Form>
					<Form.Control className="form-input" type="text" placeholder="Full Name" />
			
					<Form.Control className="form-input" type="email" placeholder="Email" />

					<Form.Control className="form-input" as="textarea" placeholder="Message" rows={7} />

					<Button className="contact-btn btn" variant="primary" type="submit">Submit</Button>
				</Form>
			</Container>
        </>
	);
}

export default Contact

/*

import { useForm } from "react-hook-form";
import Heading from "../layout/Heading";

function Contact() {
	const { register, handleSubmit, errors } = useForm();

	function onSubmit(data) {
		console.log(data);
	}

	console.log(errors);

	return (
        <>
        <Heading heading="Contact Page" />

		<form onSubmit={handleSubmit(onSubmit)}>
			<input className="contact" placeholder="First Name" name="firstName" type="custom" ref={register({ required: true, minLength: 3 })} />
            {errors.firstName && <span className="error">Need at least 3 characters</span>}

			<input className="contact" placeholder="Last Name" name="lastName" type="custom" ref={register({ required: true, minLength: 4 })} />
            {errors.lastName && <span className="error">Need at least 4 characters</span>}

			<input className="contact" placeholder="Email" name="email" type="email" ref={register({ required: true,  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} />
			{errors.email && <span className="error">invalid email</span>}

            <textarea placeholder="Message" id="txtid" name="message" rows="10" cols="50" maxLength="200" ref={register({ required: true, minLength: 10 })} />
            {errors.message && <span className="error">Need at least 10 characters</span>}

			<button>Send</button>
		</form>

        </>
	);
}

export default Contact

*/