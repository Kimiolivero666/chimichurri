import { Col, Container, Row } from 'react-bootstrap'
import './vinos.css'

import isologo2 from '../../assets/Icon-cuchara.png'

const Vinos = () => {
    return (
        <div className='Vinos'>
            <Container>
                <Row className='contenedor-vinos'>
                    
                    <Col md={6} className='Vinos-izq'>
                        <h2>Chimis Vinos</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum minima, quam voluptatum pariatur unde at aliquid consequatur excepturi repellendus. Nobis perspiciatis similique veniam dolorem nam earum excepturi quisquam, quae repellat.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam ea cupiditate qui itaque modi facere quos nostrum sunt praesentium, aliquid temporibus minus omnis laudantium vel doloremque dolorem tempora. Quae, deserunt.</p>
                        
                    </Col>
                    <Col md={6} className='Vinos-der'>
                        
                    </Col>

                    <img src={isologo2} alt="" />

                </Row>
            </Container>
        </div>
    )
}

export default Vinos