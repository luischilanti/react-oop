"use client"

import ImportedProduct from "@/classes/ImportedProduct"
import UsedProduct from "@/classes/UsedProduct"

import { useProduct } from "@/hooks/useProductContext"
import { useProductList } from "./hook"

import "./styles.scss"

const ProductList = () => {
  const { products } = useProduct()
  const { maskToPrice } = useProductList()

  return (
    <div className="product__container">
      <div className="product__list">
        {products.map((product, index) => {
          const isImported = product instanceof ImportedProduct
          const isUsed = product instanceof UsedProduct

          return (
            <div className="product__content" key={index}>
              {isImported && (
                <div className="product__item">
                  <div className="product__col">
                    <div>Name: {product.name}</div>
                    <div>Type: {product.type}</div>
                  </div>

                  <div className="product__col">
                    <div>Price: {maskToPrice(product.price)}</div>
                    <div>Fee: {maskToPrice(product.fee)}</div>

                    <label className="product__price">
                      Final price: {product.calcPrice()}
                    </label>
                  </div>
                </div>
              )}

              {isUsed && (
                <div className="product__item">
                  <div className="product__col">
                    <div>Name: {product.name}</div>
                    <div>Type: {product.type}</div>
                  </div>

                  <div className="product__col">
                    <div>Price: {maskToPrice(product.price)}</div>
                    <div>Discount: {maskToPrice(product.discount)}</div>

                    <label className="product__price">
                      Final price: {product.calcPrice()}
                    </label>
                  </div>
                </div>
              )}

              {!isUsed && !isImported && (
                <div className="product__item">
                  <div className="product__col">
                    <div>Name: {product.name}</div>
                    <div>Type: {product.type}</div>
                  </div>

                  <div className="product__col">
                    <div>Price: {maskToPrice(product.price)}</div>

                    <label className="product__price">
                      Final price: {product.calcPrice()}
                    </label>
                  </div>
                </div>
              )}
            </div>
          )
        })}

        {products.length <= 0 && (
          <div className="product__insert">
            Insert some data to show your list.
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductList
