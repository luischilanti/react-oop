"use client"

import { useCreateProduct } from "./hook"
import { useProduct } from "@/hooks/useProductContext"

import "./styles.scss"

const CreateProduct = () => {
  const { saveProduct } = useProduct()

  const {
    discount,
    fee,
    name,
    price,
    type,
    handleSubmit,
    changeSelectItem,
    changeInput,
  } = useCreateProduct({ saveProduct })

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="type">Product type</label>
      <select onChange={changeSelectItem} value={type} name="type" required>
        <option value="common">Common</option>
        <option value="imported">Imported</option>
        <option value="used">Used</option>
      </select>

      <label htmlFor="name">Product name</label>
      <input value={name} onChange={changeInput} name="name" required />

      <label htmlFor="price">Product price</label>
      <input value={price} onChange={changeInput} name="price" required />

      {type === "imported" && (
        <>
          <label htmlFor="fee">Product fee</label>
          <input value={fee} onChange={changeInput} name="fee" />
        </>
      )}

      {type === "used" && (
        <>
          <label htmlFor="discount">Product discount</label>
          <input value={discount} onChange={changeInput} name="discount" />
        </>
      )}

      <button type="submit">Cadastrar</button>
    </form>
  )
}

export default CreateProduct
