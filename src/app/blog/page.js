import Link from "next/link"

function page(){
  return ( 
    <div className='main'>
    <h1 className='tienda2'>Blog</h1>
    <p><Link href="/blog/primer-blog" className="electronica">Primero</Link> </p> 
    <p><Link href="/blog/segundo-blog" className="decoracion">Segundo</Link></p>
    <p><Link href="/tienda/tercer-blog" className="mobiliario">Tercero</Link></p>
    <p><Link href="/tienda/cuarto-blog" className="libros">Cuarto</Link></p>
    </div>
  )
}

export default page