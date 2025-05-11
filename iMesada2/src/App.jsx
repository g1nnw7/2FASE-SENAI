import { useState } from 'react'

import './App.css'


function App() {
  const[valorInput, setValorInput] = useState('')
  const[valorTotal, setValorTotal] = useState(0)
  const[extrato, setExtrato] = useState([]);
  const[valorDesc, setValorDesc] = useState('')
  

  function credito(){
    const valor = Number(valorInput);
    const desc = valorDesc
    if (!isNaN(valor) && valor > 0) {
      setValorTotal(valorTotal + valor);
      setExtrato([...extrato, { tipo: 'Crédito', valor, desc }]);
      setValorInput('');
      setValorDesc('')
    }
  }

  function debito(){
    const valor = Number(valorInput);
    const desc = valorDesc;
    if (!isNaN(valor) && valor > 0) {
      setValorTotal(valorTotal - valor);
      setExtrato([...extrato, { tipo: 'Débito', valor, desc }]);
      setValorInput('');
      setValorDesc('')
    }
  }

  return (
    <>
      <div className='container-app'>
 
      </div>


      <div className='body'>

      <div className='div-central'>

       <div className='div-cima'>
        <h1>iMesada</h1>
        <h4>Controle Financeiro</h4>
       </div>

        <div className='div-input'>
        
        Descrição<br></br>
        <input type="text" className='input-descricao' 
        value={valorDesc}
        onChange={(e) => setValorDesc(e.target.value)}
        />


        Saldo R$:{valorTotal.toFixed(2)}
        <input type="Number" className='input-imesada' 
        value={valorInput} 
        onChange={(e) => setValorInput(e.target.value)}
      
        />
        </div>

        <div className='botoes'>
          <button onClick={credito} className='botao-credito'>Crédito</button>
          <button onClick={debito} className='botao-debito'>Débito</button>
        </div>

      <div className='extrato'>
        
        <h3>💰Relatório de Transações💰</h3>
        <div className='extratoText'>
        {extrato.map((item, index) => (
              <p key={index} 
              className={`extratoItem ${item.tipo === 'Crédito' ? 'credito' : 'debito'}`}
              >
                {item.desc}: R$ {item.valor.toFixed(2)}
              </p>
            ))}
          </div>
        </div>


      </div>

      </div>
    </>
  )
}

export default App
