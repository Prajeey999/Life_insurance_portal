import React from 'react';
import './Landing.css';


const LandingPage = () => {
  return (
    <body className='homer'>
    <div className="landing-page">
      <header>
        <div className="contae">
          <a href="#" className="logo">Nova <b>Guard</b></a>
          <ul className="links">
            {/* <li>Home</li>
            <li>About Us</li>
            <li>Work</li>
            <li>Info</li> */}
            <a href='/login'><li>Login</li></a>
          </ul>
        </div>
      </header>
      <div className="content">
        <div className="contae">
          <div className="info">
            <h1>The Best Place for Getting the Best Policy</h1>
            <p>NovaGuard offers various life insurance products that provide financial protection to policyholders and their families in the event of unfortunate circumstances such as death, disability, or critical illness..</p>
            {/* <button>Button name</button> */}
          </div>
          <div className="image">
            <img src=".\src\img\Paid idea.gif" alt="Landing Page" />
          </div>
        </div>
      </div>
    </div>
  </body>
  );
};

export default LandingPage;
