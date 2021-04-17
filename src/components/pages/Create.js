

import React, { useState, useContext } from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { UserContext } from "../context/UserContext";
import { API } from "../constants/Api";

function Create() {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState(null);
    const [error, setError] = useState('');

    const {user} = useContext(UserContext);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(!user) {
            setError("Please log in first");
        }

        const formData = new FormData()
        formData.append('data', JSON.stringify({name}));
        formData.append('data', JSON.stringify({description}));
        formData.append('files.img', file);

        try {
            const response = await fetch (API, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${user.jwt}`
                },
                body: formData,
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
            <Link className="back-btn" to="/admin"><FontAwesomeIcon className="btn-icons" icon="caret-left" />Back</Link>

                    <h2>Register new establisment</h2>

                    {error && <p>{error}</p>}

                        <form onSubmit={handleSubmit}>
                            <input
                                placeholder="Name"
                                type="text"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                            />
                            <textarea
                                className="border"
                                placeholder="Description"
                                type="text"
                                value={description}
                                rows="6"
                                onChange={(event) => setDescription(event.target.value)}
                            />
                            <input
                                placeholder="add image"
                                type="file"
                                className="file-upload"
                                onChange={(event) => setFile(event.target.files[0])}
                            />
                            <button className="btn">Submit</button>
                        </form>
                </div>
            </>
    )
}

export default Create;

/*

   const [roms, setRoms] = useState('');
    const [max, setMax] = useState('');
    const [price, setPrice] = useState('');

            formData.append('data', JSON.stringify({price}));
        formData.append('data', JSON.stringify({max}));
        formData.append('data', JSON.stringify({roms}));

                            <input
                                value={roms}
                                placeholder="roms"
                                onChange={(event) => setRoms(event.target.value)}
                            />
                            <input
                                value={price}
                                placeholder="price"
                                onChange={(event) => setPrice(event.target.value)}
                            />
                            <input
                                value={max}
                                placeholder="max"
                                onChange={(event) => setMax(event.target.value)}
                            />


*/