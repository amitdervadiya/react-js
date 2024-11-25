import React, { useState } from 'react';
import Navbar1 from './Navbar1';
import One from './One';
import Two from './Two';
import { useNavigate } from 'react-router-dom';
import Three from './Three';
import Four from './Four';
import Header from './Header';

export default function Resume() {
  const navigate = useNavigate();
  const [selectedComponent, setSelectedComponent] = useState('One');

  const navigateToEducation = () => {
    setSelectedComponent('Two');
  };

  return (
    <>
   <Header/>
      <div className="container r-1">
        <div className="row menu">
          {/* Left Side - Menu */}
          <div className="col-lg-4 col-md-12  rr-1">
            <h1 className="heading-1">Why hire me?</h1>
            <p className="text-white">
              Lorem ipsum dolor sit amet  consectetur <br />adipisicing elit.
            </p>
            <div className="boxes">
              <div className="box-1" onClick={() => setSelectedComponent('One')}>Experience</div>
              <div className="box-2" onClick={() => setSelectedComponent('Two')}>
                Education
              </div>
              <div className="box-3" onClick={() => setSelectedComponent('Three')}>
                Skills
              </div>
              <div className="box-4" onClick={() => setSelectedComponent('Four')}>
                About me
              </div>
            </div>
          </div>

          {/* Right Side - Content Display */}
          <div className="col-lg-8 col-md-12 rr-2" style={{border:'1px solid white'}}>
            {selectedComponent === 'One' && <One />}
            {selectedComponent === 'Two' && <Two />}
            {selectedComponent === 'Three' && <Three />}
            {selectedComponent === 'Four' && <Four />}
          </div>
        </div>
      </div>
    </>
  );
}
