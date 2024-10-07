import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home({ data }) {
  return (
    <div className="home-container">
      <nav className="nav-links">
        <Link className="styled-link1" to={"/Create"}>Create</Link>
        <Link className="styled-link2" to={"/Update"}>Update</Link>
        <Link className="styled-link3" to={"/Delete"}>Delete</Link>
      </nav>

      <div className="data-cards">
        {data && data.map((e, i) => {
          return <div className="card" key={i}>
            <h3>ID: {e.id}</h3>
            <p>Name: {e.name}</p>
            <p>Age: {e.age}</p>
            <p>subject: {e.subject}</p>
            <p>gmail: {e.gmail}</p>
          </div>
        })}
      </div>
    </div>
  );
}
