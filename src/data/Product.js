import { createResource } from 'solid-js'

const fetchProduct = async (name) => {
  let resp = await fetch(`/l0-api/products/${name}`)
  let data = await resp.json()
  return data
}

const fetchAllProducts = async (name) => {
  let resp = await fetch(`/l0-api/products/all`)
  let data = await resp.json()
  return data
}

export default function ProductData({ params, location, navigate, data }) {
  const [product] = createResource(() => params.name, fetchProduct)
  const [relatedProducts] = createResource(() => params.name, fetchAllProducts)
  return { product, relatedProducts }
}
