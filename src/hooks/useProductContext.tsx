"use client"

import { createContext, useContext, useState } from "react"
import { ProductContextType, ProductList, Props } from "./types"

export const ProductContext = createContext<ProductContextType | null>(null)

export const ProductProvider = ({ children }: Props) => {
  const [products, setProducts] = useState<ProductList[]>([])

  const saveProduct = (prod: ProductList) => {
    setProducts((value) => [...value, prod])
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        saveProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export const useProduct = () => {
  const context = useContext(ProductContext) as ProductContextType

  return context
}
