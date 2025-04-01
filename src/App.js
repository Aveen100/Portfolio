import React from "react";
import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomeBanner from "./components/HomeBanner";
import ProjectCard from "./components/ProjectCard";
import AboutMe from "./components/AboutMe";
import SkillCard from "./components/SkillCard";
import Education from "./components/Education";
import Experience from "./components/Experience";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <>
      <AnimatedCursor
        color="#fff"
        innerSize={8}
        outerSize={50}
        innerScale={1}
        outerScale={2.2}
        outerAlpha={0}
        outerStyle={{
          background: "#ffffff",
          mixBlendMode: "exclusion",
        }}
        innerStyle={{
          backgroundColor: "#F94892",
        }}
      />
      <div>
        <Navbar />
        <HomeBanner id="home" />
        <ProjectCard
          id="project"
          className="odd"
          projectTitle="AndroHealth Solutions"
          projectDesc="Currently working on AndroHealth Solution,a health based solution built in Nuxt.Js. Responsible for implementing user interfaces and improving user experience in cutting edge health care application."
          projectImg={require("./images/AndroMockup.png")}
          ishideLogo="false"
          deployedProjectLink="https://ahhis.com/"
          projectLink="https://ahhis.com/"
        />
        <ProjectCard
          projectTitle="Whats Cooking"
          projectDesc="Developed a comprehensive restaurant management system that streamlines operations, enhances customer service, and facilitates efficient management of a restaurant business"
          projectImg={require("./images/CookingMockup.png")}
          ishideLogo="true"
        />
        {/* <ProjectCard
        projectTitle="Animated Card: featuring the latest glassmorphism trend"
        projectDesc="React JS provided me the flexibility needed to create an interactive card with a glass-like effect, which adds a sense of depth and dimension to the user interface"
        projectLink="https://github.com/Deepajha14/Touch-me-not-Card"
        deployedProjectLink="https://deepajha14.github.io/Touch-me-not-Card/"
        projectImg={require('./images/projectGlassmorphism.png')}
      />

      <ProjectCard="
        className = "odd"
        projectTitle="Rog-free: accessible anytime, anywhere"
        projectDesc="An approach to target and heal specific health conditions by transforming the living room into a yoga studio"
        projectLink="https://github.com/Deepajha14/Rog-Free"
        deployedProjectLink="https://deepajha14.github.io/Rog-Free/"
        projectImg={require('./images/projectRogfree.png')}
      /> */}
        <Experience id="experience" />
        <SkillCard id="skills" />
        <Education id="education" />
        <AboutMe id="about" />
        <Footer />
      </div>
    </>
  );
}

export default App;
