import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Navbar from './components/navbar/Navbar';
import Inicio from './components/inicio/Inicio';
import EspacioChimi from './components/Espacio chimi/EspacioChimi';
import Vinos from './components/vinos/Vinos';
import Comidas from './components/comidas/Comidas';
import Contacto from './components/contacto/Contacto';

function App() {

  return (
    <>

      <Navbar />
      <section id='inicio'>
        <Inicio />
      </section>

      <section id='Espacio-Chimi'>
        <EspacioChimi />
      </section>

      <section id='Vinos'>
        <Vinos />
      </section>


      <section id='Comidas'>
        <Comidas />
      </section>

      <section id='Contacto'>
        <Contacto />
      </section>




    </>
  )
}

export default App
