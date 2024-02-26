import { Col, Container, Row } from 'react-bootstrap';
import './vinos.css';
import isologo2 from '../../assets/Icon-cuchara.png';

const Vinos = () => {
    return (
        <div className='Vinos'>
            <Container>
                <Row className='contenedor-vinos'>
                    <Col lg={6} className='Vinos-izq'>
                        <h2>Chimi Wines</h2>
                        <p>Chimi WINES, es un poco de todo, Wine Bar, Tienda de Vinos, Wine club, un espacio para compartir el VINO a través de maridajes con comida, degustaciones y catas con profesionales.</p>
                        <p>Descubrir los vinos de las “Capitales del Vino del MUNDO” que nos llevará a un viaje por los vinos del VIEJO mundo como los son, España, Italia, Francia; Portugal, Alemania y Suiza; y los vinos del NUEVO mundo como Argentina, Chile, Estados Unidos, Sudáfrica, Australia y Nueva Zelanda.</p>
                        <p>Es decir, todo lo que nos une con el vino, es Chimi Wine.</p>
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
