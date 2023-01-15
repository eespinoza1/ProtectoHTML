
import './App.css';
import Boton from "./componentes/Boton"
import Contador from "./componentes/Contador"
import freeCodeCampLogo from "./imagenes/freeCodeCamp-logo.png";
import {useState} from "react"


function App() {

const [numClics, setNumClics] = useState(0);
// el primero importar, luego el estado del valor y luego el nombre del el estado


const manejarClic = () => {
  setNumClics(numClics + 1 );
};

const reiniciarContador = () => {
 setNumClics(0);
};

  return (
    <div className="App">
      
      <div className='freecodecamp-logo-contenedor'>

      <img
      className ='freeCodeCamp-logo'
      src = {freeCodeCampLogo}
      alt="logo de freeCodeCamp" />

    </div>
      <div className='contenedor-principal'>
        <Contador numClics ={ numClics } />

        <Boton
        texto="Click"
        esBotonDeClic={true}
        manejarClic={manejarClic} />
       
        <Boton
        texto ="Reiniciar"
        esBotonDeClic={false}
        manejarClic={reiniciarContador} />
      </div>
  </div>
  ); 
}

export default App;
