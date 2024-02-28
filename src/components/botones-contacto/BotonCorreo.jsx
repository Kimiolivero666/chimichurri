/* eslint-disable react/prop-types */
import './botonContacto.css'
import { MdEmail } from "react-icons/md";

const BotonCorreo = (props) => {
    return (
        <div className='BotonContacto'>
            
            <MdEmail className='btn'/>
        
            <div className="link">
            <a href={`mailto:${props.email}`} className='info'>{props.email}</a>
            </div>
           
        </div>
    )
}

export default BotonCorreo