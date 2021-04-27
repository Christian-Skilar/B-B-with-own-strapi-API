import {useState, useContext, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function Login () {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const history = useHistory();

    const {user, setUser} = useContext(UserContext);
    console.log("user", user);

    useEffect(() => {
        if(user){
            history.push('/admin')
        }
    });

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const response = await fetch('http://localhost:1337/auth/local', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    identifier: email,
                    password
                })
            })
    
            const data = await response.json()
            console.log("data", data);
    
            if(data.message) {
                setError(data.message[0].messages[0].message)
    
                return //Stop execution
            }

            setUser(data);

        }catch(error) {
            setError("Ops, something went wrong" + error);
        } finally {
			setSubmitting(false);
		}

    }

    return (
        <div>
            <div className="form-bg">
            <h1>Login Page</h1>

                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        value={email}
                        onChange={(event) => {
                            setError('')
                            setEmail(event.target.value)
                        }}
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(event) => {
                            setError('')
                            setPassword(event.target.value)
                        }}
                    />
                    {error && <p>{error}</p>}
                    <button className="btn">{submitting ? "Loggin in..." : "Login"}</button>
                </form>
            </div>
        </div>
    )
}

export default Login;

