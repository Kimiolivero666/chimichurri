
import { Col, Container, Row } from 'react-bootstrap';
import './vinos.css';
import isologo2 from '../../assets/Icon-cuchara.png';
import { useSpring, animated } from 'react-spring';

const Vinos = () => {

    const paragraph1Props = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1000 }, delay: 4000 });
    const paragraph2Props = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1000 }, delay: 4500 });
    const paragraph3Props = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1000 }, delay: 5000 });

    return (
        <div className='Vinos'>
            <Container>
                <Row className='contenedor-vinos'>
                    <Col lg={6} className='Vinos-izq'>
                        <h2>Chimi Wines</h2>
                        <animated.p style={paragraph1Props}>Chimi WINES, es un poco de todo, Wine Bar, Tienda de Vinos, Wine club, un espacio para compartir el VINO a través de maridajes con comida, degustaciones y catas con profesionales.</animated.p>
                        <animated.p style={paragraph2Props}>Descubrir los vinos de las “Capitales del Vino del MUNDO” que nos llevará a un viaje por los vinos del VIEJO mundo como los son, España, Italia, Francia; Portugal, Alemania y Suiza; y los vinos del NUEVO mundo como Argentina, Chile, Estados Unidos, Sudáfrica, Australia y Nueva Zelanda.</animated.p>
                        <animated.p style={paragraph3Props}>Es decir, todo lo que nos une con el vino, es Chimi Wine.</animated.p>
                    </Col>
                    <Col lg={6} className='Vinos-der'>
                        <img src={isologo2} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Vinos;
