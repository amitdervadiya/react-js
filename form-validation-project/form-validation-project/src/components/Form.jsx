import React from 'react';
import { useState } from 'react';
import CircularIntegration from './Acceptbtn';
import { TextField } from '@mui/material';




export default function Form() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [userArr, setUserArr] = useState('');
  const [emailarr, setEmailArr] = useState('');
  const [category, setCaterogy] = useState('');
  const [categoryarr, setCaterogyarr] = useState('');
  const [city, setCity] = useState('');
  const [cityarr, setCityarr] = useState('');





  const handleclick = (e) => {
    e.preventDefault();
    if (username == '') {
      setUserArr('Name is missing');
    }
    else {
      setUserArr('')
    }
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailArr('Invalid email format');
    }
    else {
      setEmailArr('');
    }
    if (city == '') {
      setCityarr('city name required')
    }
    else {

      setCityarr('')
    }

    if (category == '') {
      setCaterogyarr('Please select a category');
    }
    else {
      setCaterogyarr('')
    }

    console.log(username);
    console.log(email);
  };

  return (
    <div className="form-container">
      <form action="" onSubmit={(e) => handleclick(e)} className="custom-form">
        <TextField id="outlined-basic" label='Name' variant="outlined" type="text"
          onChange={(e) => setUsername(e.target.value)}

          className="input-field" />


        <span className="error">{userArr}</span>
        <br />
        <TextField id="outlined-basic" variant="outlined" type="text"
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          className="input-field" />


        <span className="error">{emailarr}</span>
        <br />
        <TextField id="outlined-basic" variant="outlined" type="text"

          onChange={(e) => setCity(e.target.value)}
          label="City"
          className="input-field" />

        <span className="error">{cityarr}</span>
        <select name="" id="" onChange={(e) => setCaterogy(e.target.value)} className="dropdown" >
          <option value="category">Product Category</option>
          <option value="electric">Electric</option>
          <option value="clothes">Clothes</option>
          <option value="mobiles">mobiles</option>
          <option value="furniture">furniture</option>
          <option value="fruits">fruits</option>
        </select>
        <br />
        <span className="error">{categoryarr}</span>
        <br />

        <div className="btn1">
          <button type="submit" className="submit-button"> submit </button>

          {/* <CircularIntegration />  */}
        </div>

        <hr />
      </form>
    </div>
  );
}
