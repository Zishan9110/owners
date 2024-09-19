import React from 'react'
import './intro.css';
import myImg from '../../Assets/myImg.png';
import {Link} from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContant">
                <span className="hello">Hello</span>
<<<<<<< HEAD
                <span className="introText">I,m <span className="introName">Zishan</span><br />Websites Designer</span>
                <p className="introPara">I,m a Skilled web developer with experience in creating <br/>usually appeling and friendly websites</p>
=======
                <span className="introText">I,m <span className="introName">Zishan</span><br />Websites Developer</span>
                <p className="introPara">I,m a Skilled web designer with experience in creating <br/>usually appeling and friendly website</p>
>>>>>>> 64977de7325ef8b0708b9b02f5e47f0f3fa0ce89
                <Link><button className="btn">Hire Me</button></Link>
            </div>
            <img src={myImg} alt="" className="bg" />
        </section>
    )
}

export default Intro