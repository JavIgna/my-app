const Saludo = (props) => {

  const { nombre } = props

  return (
    <h1>
      Hola, {nombre}
    </h1>
  )
}

export default Saludo;
