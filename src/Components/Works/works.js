import React from 'react';
import './works.css';
import portfolio1 from '../../Assets/portfolio1.png';
import portfolio2 from '../../Assets/portfolio2.png';
import portfolio3 from '../../Assets/portfolio3.png';
import portfolio4 from '../../Assets/portfolio4.png';
import portfolio5 from '../../Assets/portfolio5.png';
import portfolio6 from '../../Assets/portfolio6.png';


const Works = () => {
  return (
    <section id="works">
      <h2 className="workstitle">My Portfolio</h2>
       <div className="worksPara">
      <span className="worksDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta est magnam vitae nisi deleniti praesentium maiores dolorum delectus officia recusandae non suscipit nulla possimus commodi provident rerum fuga atque corrupti quas ipsa, excepturi reiciendis fugiat cumque voluptas! Dolorum, illo atque.</span>
      </div>
      <div className="worksImgs">
             <img src={portfolio1} alt="" className="worksimg" />
             <a href="https://zishan9110.github.io/project-2/"><img src={portfolio2} alt="" className="worksimg" /></a>
             <img src={portfolio3} alt="" className="worksimg" />
             <img src={portfolio4} alt="" className="worksimg" />
             <img src={portfolio5} alt="" className="worksimg" />
             <img src={portfolio6} alt="" className="worksimg" />
      </div>
      <button className="worksBtn">See More</button>
    </section>
  )
}

export default Works