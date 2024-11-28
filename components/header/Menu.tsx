'use client'
import React, { useState, useEffect } from 'react'
import useCartService from '@/lib/hooks/useCartStore'
import Link from 'next/link'
import { CART, SIGNIN } from '@/routes/routes'

export default function Menu() {
  const { items } = useCartService()
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  return (
    <div>
      <ul className="flex items-stretch">
        <li>
          <Link className="btn btn-ghost rounded-btn" href={CART}>
            Cart
            {mounted && items.length != 0 && (
              <div className="badge badge-secondary">
                {items.reduce((a, c) => a + c.qty, 0)}
                {''}
              </div>
            )}
          </Link>
        </li>
        <li>
          <Link href={SIGNIN} className="btn btn-ghost rounded-btn">Sign in</Link>
        </li>
      </ul>
    </div>
  )
}
