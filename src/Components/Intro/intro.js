import React from 'react';
import './intro.css';
import myImg from '../../Assets/myImg.png';
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContant">
                <span className="hello">Hello</span>
                <span className="introText">
                    I'm <span className="introName">Zishan</span><br />
                    Websites Developer
                </span>
                <p className="introPara">
                    I'm a skilled web developer with experience in creating <br />
                    usually appealing and friendly websites.
                </p>
                <Link><button className="btn">Hire Me</button></Link>
            </div>
            <img src={myImg} alt="Background" className="bg" />
        </section>
    );
}

export default Intro;
