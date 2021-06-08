import React from "react"

const PrintItem = (item) => {
  return (
    <div>
      {item.displayName} {item.finalTotal}
    </div>

  )
}

const Print = ({ receiptItems }) => {
  const counter = (total, item) => {
    return total + item.finalPrice
  }
  const taxCounter = (total, item) => {
    return total + item.taxes
  }

  const total = Number(receiptItems.reduce(counter, 0))
  const totalTax = Number(receiptItems.reduce(taxCounter, 0))

  return (
    <div className="row">
      {receiptItems.map(item => {
        return(
          <PrintItem item={item} key={item.displayName} />
        )
      })}
    <div>
    Sales Taxes: {total}
    </div>
    <div>
    Total: {totalTax}
    </div>
    </div>
  )
}

export default Print