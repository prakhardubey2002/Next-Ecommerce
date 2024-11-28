import Link from 'next/link'
import React from 'react'
import { HOME } from '@/routes/routes'
import Menu from './Menu'
function Header() {
  return (
    <div>
      <nav className="navbar justify-between bg-base-300">
        <Link href={HOME} className="btn btn-ghost text-lg">
          Next Amazona V2
        </Link>
        <Menu />
      </nav>
    </div>
  )
}

export default Header
