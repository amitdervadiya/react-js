import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';


export default function Signin() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        if (email && password) {

            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log(userCredential);
            navigate('/home');
        }
        else {
            setError('Please fill in all fields.');
        }
    };

    return (
        <div className="container d-flex align-items-center justify-content-center vh-100">
            <div className="card shadow-lg p-4" style={{ maxWidth: '400px', width: '100%' }}>
                <h3 className="text-center mb-4">Sign In</h3>
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <TextField id="standard-basic" label="Enter your email" variant="standard"
                            type="email"
                            className="form-control"

                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required

                        />

                    </div>

                    <div className="mb-4">
                        <label className="form-label">Password</label>
                        <TextField id="standard-basic" label="Enter your password" variant="standard"
                            type="password"
                            className="form-control"

                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required

                        />

                    </div>

                    <button type="submit" className="btn btn-primary w-100">
                        Sign In
                    </button>

                    <div className="text-center mt-3">
                        <p>
                            Don't have an account?{' '}
                            <Link to="/" className="text-decoration-none">
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}
