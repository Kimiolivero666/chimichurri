/* eslint-disable react/prop-types */
import './botonContacto.css';
import { FaWhatsapp } from 'react-icons/fa';

const BotonWhatsapp = (props) => {
    const handleWhatsAppClick = () => {
        const newWindow = window.open('', '_blank');
        newWindow.location.href = `https://wa.me/${props.telefono}`;
    };

    return (
        <div className='BotonContacto'>
            <FaWhatsapp className='btn' onClick={handleWhatsAppClick}/>
            <div className="link">
                <a onClick={handleWhatsAppClick} className='info'>{props.telefono}</a>
            </div>
        </div>
    );
};

export default BotonWhatsapp;
