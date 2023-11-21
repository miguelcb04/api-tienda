import Link from 'next/link'


function page() {
  return (
    <div className='main' >
    <h1 className='tienda2'>Tienda/Electronica</h1>
    <p><Link href="/tienda/electronica" className="electronica">Electronica</Link> </p> 
    <p><Link href="/tienda/decoracion" className="decoracion">Decoración</Link></p>
    <p><Link href="/tienda/mobiliario" className="mobiliario">Mobilirio</Link></p>
    <p><Link href="/tienda/libros" className="libros">Libros</Link></p>
    </div>
    
  )
}
export default page