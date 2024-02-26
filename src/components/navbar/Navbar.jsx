import { Container } from 'react-bootstrap'
import './navbar.css'
import Logo from '../../assets/Marca.png'

import { useEffect, useState } from 'react'
import { HiBars3 } from 'react-icons/hi2';
import { IoCloseSharp } from 'react-icons/io5';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    

    

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden'; // Deshabilita el scroll cuando el menú está abierto
        } else {
            document.body.style.overflow = 'auto'; // Habilita el scroll cuando el menú está cerrado
        }

        return () => {
            document.body.style.overflow = 'auto'; // Asegura que el scroll esté habilitado al desmontar el componente
        };
    }, [menuOpen]);



    return (
        <nav className='Navbar  fixed-top'>
            <Container>
                <div className="navbar-contenedor">
                    <div className="navbar-img">
                         <img src={Logo} alt='' />
                    </div>
                    <div className={`menu m-auto ${menuOpen ? 'active' : ''}`}>
                        <div className="menu-box">
                            <a href='#inicio' className='primer-enlace'>Inicio</a>
                            <a href='#Espacio-Chimi'  className='link-menu'>Espacio Chimi</a>
                            <a href='#Vinos' className='link-menu'>Vinos</a>
                            <a href='#Comidas' className='link-menu'>Comidas</a>
                            <a href='#Contacto' className='link-menu'>Contacto</a>
                        </div>
                    </div>
                    <div className="icons">
                        <FaFacebookF className='icono' />
                        <FaInstagram className='icono' />
                    </div>

                    
                        {menuOpen ? (
                            <IoCloseSharp className='barns d-lg-none' onClick={toggleMenu} />
                        ) : (
                            <HiBars3 className='barns d-lg-none' onClick={toggleMenu} />
                        )}
                    
                </div>
            </Container>
        </nav>
    )
}

export default Navbar