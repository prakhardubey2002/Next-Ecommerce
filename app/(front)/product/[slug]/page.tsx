import AddToCart from '@/components/products/AddToCart';
import ProductItem from '@/components/products/ProductItem';
import data from '@/lib/data';
import productService from '@/lib/services/productService';
import { covertDoctoObj } from '@/lib/utils';
import { HOME } from '@/routes/routes';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


export async function generateMetadata({
  params,
}:{
  params:Promise<{ slug: string }>
}){
  const { slug } = await params;
  const product = await productService.getBySlug(slug);
  if(!product){
    return {title:'Product not found'}
  }
  return {
    title:product.name,
    description:product.description,
  }
}

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await productService.getBySlug(slug);

  // const product = data.products.find((x) => x.slug === slug);
  // const suggestionProducts = data.products.filter((x) => x.slug !== slug);

  if (!product) {
    return <div>Product not Found</div>;
  }
 const suggestedProduct = await productService.getSuggestedProducts(slug);
  return (
    <>
      <div className="my-2">
        <Link href={HOME}>back to products</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            priority
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </div>
        <div>
          <ul className="space-y-4">
            <li>
              <h1 className="text-xl">{product.name}</h1>
            </li>
            <li>
              {product.rating} of {product.numReviews}
            </li>
            <li>
              Description: <p>{product.description}</p>
            </li>
          </ul>
        </div>
        <div>
          <div className="card bg-base-300 shadow-xl mt-3 md:mt-0">
            <div className="card-body">
              <div className="mb-2 flex justify-between">
                <div>Price</div>
                <div>${product.price}</div>
              </div>
              <div className="mb-2 flex justify-between">
                <div>Status</div>
                <div>
                  {product.countInStock > 0 ? 'In stock' : 'Unavailable'}
                </div>
              </div>
              {product.countInStock > 0 && (
                <div className="card-actions justify-center">
                  <AddToCart
                    item={{ ...covertDoctoObj(product), qty: 0, color: '', size: '' }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="my-2">
        <h2 className="text-3xl font-normal tracking-wide p-2">
          Similar Products
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {suggestedProduct.map((product) => (
            <ProductItem key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}

