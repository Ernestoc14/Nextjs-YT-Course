import Link from "next/link"

const Navbar = () => {
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
        <li>
          <Link href="/posts">Posts</Link>
        </li>
      </ul>
    </nav>
  )
}

export default  Navbar