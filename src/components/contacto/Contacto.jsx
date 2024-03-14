import { Container, Row, Col } from 'react-bootstrap'
import './contacto.css'
import BotonCorreo from '../botones-contacto/BotonCorreo'
import BotonWhatsapp from '../botones-contacto/BotonWhatsapp'
import { motion } from 'framer-motion';


const Contacto = () => {
    return (
        <div className='Contacto text-center'>
            <motion.h1 initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.5 }} transition={{ delay: 0.2, duration: 0.5 }} variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}>Contacto y reservas</motion.h1>
            <Container>
                <Row className='contenedor-contacto-btn'>
                    <Col lg={6} className='bg'>
                        <BotonCorreo email="valenciachimichurri@gmail.com" />
                    </Col>
                    <Col lg={6} className='bg'>
                        <BotonWhatsapp telefono="+34697508690" />
                    </Col>
                </Row>
                <div className="horario">
                    {/* <p>El horario habitual de Chimichurri es de */}
                    {/* Martes a Domingo; de 10 hs a 24 hs. Para */}
                    {/* degustaciones, horarios de mañana y de */}
                    {/* tarde. Consultar por días y horarios */}
                    {/* especiales</p> */}
                    <div className="horarios">
                        <h6>Abrimos todos los días </h6>
                        <p>10:30 a 23:30 hs</p>
                        <h6>Cocina abierta de miércoles a domingos</h6>
                        <p>12:30 a 15 hs y de 19:30 a 22:30 hs</p>
                        <h6>Bar y tienda de vinos </h6>
                        <p>10:30 a 23 hs</p>
                        <h6>Degustaciones especiales en horarios de mañana y de tarde. Consultar.</h6>
                        <h6><span>¡Maridaje de vinos  con empanadas, quesos y chocolates TODO EL DÍA...!</span></h6>
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