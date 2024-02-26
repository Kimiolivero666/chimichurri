import { Container } from 'react-bootstrap'
import './espacioChimi.css'
import isotipo1 from '../../assets/icon-copa.png'

const EspacioChimi = () => {
  return (
    <div className='EspacioChimi'>
      <Container>
        <div className="contenedor-EspacioChimi text-center">
          <h1>Acerca de <span>Chimichurri</span></h1>
          <div className="parrafo-EspacioChimi">
            <p>Chimichurri es un espacio muy pequeño, único, tranquilo e informal ubicado en Algirós, en la famosa Avenida Blasco Ibañes de Valencia. </p>
            <p>Un lugar donde se puede disfrutar de lindos momentos, con muy buenos vinos de diferentes países y comida sabrosa tradicional típica Argentina con salsa chimichurri. </p>
            <p>Mucho más que un lugar para probar un menú, degustación de diferentes pasos con los mejores cortes argentinos de carnes y armonizar con los distintos vinos del viejo y nuevo mundo… </p>
          </div>

        </div>
      </Container>
      <img src={isotipo1} alt="" />
    </div>
  )
}

export default EspacioChimi