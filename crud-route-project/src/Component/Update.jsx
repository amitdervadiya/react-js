import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Update.css';

export default function Update({ data, setdata }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [id, setId] = useState('');
  const [subject, setSubject] = useState('');
  const [gmail, setGmail] = useState('');
  let navigate = useNavigate();

  const handleFind = () => {
    const foundUser = data.find((e) => e.id === Number(id));
    if (foundUser) {
      setName(foundUser.name);
      setAge(foundUser.age);
      setSubject(foundUser.subject);
      setGmail(foundUser.gmail);
    }
  };

  const handleSubmit = () => {
    const updatedData = data.map((e) =>
      e.id === Number(id) ? { ...e, name, age, subject, gmail } : e
    );
    setdata(updatedData);
    navigate('/');
  };

  return (
    <div className="update-page">
      <div className="update-form-container">
        <h1 className="update-header">Update User</h1>

        <div className="input-section">
          <div className="input-box">
            <label className="input-label">User ID</label>
            <input
              className="input-field"
              type="text"
              placeholder="Enter ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <button className="action-btn find-btn" onClick={handleFind}>Find</button>
          </div>

          <div className="input-row">
            <div className="input-box">
              <label className="input-label">Name</label>
              <input
                className="input-field"
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input-box">
              <label className="input-label">Age</label>
              <input
                className="input-field"
                type="number"
                placeholder="Enter Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
          </div>

          <div className="input-row">
            <div className="input-box">
              <label className="input-label">Subject</label>
              <input
                className="input-field"
                type="text"
                placeholder="Enter Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="input-box">
              <label className="input-label">Gmail</label>
              <input
                className="input-field"
                type="email"
                placeholder="Enter Gmail"
                value={gmail}
                onChange={(e) => setGmail(e.target.value)}
              />
            </div>
          </div>

          <button className="action-btn1 submit-btn" onClick={handleSubmit}>Update</button>
        </div>
      </div>
    </div>
  );
}
