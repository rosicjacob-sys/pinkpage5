import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { BUNDLES } from './data'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [count, setCount] = useState(0)
  const [bundleId, setBundleId] = useState('triple') // "Most popular" pre-selected
  const add = useCallback((n = 1) => setCount((c) => c + n), [])
  const value = useMemo(() => {
    const bundle = BUNDLES.find((b) => b.id === bundleId) || BUNDLES[0]
    return { count, add, bundleId, setBundleId, bundle }
  }, [count, add, bundleId])
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  return useContext(CartContext)
}
