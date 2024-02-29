import { Col, Container, Row } from 'react-bootstrap'
import './comidas.css'


const Comidas = () => {

    

    return (
        <div className='comidas'>
            <Container>
                <Row className='contenedor-comidas'>

                    <Col lg={6} className='comidas-izq'>
                    </Col>
                    <Col lg={6} className='comidas-der'>
                        <h2>Chimi Food</h2>
                        <p>Y Chimi FOOD, es la pareja, la gastronomía, nuestra comida favorita, criolla, regional en sus diferentes versiones con salsa chimichurri y con productos e ingredientes frescos de Valencia; aquella que heredamos de nuestros antepasados originarios y mediterráneos. Muchas carnes rojas tierna de vaca y ternera, secreto de cerdo, los chorizos, el chori, el lomito, las empanadas, la provoleta, las tostadas especiales y las patatas fritas son parte de nuestros menús.</p>
                        <p>A parte de poder disfrutar la comida en nuestro pequeño Restó. También ofrecemos servicio delivery y por supuesto, Take Away. Haaa y hacemos el asado argentino en tu evento privado! </p>
                        <p>Cada uno de nuestros platos es un maridaje perfecto para nuestros principales vinos. A esta comida clásica nuestra, le sumamos nuestra propia experiencia y nuestro propio paladar.</p>
                    </Col>
                </Row>
            </Container>
            Vinos
        </div>
    )
}

export default Comidas