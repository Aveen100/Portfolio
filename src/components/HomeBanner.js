import React from 'react';
import "./HomeBannerStyle.css";
import cartoon from "../images/main.png";

export default function HomeBanner({id}) {
  return (
    <div className="home" id={id}> 
        <div className='content'>
            <div className="wrapper">
              <div className="name">Muhammad Aveen Ur Rehman</div>
              <div className="staticTitle">
                Software
                <div className='hrLine'></div>
              </div>
              <ul className="dynamicTitle">
                <li><span>Engineer</span></li>
              </ul>
              <a className='btn' href="https://www.linkedin.com/in/muhammad-aveen-ur-rehman-269b4b24b/" target="_blank" rel="noopener noreferrer">Hire Me</a>
            </div>
        </div>
        <div className="mask">
            <img className='bg' src={cartoon} alt="girl-with-laptop" />
        </div>
    </div>
  )
}
