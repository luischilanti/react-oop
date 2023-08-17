import CreateProduct from "@/components/CreateProduct"
import ProductList from "@/components/ProductList"

import "./styles.scss"

const Main = () => {
  return (
    <div className="container">
      <CreateProduct />
      <ProductList />
    </div>
  )
}

export default Main
