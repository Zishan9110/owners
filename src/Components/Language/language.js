import React from 'react'
import './language.css';
import javascript from '../../Assets/javascript.png'; 
import CPlusplus from '../../Assets/CPlusplus';  

const Language = () => {
  return (
    <section id="language">
        <h2>My Language</h2>
        <div className="languagePara">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, nulla. Cupiditate ut architecto blanditiis necessitatibus inventore explicabo suscipit dolorem incidunt.</p>
        </div>
        <div className="languageNames">
            <img src={javascript} alt="" className="languageName" />
            <img src={CPlusplus} alt="" className="languageName" />
            <img src={javascript} alt="" className="languageName" />
            <img src={javascript} alt="" className="languageName" />
        </div>
    </section>
  )
}

export default Language