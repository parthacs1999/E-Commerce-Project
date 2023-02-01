import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useUserAuth } from '../context/userAuthContext';
import { Alert } from 'react-bootstrap';
export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { logIn } = useUserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await logIn(email, password);
            navigate("/home");
        }
        catch (err) {
            setError(err.message);
        }
    }
    return (

        <div style={{ border: "2px black solid", marginTop: "50px", boxShadow: "5px 10px black" }}>
            <div className='container my-5 text-center' >
                <h1>Log In</h1>
            </div>
            {error && <Alert variant="danger">{error}</Alert>}
            <form className="container my-5" style={{ width: '500px' }}>
                <div class="mb-3 row">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control-plaintext bg-light" id="staticEmail" placeholder="email@example.com" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>
                <button className="btn btn-outline-dark ms-2" onClick={handleSubmit}>Login</button>
                <Link className="btn btn-outline-dark ms-2" to="/register">New User? Sign Up</Link>
            </form>
        </div>

    );
}
