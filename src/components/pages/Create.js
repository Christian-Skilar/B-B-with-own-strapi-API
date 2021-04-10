import { useState } from 'react'
import { API } from "../constants/Api";

function Create() {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState(null);

    console.log("file", file);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData()
        formData.append('data', JSON.stringify({name}));
        formData.append('data', JSON.stringify({description}));
        formData.append('files.img', file);

        const response = await fetch (API, {
            method: 'POST',
            body: formData
        })

        const data = await response.json();
        console.log("data", data);

    }

    return (
            <div>
                <h2>Create</h2>

                <form onSubmit={handleSubmit} className="create-container">
                    <input
                        value="name"
                        placeholder="Name"
                        onChange={(event) => setName(event.target.value)}
                    />
                    <textarea
                        placeholder="Description"
                        onChange={(event) => setDescription(event.target.value)}
                    />
                    <input
                        type="file"
                        placeholder="add image"
                        onChange={(event) => setFile(event.target.files[0])}
                    />
                    <button>Submit</button>
                </form>
            </div>
    )
}

export default Create;
