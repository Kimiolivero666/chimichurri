import { Container } from 'react-bootstrap';
import './navbar.css';
import Logo from '../../assets/Marca.png';
import { useEffect, useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaBarsStaggered } from 'react-icons/fa6';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleLinkClick = () => {
      // Cierra el menú cuando se hace clic en un enlace
      setMenuOpen(false);
    };

    const links = document.querySelectorAll('.link-menu');
    links.forEach((link) => {
      link.addEventListener('click', handleLinkClick);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', handleLinkClick);
      });
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  return (
    <nav className='Navbar fixed-top'>
      <Container>
        <div className='navbar-contenedor'>
          <div className='navbar-img d-none d-md-block'>
          <a href='#inicio'><img src={Logo} alt='' /></a>
           
          </div>
          <div className={`menu m-auto ${menuOpen ? 'active' : ''}`}>
            <div className='menu-box'>
              <a href='#inicio' className='primer-enlace' onClick={closeMenu}>
                Inicio
              </a>
              <a href='#Espacio-Chimi' className='link-menu' onClick={closeMenu}>
                Espacio Chimi
              </a>
              <a href='#Vinos' className='link-menu' onClick={closeMenu}>
                Vinos
              </a>
              <a href='#Comidas' className='link-menu' onClick={closeMenu}>
                Comidas
              </a>
              <a href='#Contacto' className='link-menu' onClick={closeMenu}>
                Contacto
              </a>
            </div>
          </div>

          <div className='icons'>
            <FaFacebookF className='icono' />
            <FaInstagram className='icono' />
          </div>

          <div className='navbar-img d-block d-md-none'>
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
