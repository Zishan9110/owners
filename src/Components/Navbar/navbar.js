import React, { useState } from 'react'
import './navbar.css';
import logo from '../../Assets/logo.png';
import Menu from '../../Assets/menu.png';
import {Link} from 'react-scroll';

const Navbar = () => {
  const[showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
        <img src={logo} alt="logo" className='logo'/>
        <div className="desktopMenu">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-40} duration={500}className="desktopMenuListItem">Client</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500}className="desktopMenuListItem">Portfoliot</Link>
        <Link activeClass='active' to='language' spy={true} smooth={true} offset={-100} duration={500}className="desktopMenuListItem">About</Link>
     </div>
        <button className="desktopMenuBtn" onClick={() => {
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'})
        }}>Contact</button>


      <img src={Menu} alt="menu" className='mobMenu' onClick={() => setShowMenu(!showMenu)}/>
        <div className="navMenu" style={{display: showMenu? 'flex' : 'none'} }>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem"  onClick={() => setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-40} duration={500}className="listItem"  onClick={() => setShowMenu(false)}>Client</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500}className="listItem"  onClick={() => setShowMenu(false)}>Portfoliot</Link>
        <Link activeClass='active' to='language' spy={true} smooth={true} offset={-100} duration={500}className="listItem"  onClick={() => setShowMenu(false)}>About</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500}className="listItem"  onClick={() => setShowMenu(false)}>Contact</Link>
     </div>
    </nav>

  )
}

export default Navbar