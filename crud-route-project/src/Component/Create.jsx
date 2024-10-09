import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Create.css'; 

export default function Create({ data, setdata }) {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [subject, setSubject] = useState('');
    const [gmail, setGmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (name && age && subject && gmail) {
            setdata([...data, { id: data.length + 1, name, age: Number(age), subject, gmail }]);
            navigate('/');
        } else {
            alert("Please fill in all fields.");
        }
    };

    return (
        <div className="create-page">
            <div className="create-form-container">
                <h1 className="create-header">Create record</h1>
                <div className="input-section">
                    <div className="input-row">
                        <div className="input-box">
                            <label className="input-label">Name</label>
                            <input 
                                type="text" 
                                className="input-field" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                            />
                        </div>
                        <div className="input-box">
                            <label className="input-label">Age</label>
                            <input 
                                type="number" 
                                className="input-field" 
                                value={age} 
                                onChange={(e) => setAge(e.target.value)} 
                            />
                        </div>
                    </div>
                    <div className="input-row">
                        <div className="input-box">
                            <label className="input-label">Subject</label>
                            <input 
                                type="text" 
                                className="input-field" 
                                value={subject} 
                                onChange={(e) => setSubject(e.target.value)} 
                            />
                        </div>
                        <div className="input-box">
                            <label className="input-label">Gmail</label>
                            <input 
                                type="email" 
                                className="input-field" 
                                value={gmail} 
                                onChange={(e) => setGmail(e.target.value)} 
                            />
                        </div>
                    </div>
                </div>
                <button className="submit-btn" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
}
