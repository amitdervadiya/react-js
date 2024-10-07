import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Delete.css'; 

export default function Delete({ data, setdata }) {
    const [id, setId] = useState('');
    const navigate = useNavigate();

    const handleDel = () => {
        if (id) {
            const delData = data.filter((e) => e.id !== Number(id));
            setdata(delData);
            navigate('/');
        } else {
            alert("Please enter a valid ID.");
        }
    };

    return (
        <div className="delete-container">
            <h1>Delete Item</h1>
            <input 
                type="number" 
                placeholder="Enter ID to delete" 
                onChange={(e) => setId(e.target.value)} 
                className="input-field"
            />
            <button onClick={handleDel} className="delete-button">Delete</button>
        </div>
    );
}
