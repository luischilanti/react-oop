"use client"

import "./styles.scss"
import { useCreateProduct } from "./hook"

const CreateProduct = () => {
  const {
    discount,
    fee,
    name,
    price,
    type,
    handleSubmit,
    changeSelectItem,
    changeInput,
  } = useCreateProduct()

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="type">Product type</label>
      <select onChange={changeSelectItem} value={type} name="type">
        <option value="common">Common</option>
        <option value="imported">Imported</option>
        <option value="used">Used</option>
      </select>

      <label htmlFor="name">Product name</label>
      <input value={name} onChange={changeInput} name="name" />

      <label htmlFor="price">Product price</label>
      <input value={price} onChange={changeInput} name="price" />

      <label htmlFor="fee">Product fee</label>
      <input value={fee} onChange={changeInput} name="fee" />

      <label htmlFor="discount">Product discount</label>
      <input value={discount} onChange={changeInput} name="discount" />

      <button type="submit">Cadastrar</button>
    </form>
  )
}

export default CreateProduct
