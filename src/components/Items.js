import React from "react"

const Item = ({ item }) => {
  const showPrice = Number(item.quantity * item.finalPrice)
  return (
    <li>
      <div className="row">
        <div className="col-md-6 text-left">
          {item.displayName}
        </div>
        <div className="col-md-6 text-right">
          {showPrice.toFixed(2)}
        </div>
      </div>
    </li>
  )
}

const Items = ({ receiptItems }) => {
  return (
    <div className="items mt-3">
      <div className="row">
        <div className="col-md-12">
          <h2>receipt</h2>
        </div>
      </div>
        <ul className="pl-0">
          {receiptItems.map(item => {
            return (
              <Item
                key={item.displayName}
                item={item}
              />
            )
          })}
        </ul>
    </div>

  )
}

export default Items