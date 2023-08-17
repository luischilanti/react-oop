import ImportedProduct from "@/classes/ImportedProduct"
import Product from "@/classes/Product"
import UsedProduct from "@/classes/UsedProduct"

export type ProductList = Product | ImportedProduct | UsedProduct

export interface ProductContextType {
  products: ProductList[]
  saveProduct: (prod: ProductList) => void
}

export interface Props {
  children: React.ReactNode
}
