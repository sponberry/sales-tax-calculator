import React from "react"

const Totals = ({ receiptItems }) => {

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
      <div className="col-md-6">
        <p>
        Sales Taxes:
        </p>
        <p>
        Total:
        </p>
      </div>
      <div className="col-md-6 text-right">
        
        <p>
        {totalTax.toFixed(2)}
        </p>
        <p>
        {total.toFixed(2)}
        </p>
      </div>
      <div className="col-md-12">
          <button className="btn btn-info">print</button>
      </div>
    </div>
  )
}

export default Totals