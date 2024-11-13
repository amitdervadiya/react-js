import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [userDetail, setUserDetail] = useState(null);

    // Check if user is authenticated
    useEffect(() => {
        const subscribe = onAuthStateChanged(auth, (data) => {
            if (data) setUser(data);
        });
        return () => subscribe();
    }, []);

    // Fetch user details from Firestore
    useEffect(() => {
        if (user) {
            getDoc(doc(db, 'users', user.uid)).then((data) => {
                setUserDetail(data.data());
            });
        }
    }, [user]);

    // Navigate to sign-in page
    const handleSignup = () => {
        if (user) {
            auth.signOut(); // Sign out the user if they are logged in
        } else {
            navigate('/signin');
        }
    };

    return (
        <div className="container d-flex align-items-center justify-content-center vh-100">
            <div className="card text-center shadow-lg p-4" style={{ maxWidth: '400px', width: '100%' }}>
                <div className="card-body">
                    <h2 className="mb-4">
                        Welcome, {userDetail ? userDetail.name : 'Guest'}!
                    </h2>
                    <p>
                        {userDetail
                            ? `It's great to have you back, ${userDetail.name}.`
                            : 'Please sign in to access your account.'}
                    </p>
                    <button
                        className="btn btn-primary mt-3"
                        onClick={handleSignup}
                    >
                        {userDetail ? 'Sign Out' : 'Sign Up'}
                    </button>
                </div>
            </div>
        </div>
    );
}
