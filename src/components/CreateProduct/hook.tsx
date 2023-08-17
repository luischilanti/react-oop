import { useState } from "react"

import Product from "@/classes/Product"
import UsedProduct from "@/classes/UsedProduct"
import ImportedProduct from "@/classes/ImportedProduct"

import { useCreateProps } from "./types"

export const useCreateProduct = ({ saveProduct }: useCreateProps) => {
  const [type, setType] = useState<"common" | "imported" | "used">("common")
  const [name, setName] = useState("")
  const [price, setPrice] = useState(0)
  const [fee, setFee] = useState(0)
  const [discount, setDiscount] = useState(0)

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()

    if (type.toString() === "common")
      saveProduct(new Product(type, name, price))

    if (type.toString() === "used")
      saveProduct(new UsedProduct(type, name, price, discount))

    if (type.toString() === "imported")
      saveProduct(new ImportedProduct(type, name, price, fee))
  }

  const changeSelectItem = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault()

    const target = event.target as any
    if (!target.value) {
      alert("Select a product type")
      return
    }

    setType(target.value)
  }

  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputType = event.target.name

    if (inputType === "name") setName(event.currentTarget.value)
    if (inputType === "fee") setFee(parseFloat(event.currentTarget.value) || 0)
    if (inputType === "price")
      setPrice(parseFloat(event.currentTarget.value) || 0)
    if (inputType === "discount")
      setDiscount(parseFloat(event.currentTarget.value) || 0)
  }

  return {
    type,
    name,
    price,
    fee,
    discount,
    handleSubmit,
    changeSelectItem,
    changeInput,
  }
}
