import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';

export default function Signup() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [city, setCity] = useState('');
    const [hobby, setHobby] = useState('');
    const [name, setName] = useState('');



    const handlesubmit = (e) => {
        e.preventDefault();
        if (email && city && password && hobby && name){

        
            createUserWithEmailAndPassword(auth, email, password).then(data => {
                setDoc(doc(db, "users", data.user.uid), {
                    name: name,
                    city: city,
                    hobby: hobby,
                    email: email
                })
                navigate('/home')
            })
        }
    };
  const home = ()=>{
  }



    return (

        <div style={{ maxWidth: '300px', margin: 'auto', padding: '20px', textAlign: 'center' }}>
            <form onSubmit={handlesubmit}>
                <div>
                    <input
                        type="text"
                        placeholder="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        style={{ display: 'block', margin: '10px 0', width: '100%', padding: '8px' }}
                    />
                </div>
                <div>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{ display: 'block', margin: '10px 0', width: '100%', padding: '8px' }}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{ display: 'block', margin: '10px 0', width: '100%', padding: '8px' }}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="City"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                        style={{ display: 'block', margin: '10px 0', width: '100%', padding: '8px' }}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Hobby"
                        value={hobby}
                        onChange={(e) => setHobby(e.target.value)}
                        required
                        style={{ display: 'block', margin: '10px 0', width: '100%', padding: '8px' }}
                    />
                </div>
                <button type="submit" style={{ padding: '10px 15px', cursor: 'pointer' }} onClick={home}> 
                    Sign up
                </button>

            </form>
        </div>
    );
}
