import React, { useState, useRef } from 'react'; 
import './NavBar.css';

import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const NavBar = () => {
  const [menu, setMenu] = useState('home'); 
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="navbar">

      {/* Mobile Menu Open Icon */}
      <img src={menu_open} onClick={openMenu} alt="menu open" className='nav-mob-open' />

      {/* Menu List */}
      <ul ref={menuRef} className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        {/* Mobile Menu Close Icon */}
        <img src={menu_close} onClick={closeMenu} alt="menu close" className="nav-mob-close" />

        {/* Menu Items */}
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#home'>
            <p onClick={() => { setMenu("home"); closeMenu(); }}>Home</p>
          </AnchorLink>
          {menu === "home" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#about'>
            <p onClick={() => { setMenu("about"); closeMenu(); }}>About Me</p>
          </AnchorLink>
          {menu === "about" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#services'>
            <p onClick={() => { setMenu("services"); closeMenu(); }}>Services</p>
          </AnchorLink>
          {menu === "services" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#work'>
            <p onClick={() => { setMenu("work"); closeMenu(); }}>Portfolio</p>
          </AnchorLink>
          {menu === "work" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            <p onClick={() => { setMenu("contact"); closeMenu(); }}>Contact</p>
          </AnchorLink>
          {menu === "contact" && <img src={underline} alt="underline" />}
        </li>
      </ul>

      {/* Connect Button */}
      <div className="nav-connect">
        <AnchorLink className='anchor-link' offset={50} href='#contact'>
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default NavBar;
