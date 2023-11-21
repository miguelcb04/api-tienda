import React from 'react'
import Link from 'next/link'

 function NavBar() {
  return (
    <nav className="navbar">
      <Link href="/">Inicio</Link>
      <Link href="/tienda" className='tienda'>Tienda</Link>
      <Link href="/blog" className='blog'>Blog</Link>
      <Link href="/acerca" className='acerca-de'>Acerca de ...</Link>
      <Link href="/registro">Registrarse</Link>
      </nav>
  )
}

export default NavBar
