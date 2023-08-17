export const useProductList = () => {
  const maskToPrice = (number: number) => {
    return number.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    })
  }

  return { maskToPrice }
}
