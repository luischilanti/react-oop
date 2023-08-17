import { useState } from "react"

export const useCreateProduct = () => {
  const [type, setType] = useState<"common" | "imported" | "used">("common")
  const [name, setName] = useState("")
  const [price, setPrice] = useState(0)
  const [fee, setFee] = useState(0)
  const [discount, setDiscount] = useState(0)

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
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
