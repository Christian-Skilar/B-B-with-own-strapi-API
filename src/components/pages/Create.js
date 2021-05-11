

import React, { useState, useContext } from 'react'
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { API } from "../constants/Api";
import bgImage from "../../img/cityskyline-fix.png";

function Create() {

    const [name, setName] = useState('');
    const [roms, setRoms] = useState('');
    const [max, setMax] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState(null);
    const [error, setError] = useState('');
    const [submitted, setSubmitted] = useState(false);
    console.log("file", file);

    const {user} = useContext(UserContext);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(!user) {
            setError("You must be logged in to use this form");
            return
        }

        setSubmitted(true);

        const formData = new FormData()
        formData.append("data", JSON.stringify({name, roms, max, price, description}));
        formData.append("files.img", file);

        try {
            const response = await fetch (API, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${user.jwt}`
                },
                body: formData
            })
    
            const data = await response.json();
            console.log("data", data);
    
        } catch (error){
            console.log(error);
            setError(error);
        }
    }
    return (
            <>
                <div className="container">
                <Link className="back-btn" to="/admin">Back</Link>
                    <h2>Register new establisment</h2>
                    {error && <p>{error}</p>}

                        <form onSubmit={handleSubmit}>
                        {submitted ? <div className="success">Success! The form was submitted</div> : null}

                            <input placeholder="Name *" value={name} onChange={(event) => setName(event.target.value)} />
                            <input placeholder="Roms" value={roms} onChange={(event) => setRoms(event.target.value)} />
                            <input placeholder="Max" value={max} onChange={(event) => setMax(event.target.value)} />
                            <input placeholder="Price *" value={price} onChange={(event) => setPrice(event.target.value)} />
                            <textarea className="border" placeholder="Description *" value={description} rows="6" onChange={(event) => setDescription(event.target.value)}/>
                            <input type="file" className="file-upload" onChange={(event) => setFile(event.target.files[0])} />

                            
                            <div className="btn-container-center">
					            <button className="btn-1">submit</button>
					        </div>
                        </form>
                </div>
                        <div className="bg-image">
                            <img src={bgImage} alt="city Background"/>
                            <img src={bgImage} alt="city Background" className="second"/>
                        </div>
            </>
    )
}

export default Create;


