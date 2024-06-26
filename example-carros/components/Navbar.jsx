import Link from "next/link"


const Navbar = () => {
  return (
    <nav className="flex justify-between">
      <Link href="/">
        <h2 className="text-3xl">Renta tu Carro</h2>
      </Link>
      <ul className="flex gap-6 ">
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

export default Navbar