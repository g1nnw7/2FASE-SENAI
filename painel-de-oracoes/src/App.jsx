import { useState } from 'react'
import Oracao01 from './components/Oracao1'
import Oracao2 from './components/Oracao2'
import Oracao3 from './components/Oracao3'
import Oracao4 from './components/Oracao4'
import Oracao5 from './components/Oracao5'
import './App.css'


function App() {
  const[oracao,setOracao] = useState("")
  

  function apareceroracao1(){
    setOracao (<Oracao01 />)
  }
  
  function apareceroracao2(){
    setOracao (<Oracao2 />)
  }
  
  function apareceroracao3(){
    setOracao (<Oracao3 />)
  }
  
  function apareceroracao4(){
    setOracao (<Oracao4 />)
  }
  
  function apareceroracao5(){
    setOracao (<Oracao5 />)
  }

  function limpar(){
    setOracao ("amém")
  }

  return (
    <>
    <div className='container-geral'>

     <div className='parte-cima'> 
      Painel de Oraçoes🙏
      </div>

      <div className='parte-meio'>
       <p>{oracao}</p>
      </div>

      <div className='parte-baixo'>
    <button onClick={apareceroracao1}>1</button>
    <button onClick={apareceroracao2}>2</button>
    <button onClick={apareceroracao3}>3</button>
    <button onClick={apareceroracao4}>4</button>
    <button onClick={apareceroracao5}>5</button>
    <button onClick={limpar}>Limpar</button>
      </div>

      </div>
    </>
  )
}

export default App