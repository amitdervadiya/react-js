import { useState, useEffect, useRef } from 'react';
import './App.css';

const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  // Add more options here
];

function App() {
  const [formData, setFormData] = useState({
    password: '',
    firstname: '',
    lastname: '',
    email: '',
  });
 
  const inputRef = useRef(null);
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);


  // Focus on firstname when the form loads
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    let nm= inputRef.current.value
    let nm1= inputRef1.current.value
    let nm2= inputRef2.current.value
    let nm3= inputRef3.current.value

    alert("info submitted \n"+nm+"\n"+nm1+"\n"+nm2+"\n"+"*****")

  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstname"
          placeholder="firstname"
          value={formData.firstname}
          ref={inputRef} // Ref applied only to the firstname field
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastname"
          placeholder="lastname"
          value={formData.lastname}
          onChange={handleChange}
          required
          ref={inputRef1} 
        />
        <input
        ref={inputRef2} 
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
        ref={inputRef3} 
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
