import React from 'react'

const Mobilebar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="about-us">Acerca de Nosotros</Link>
        </li>
        <li>
          <Link href="/carros">Carros</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Mobilebar