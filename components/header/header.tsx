import Link from 'next/link'
import React from 'react'



function Header() {
  return (
   <div>
    <nav className='navbar justify-between bg-base-300' >
    <Link href="/" className='btn btn-link'  >
      Next Amazona V2
    </Link>
    </nav>
   </div>
  )
}

export default Header