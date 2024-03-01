
import { Container } from 'react-bootstrap';
import './inicio.css';

import { motion } from 'framer-motion';

const Inicio = () => {
    

    return (
        <div className='Inicio Inicio-responsive'>
            <Container>
                <div className="titulo">
                    <motion.h2 initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.5}} transition={{ delay: 0.2, duration: 0.5}} variants={{ hidden: { opacity: 0, x:-50}, visible:{opacity: 1, x:0}}}>Descubrí un lugar donde</motion.h2>
                    <motion.h2 initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.5}} transition={{ delay: 0.6,duration: 0.5}} variants={{ hidden: { opacity: 0, x:-50}, visible:{opacity: 1, x:0}}}>confluyen el <span>vino</span></motion.h2>
                    <motion.h3 initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.5}} transition={{ delay: 0.8,duration: 0.5}} variants={{ hidden: { opacity: 0, x:-50}, visible:{opacity: 1, x:0}}}>y la gastronomía</motion.h3>
                </div>
            </Container>
        </div>
    );
};

export default Inicio;
