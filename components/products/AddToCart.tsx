'use client'
import React from 'react'
import useCartService from '@/lib/hooks/useCartStore'
import { OrderItem } from '@/lib/models/OrderModel'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
export default function AddToCart({ item }: { item: OrderItem }) {
  const router = useRouter()
  const { items, increase } = useCartService()
  const [existItem, setExistItem] = useState<OrderItem | undefined>()
  useEffect(() => {
    setExistItem(items.find((x) => x.slug === item.slug))
  }, [item, items])
  const addTocartHandler = () => {
    increase(item)
  }
  return existItem ? (
    <div>
      <button className="px-2" type='button' >-</button>
      <span className='px-2' >{existItem.qty}</span>
      <button className='btn' type='button' onClick={()=>increase(existItem)} >+</button>
    </div>
  ) : (
    <button
      onClick={addTocartHandler}
      type="button"
      className="btn btn-primary w-full"
    >
      Add to Cart
    </button>
  )
}
