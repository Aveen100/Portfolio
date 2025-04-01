import React from "react";
import "./AboutMeStyle.css";
// import myProfile from "../images/profile-image2.jpg";

export default function AboutMe({ id }) {
  return (
    <div className="about-container" id={id}>
      <div className="aboutMe-text">
        <div className="Main">About Me</div>
        {/* <h2> <span>About Me</span></h2> */}
        <h3>Hey there, 👋</h3>
        I'm <span> Aveen </span>, a software engineer <span>with more than 2 years of experience </span>.
        I build websites with a focus on responsiveness, accessibility and pleasing aesthetics.
        My experience in front-end development has equipped me with a solid understanding of
        modern web technologies and best practices.
        I have developed robust web applications using <span>Vue.js, Nuxt.js and React.js</span>, demonstrating my proficiency in
        component-based architecture, state management, server-side rendering, etc.. While I specialize in
        <span> frontend development,</span> I'm also delving into <span>backend technologies.</span>
        I'm all ears for <span>new opportunities</span> to create awesome software solutions.
        Let's team up and cook up some digital wonders together.
        <br /> <br />
        Want to know more about me? Feel free to <a className='resume' href="/Aveen's Resume.pdf"
          target="_blank" rel="noopener noreferrer">explore my resume.</a>
      </div>

      <div className="name">Aveen</div>
    </div>
  );
}
