import { cache } from 'react'
import dbConnect from '../dbConnect'
import ProductModel, { Product } from '../models/ProductModel'

export const revalidate = 3600

//function to convert Mongoose document to plain object
const convertToPlainObject = (doc: any): Product => ({
  ...doc,
  _id: doc._id.toString(),
  createdAt: doc.createdAt?.toISOString(),
  updatedAt: doc.updatedAt?.toISOString(),
  __v: undefined
})

const getLatest = cache(async (): Promise<Product[]> => {
  await dbConnect()
  const products = await ProductModel.find({}).sort({ _id: -1 }).limit(6).lean()
  return products.map(convertToPlainObject)
})

const getFeatured = cache(async (): Promise<Product[]> => {
  await dbConnect()
  const products = await ProductModel.find({ isFeatured: true }).limit(3).lean()
  return products.map(convertToPlainObject)
})

const getBySlug = cache(async (slug: string): Promise<Product | null> => {
  await dbConnect()
  const product = await ProductModel.findOne({ slug }).lean()
  return product ? convertToPlainObject(product) : null
})

const getSuggestedProducts = cache(async (slug: string): Promise<Product[]> => {
  await dbConnect()
  const products = await ProductModel.find({ slug: { $ne: slug } })
    .limit(4)
    .lean()
  return products.map(convertToPlainObject)
})

const productService = {
  getLatest,
  getFeatured,
  getBySlug,
  getSuggestedProducts
}

export default productService

