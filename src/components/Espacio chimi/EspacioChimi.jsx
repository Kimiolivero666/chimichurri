import { Container } from 'react-bootstrap'
import './espacioChimi.css'
import isotipo1 from '../../assets/icon-copa.png'
import { motion } from 'framer-motion';


const EspacioChimi = () => {

  
  return (
    <div className='EspacioChimi'>
      <Container>
        <div className="contenedor-EspacioChimi text-center">
          <motion.h1 initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.5}} transition={{ delay: 0.2, duration: 0.5}} variants={{ hidden: { opacity: 0, y:50}, visible:{opacity: 1, y:0}}}>Acerca de <span>Chimichurri</span></motion.h1>
          <div className="parrafo-EspacioChimi">
          <p>Chimichurri es un espacio muy pequeño, único, tranquilo e informal ubicado en Algirós, en la famosa Avenida Blasco Ibañes de Valencia. </p>
          <p>Un lugar donde se puede disfrutar de lindos momentos, con muy buenos vinos de diferentes países y comida casera, sabrosa tradicional típica Argentina con salsa chimichurri. </p>
          <p>Mucho más que un sitio de comidas. Ofrecemos un Menú Degustación de diferentes pasos armonizados con vinos del viejo y del nuevo mundo… </p>
          </div>

        </div>
      </Container>
      <img src={isotipo1} alt="" />
    </div>
  )
}

export default EspacioChimi