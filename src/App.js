import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [numero1, setnumero1]=useState(0);
  const [numero2, setnumero2]=useState(0);
  const [Resultado, setresultado]=useState(0);
  const [operacion, setoperacion]=useState('sumar');

  const calcular = () => {
    if (operacion === "sumar")
     return parseFloat(numero1) + parseFloat(numero2);
    else
     if(operacion === "restar")
       return parseFloat(numero1) - parseFloat(numero2);
     else
       if(operacion === "multiplicar")
         return parseFloat(numero1) * parseFloat(numero2);
       else
         return parseFloat(numero1) / parseFloat(numero2);
 
  };

  useEffect(() => {
    setresultado(calcular());
   }, [numero1, numero2, operacion])


  return (
    <div className='App'>
      <div className='row'>
        <div className='col-8'>
         <h2 align="center">Calculadora</h2>

         <label>Primer Número</label>
         <input 
           type="number"
             value={numero1}
             onChange={(event) => setnumero1(event.target.value)}/>

         <label>Segundo Número</label>
         <input 
           type="number"
             value={numero2}
             onChange={(event) => setnumero2(event.target.value)}/>
   
         <select onChange={(event) => setoperacion(event.target.value)}>
           <option>sumar</option>
           <option>restar</option>
           <option>multiplicar</option>
           <option>Dividir</option>
           
         </select>
           <label>Resultado {Resultado}</label>
           

               </div>
             </div>
           </div>
        
  );
}

export default App;
