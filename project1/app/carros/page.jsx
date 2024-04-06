import Link from 'next/link'

export const metadata = {
  title: "Carritos"
}

function Carros() {
  return (<>
    <h1>Pagina de Carros</h1>
    <h3>Categorias</h3>
    <ul>
      <li><Link href="/carros/electricos">Electricos</Link></li>
      <li><Link href="/carros/gas">Gasolina</Link></li>
    </ul>
  </>
  )
}

export default Carros