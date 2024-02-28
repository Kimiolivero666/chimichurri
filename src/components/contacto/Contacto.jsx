import { Container, Row, Col } from 'react-bootstrap'
import './contacto.css'
import BotonCorreo from '../botones-contacto/BotonCorreo'
import BotonWhatsapp from '../botones-contacto/BotonWhatsapp'


const Contacto = () => {
    return (
        <div className='Contacto text-center'>
            <h1>Contacto y reservas</h1>
            <Container>
                <Row className='contenedor-contacto-btn'>
                    <Col lg={6} className='bg'>
                        <BotonCorreo email="valenciachimichurri@gmail.com " />
                    </Col>
                    <Col lg={6} className='bg'>
                        <BotonWhatsapp telefono="+5492616419604" />
                    </Col>
                </Row>
                <div className="horario">
                    <p>El horario habitual de Chimichurri es de
                        Martes a Domingo; de 10 hs a 24 hs. Para
                        degustaciones, horarios de mañana y de
                        tarde. Consultar por días y horarios
                        especiales</p>
                    <div className="horarios">

                        <h6>Wine Bar de <span>10 a 24 hs.</span></h6>
                        <h6>Wine Store de <span>10 a 22 hs.</span></h6>
                        <h6>Cocina de <span>12 a 14:30 hs y 20 a 23 hs.</span></h6>
                        <h6>¡Empanadas y Vinos todo el día!</h6>
                    </div>

                    <h5>Te esperamos para disfrutar experiencias únicas alrededor del mundo del vino y la gastronomía Argentina.</h5>

                </div>
                <div className="mapa">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3079.8037709096084!2d-0.347308724035337!3d39.4737615716067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13. 1!3m3!1m2!1s0xd60488fa5c276f9%3A0x50996a91b881f169!2zQXZkYS4gZGUgQmxhc2NvIEliw6HDsWV6LCAxMDksIEFsZ2lyw7NzLCA0NjAyMiBWYWxlbmNpYSwgRXNwYcOxYQ!5e0!3m2!1ses!2sar!4v1709137942879!5m2!1ses!2sar"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <p>Avenida Blasco Ibañez 109, bajo. Algirós, CP 46022. Valencia.  </p>
                </div>

            </Container>
        </div>
    )
}

export default Contacto