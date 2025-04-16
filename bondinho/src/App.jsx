import { useState } from 'react'
import './App.css'

function App() {
  const[aluno, setAluno] = useState()
  const[professor, setProfessor] = useState()
  const[resultado, setResultado] = useState()

  function verificar(){
    let total = Number(aluno) + Number(professor)
    
    if(total <= 50){
      setResultado(total)
    }
    else{
      setResultado(total)
    }
  }

  function denovo(){
    setResultado("")
    setProfessor("")
    setAluno("")
  }

  return (
    <>
    <div className='container'>

     <div className='parte-cima'>
      <h1>Contagem do Bondinho</h1>
      <p>Quantas pessoas vão no bondinho? diremos se pode ou não</p>
     </div>

     <div className='parte-meio'>
      <input type="Number" value={aluno} onChange={(e) => setAluno(e.target.value)}/>
      <input type="Number" value={professor} onChange={(e) => setProfessor(e.target.value)}/>
      <button onClick={verificar}>Verificar</button>
      <button onClick={denovo}>♻️</button>
     </div>

     <div className='parte-baixo'>
      {resultado}
     </div>

     </div>
    </>
  )
}

export default App