
import './App.css';
import freeCodeCamp from "./imagenes/FreeCodeCamp_logo.png"
import Boton from "./componentes/Boton"
import Pantalla from "./componentes/Pantalla"
import BotonClear from './componentes/BotonClear';
import { useState } from "react";
import {evaluate} from "mathjs"; 

function App() {

  const [input, setInput] = useState("");

  const agragrInput = val => {
  setInput(input + val);
  };

  const calcularResultado = () =>{
    if(input){
    setInput(evaluate(input));
    }
  };

  return (
    <div className="App">
    <div className = "freeCodeCamp-logo-contenedor"></div>
    
    <img
    src={freeCodeCamp}
    className="freecodecamp-logo"
    alt= "freecodecamp logo"/>
    <div/>

    <div className= "contenedor-calculadora">
      <Pantalla input = {input} />



      <div className='fila'>
        <Boton manejarClic={agragrInput}>1</Boton>
        <Boton manejarClic={agragrInput}>2</Boton>
        <Boton manejarClic={agragrInput}>3</Boton>
        <Boton manejarClic={agragrInput}>+</Boton>
      </div>
      <div className='fila'>
        <Boton manejarClic={agragrInput}>4</Boton>
        <Boton manejarClic={agragrInput}>5</Boton>
        <Boton manejarClic={agragrInput}>6</Boton>
        <Boton manejarClic={agragrInput}>-</Boton>
      </div>
      <div className='fila'>
        <Boton manejarClic={agragrInput}>7</Boton>
        <Boton manejarClic={agragrInput}>8</Boton>
        <Boton manejarClic={agragrInput}>9</Boton>
        <Boton manejarClic={agragrInput}>*</Boton>
      </div>
      <div className='fila'>
        <Boton manejarClic={calcularResultado}>=</Boton>
        <Boton manejarClic={agragrInput}>0</Boton>
        <Boton manejarClic={agragrInput}>.</Boton>
        <Boton manejarClic={agragrInput}>/</Boton>
      
      </div>
      <div className='fila'>
        <BotonClear manejarClear = {() => setInput("")}>
          Clear
          </BotonClear>
      </div>

    </div>
    </div>
    
  );
}

export default App;
