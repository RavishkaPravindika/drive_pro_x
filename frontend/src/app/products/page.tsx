'use client'

import { useEffect, useState } from 'react'
import { getProducts } from '@/lib/api'
import { useRouter } from 'next/navigation'

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([])
  const [error, setError] = useState('')
  const router = useRouter()

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const token = localStorage.getItem('token')
    console.log('Token from storage:', token) // consolelog for debugging
    if (!token) {
      router.push('/login')
      return
    }

    // getProducts(token)
    //   .then(data => setProducts(data))
    //   .catch(err => {
    //     setError('Unauthorized or failed to fetch products')
    //     router.push('/login')
    //   })
    getProducts(token)
    .then(data => {
      setProducts(data)
      console.log('Products:', data) // ✅ Log fetched products
    })
    .catch(err => {
      console.error('Fetch error:', err) // ✅ Log error
      setError('Unauthorized or failed to fetch products')
      router.push('/login')
    })
  }, [])

  return (
    <main style={{ padding: 20 }}>
      <h1>Fast Moving Products</h1>
      {products.length === 0 && <p>Loading...</p>}
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <strong>{product.name}</strong> - Rs. {product.price}
          </li>
        ))}
      </ul>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </main>
  )
}
