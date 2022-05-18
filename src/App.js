import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [numero1, setnumero1]=useState(0);
  const [numero2, setnumero2]=useState(0);
  const [Resultado, setresultado]=useState(0);
  const [operacion, setoperacion]=useState('sumar');

  const inicialState = JSON.parse(localStorage.getItem ("calculadora")) || [];
  
  const [calculadora, setCalculadora] = useState(inicialState);     

  const Guardar = () => {
    const listaopen = {num1:numero1,num2:numero2, open:operacion, resul:Resultado}
    const nuevoArreglo = [...calculadora, listaopen]
    setCalculadora([...nuevoArreglo]);
    localStorage.setItem("calculadora", JSON.stringify(calculadora));
    
  };

  const Borraroperacion = (index) => {
    const nuevoArreglo = [];

    calculadora.forEach((calculadora,i) => {
      if (index !== i) {    
        nuevoArreglo.push(calculadora);   
      } 
    }); 

    localStorage.setItem("calculadora", JSON.stringify(nuevoArreglo)); 
    setCalculadora([...nuevoArreglo]); 
  };

  const LimpiarLista = () => {
    setCalculadora([])
    localStorage.setItem("calculadora", JSON.stringify([]));

  }
  
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
           <div className="col">
          <span className="row ms-1">
          
          <button 
            type="button"
            className="btn btn-primary"
            onClick={Guardar}
            >
            Guardar
          </button>
          </span>
           </div>
         </div>
         <br></br>
           <div className="col">
             <div className="row ms-2">
               <h2 align="center">Historial</h2>
          {calculadora.length === 0 ? (
            "Al momento no tienes operaciones guardadas."
            ) : (
              <ol>
                {calculadora.map((item, index) => {
                  return(
                    <li key ={index}>
                      {item.num1} {item.open}{item.num2} ={item.resul}&nbsp;

                      <i className="bi-x-circle-fill" 
                      onClick={() => Borraroperacion (index)}
                      style={{
                      color:"#grey", 
                      fontSize:"0.75rem", 
                      cursor:"pointer",}}></i>
                    </li>
                  )
                })}
              </ol>
            )}
                 <button  
                    type="button"
                    className="btn btn-primary"
                    onClick={LimpiarLista}
                    >
                    borrar
                 </button>
               </div>
               </div>
             </div>
           </div>
        
  );
}

export default App;
