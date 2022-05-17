import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  return (
    <div className='App'>
      <div className='row'>
        <div className='col-8'>
         <h2 align="center">Calculadora</h2>

         <label>Primer Número</label>
         <input 
           />

         <label>Segundo Número</label>
         <input 
           />
   
         <select >
           <option>sumar</option>
           <option>restar</option>
           <option>multiplicar</option>
           <option>Dividir</option>
           
         </select>
           <label>Resultado </label>

               </div>
             </div>
           </div>
        
  );
}

export default App;
