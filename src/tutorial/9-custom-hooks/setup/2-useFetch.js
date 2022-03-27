import { useState, useEffect, useCallback } from "react"

// custom hooks have to begin with use...
export const useFetch = url => {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])

  const getProducts = useCallback(async () => {
    const response = await fetch(url)
    const products = await response.json()
    setProducts(products)
    setLoading(false)
  })

  useEffect(() => {
    getProducts()
  }, [url, getProducts])

  return { loading, products }
}
