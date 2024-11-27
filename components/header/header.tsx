import Link from 'next/link'
import React from 'react'
import {HOME,CART,SIGNIN} from "../../routes/routes"
function Header() {
  return (
    <div>
      <nav className="navbar justify-between bg-base-300">
        <Link href={HOME} className="btn btn-ghost text-lg">
          Next Amazona V2
        </Link>
        <ul className="flex">
          <li>
            <Link href={CART} className="btn btn-ghost rounded-btn ">
              Cart
            </Link>
          </li>
          <li>
            <Link href={SIGNIN} className="btn btn-ghost rounded-btn ">
              Sign in
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
