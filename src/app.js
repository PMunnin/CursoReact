import React from 'react';
import ReactDOM from "react-dom";
import Saludo from './components/saludo';
import Counter from './components/counter'; //Importamos counter de la carpeta components archivo counter



ReactDOM.render(< Counter />, //ejecutamos el componente Counter importado arriba
  document.getElementById('app'));
