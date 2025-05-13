import './App.css'
import Saludo2 from './components/Saludo2'

function App() {

  /* const nombre = "Juanito1 Perez"

  return (
    <>
      < Saludo2 nombre={nombre} />
      < Saludo2 nombre="Maria Gonzales" />
    </>
  ) */

  const nombres = ["Juanito Pérez", "Maria Gonzales", "Pedro Pereira"]

  return (
    <>
      {
        nombres.map((nombre, index) => (
          <Saludo2 key={index} nombre={nombre} />
        ))
      }
    </>
  )
}

export default App
