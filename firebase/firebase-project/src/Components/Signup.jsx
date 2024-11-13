import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Signup() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [city, setCity] = useState('');
    const [hobby, setHobby] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        if (email && city && password && hobby && name) {
            try {
                const data = await createUserWithEmailAndPassword(auth, email, password);
                await setDoc(doc(db, 'users', data.user.uid), {
                    name,
                    city,
                    hobby,
                    email,
                });
                navigate('/home');
            } catch (error) {
                console.error('Error signing up:', error);
                setError('Failed to sign up. Please try again.');
            }
        } else {
            setError('Please fill in all fields.');
        }
    };

    return (
        <div className="container d-flex align-items-center justify-content-center vh-100">
            <div className="card p-5 shadow-lg" style={{ maxWidth: '500px', width: '100%' }}>
                <h2 className="text-center mb-4">Sign Up</h2>

                {error && (
                    <div className="alert alert-danger text-center" role="alert">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">City</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="form-label">Hobby</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your hobby"
                            value={hobby}
                            onChange={(e) => setHobby(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-100 mb-3">
                        Sign Up
                    </button>

                    <div className="text-center">
                        Already have an account?{' '}
                        <Link to="/signin" className="text-decoration-none">
                            Sign In
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
