import { Container } from 'react-bootstrap';
import './navbar.css';
import Logo from '../../assets/Marca.png';
import {  useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaBarsStaggered } from 'react-icons/fa6';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('inicio');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLinkClick = (linkId) => {
    setActiveLink(linkId);
    closeMenu();
  };

  return (
    <nav className='Navbar fixed-top'>
      <Container>
        <div className='navbar-contenedor'>
          <div className='navbar-img d-none d-md-block'>
            <a href='#inicio'><img src={Logo} alt='' /></a>
          </div>
          <div className={`menu m-auto ${menuOpen ? 'active' : ''}`}>
            <div className='menu-box'>
              <a href='#inicio' className={`primer-enlace ${activeLink === 'inicio' ? 'active' : ''}`} onClick={() => handleLinkClick('inicio')}>
                Inicio
              </a>
              <a href='#Espacio-Chimi' className={`link-menu ${activeLink === 'Espacio-Chimi' ? 'active' : ''}`} onClick={() => handleLinkClick('Espacio-Chimi')}>
                Espacio Chimi
              </a>
              <a href='#Vinos' className={`link-menu ${activeLink === 'Vinos' ? 'active' : ''}`} onClick={() => handleLinkClick('Vinos')}>
                Vinos
              </a>
              <a href='#Comidas' className={`link-menu ${activeLink === 'Comidas' ? 'active' : ''}`} onClick={() => handleLinkClick('Comidas')}>
                Comidas
              </a>
              <a href='#Contacto' className={`link-menu ${activeLink === 'Contacto' ? 'active' : ''}`} onClick={() => handleLinkClick('Contacto')}>
                Contacto
              </a>
            </div>
          </div>

          <div className='icons'>
            <a href="https://www.facebook.com/profile.php?id=61556950231428&sk=about&locale=es_LA" target="_blank"><FaFacebookF className='icono' /></a>
            <a href="https://www.instagram.com/chimichurrivalencia?igsh=MW04cHl0ZmpseWJhNw==" target="_blank"><FaInstagram className='icono' /></a>
          </div>

          <div className='navbar-img d-block d-md-none text-center'>
            <a href='#inicio'><img src={Logo} alt='' /></a>
          </div>

          {menuOpen ? (
            <IoCloseSharp className='barns d-lg-none' onClick={toggleMenu} />
          ) : (
            <FaBarsStaggered className='barns d-lg-none' onClick={toggleMenu} />
          )}
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
