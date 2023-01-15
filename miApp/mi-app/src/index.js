import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';



const Appx = (props) => {
  return <h1>{props.contadorInicial}</h1>
}

let contador = 0;
const refresh () => {
  ReactDOM.render(
    <Appx contadorInicial={contador}/>
    rootElelment
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   <App/>
  
  </>
);

setInterval(() => {
contador++
refresh()
},1000)

