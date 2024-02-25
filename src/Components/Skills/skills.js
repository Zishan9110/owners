import React from 'react'
import './skills.css';
import UIDesign from '../../Assets/UIDesign.png';
import WebDesign from '../../Assets/WebDesign.png';
import AppDesign from '../../Assets/AppDesign.png';

const Skills = () => {
  return (
    <secton id="skills">
      <span className="skillTitle">What I do</span>
      <div className="skillsPara">
      <span className="skillDes">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eveniet distinctio omnis officiis quaerat molestias, ad optio necessitatibus commodi fugiat in cumque mollitia, quis suscipit aspernatur doloremque enim ex iste. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente totam voluptatem sint numquam accusantium.</span>
      </div>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>This is Demo text. you can write your own content here</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Design</h2>
            <p>This is Demo text. you can write your own content here</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppDesign} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>App Design</h2>
            <p>This is Demo text. you can write your own content here</p>
          </div>
        </div>
      </div>
    </secton>
  )
}

export default Skills