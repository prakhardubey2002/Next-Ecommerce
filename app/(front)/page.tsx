import ProductItem from '@/components/products/ProductItem'
import data from '@/lib/data'
import productService from '@/lib/services/productService'
import { covertDoctoObj } from '@/lib/utils'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME || 'Next Amazon',
  description:
    process.env.NEXT_PUBLIC_APP_DESC ||
    ' Nextjs,Server components,Next auth,daisyui,zustand ',
}

const Home = async () => {
  const featuredProducts = await productService.getFeatured()
  const latestProducts = await productService.getLatest()
  return (
    <>
      <div className="w-full carousel rounded-box mt-4">
        {featuredProducts.map((product, index) => (
          <div
            key={index}
            id={`slide-${index}`}
            className="carousel-item relative w-full"
          >
            <Link href={`/product/${product.slug}`}>
              <img src={product.banner} className="w-full" alt={product.name} />
            </Link>
            <div className="absolute flex justify-between transform-translate-y-1/2 left-5 right-5 top-1/2">
              <a
              className='btn btn-circle'
                href={`#slide-${
                  index === 0 ? featuredProducts.length - 1 : index - 1
                }`}
              >
                {'<'}
              </a>
              <a
              className='btn btn-circle'
                href={`#slide-${
                  index === featuredProducts.length - 1 ? 0 : index + 1
                }`}
              >
                {'>'}
              </a>
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-2xl py-2">Latest Products</h2>
      <div className="grid grid-cols-1 gap-4 mg:grid-cols-3 lg:grid-cols-4">
        {latestProducts.map((product) => (
          <ProductItem key={product.slug} product={ covertDoctoObj(product)} />
        ))}
      </div>
    </>
  )
}

export default Home
