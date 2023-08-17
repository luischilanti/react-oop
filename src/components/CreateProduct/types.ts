import { ProductList } from "@/hooks/types"

export interface useCreateProps {
  saveProduct: (prod: ProductList) => void
}
