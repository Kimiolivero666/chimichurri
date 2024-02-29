import './footer.css'
import collBaby from '../../assets/cool-baby.png'
import logoBlanco from '../../assets/Chimichurri marca-04.png'
import { Container } from 'react-bootstrap'

const Footer = () => {
    return (
        <div className='Footer'>
            <Container>
                <div className="contenedor-footer">
                    <div className="img-footer2 text-center">
                        <img src={logoBlanco} alt="" />
                    </div>
                    <div className="copy">
                        <p>Copyright © 2024 Todos los derechos reservados por</p>
                        <img src={collBaby} alt="" />
                    </div>
                    <div className="img-footer">
                        <img src={logoBlanco} alt="" />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer