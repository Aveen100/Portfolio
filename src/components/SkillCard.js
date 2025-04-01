import React from 'react'
import "./SkillCardStyle.css";
import { CgCPlusPlus } from "react-icons/cg";
import { DiGit, DiReact } from "react-icons/di";
import { SiBootstrap, SiVuetify, SiNodedotjs } from "react-icons/si";
import { TbBrandCss3, TbBrandJavascript, TbBrandHtml5, TbBrandVue, TbBrandNuxt } from "react-icons/tb";

export default function SkillCard({ id }) {
  return (
    <>
      <div className="skill-container" id={id}>
        <div className="skill-header">My Skills</div>
        <div className="skill-box">
          <h2>Languages</h2>
          <div className="skillset">
            <abbr title='JavaScript'><TbBrandJavascript className='techLogo' /></abbr>
            <abbr title='HTML 5'><TbBrandHtml5 className='techLogo' /></abbr>
            <abbr title='C++'><CgCPlusPlus className='techLogo' /></abbr>
          </div>
        </div>
        <div className="skill-box">
          <h2>Libraries and Frameworks</h2>
          <div className="skillset">
            <abbr title='VueJS'><TbBrandVue className='techLogo' /></abbr>
            <abbr title='NuxtJS'><TbBrandNuxt className='techLogo' /></abbr>
            <abbr title='VuetifyJS'><SiVuetify className='techLogo' /></abbr>
            <abbr title='ReactJS'><DiReact className='techLogo' /></abbr>
            <abbr title='CSS 3'><TbBrandCss3 className='techLogo' /></abbr>
            <abbr title='NodeJS'><SiNodedotjs className='techLogo' /></abbr>
            <abbr title='Git/Github'><DiGit className='techLogo' /></abbr>
            {/* <abbr title='NPM'><IoLogoNpm className='techLogo'/></abbr> */}
            <abbr title='Bootstrap'><SiBootstrap className='techLogo' /></abbr>
            {/* <abbr title='React Router'><SiReactrouter className='techLogo'/></abbr> */}
          </div>
        </div>
        {/* <div className="skill-box">
            <h2>Tools & Systems</h2>
            <div className="skillset">
              <abbr title='Visual Studio Code'><SiVisualstudiocode className='techLogo'/></abbr>
              <abbr title='Windows'><IoLogoWindows className='techLogo'/></abbr>
              <abbr title='Figma'><SiFigma className='techLogo'/></abbr>
              <abbr title='Inkscape'><SiInkscape className='techLogo'/></abbr>
            </div>            
          </div> */}
      </div>
    </>

  )
}
