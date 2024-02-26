import { Col, Container, Row } from 'react-bootstrap'
import './comidas.css'

const Comidas = () => {
    return (
        <div className='comidas'>
            <Container>
                <Row className='contenedor-comidas'>
                    <Col md={1}></Col>
                    <Col md={5} className='comidas-izq'>
                    </Col>
                    <Col md={5} className='comidas-der'>
                        <h2>Chimi Comidas</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum minima, quam voluptatum pariatur unde at
                            aliquid consequatur excepturi repellendus. Nobis perspiciatis similique veniam dolorem nam earum excepturi
                            quisquam, quae repellat.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam ea cupiditate qui itaque modi facere
                            quos nostrum sunt praesentium, aliquid temporibus minus omnis laudantium vel doloremque dolorem tempora.
                            Quae, deserunt.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam ea cupiditate qui itaque modi facere
                            quos nostrum sunt praesentium, aliquid temporibus minus omnis laudantium vel doloremque dolorem tempora.
                            Quae, deserunt.</p>

                    </Col>
                </Row>
            </Container>
            Vinos
        </div>
    )
}

export default Comidas