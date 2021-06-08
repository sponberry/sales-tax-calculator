const calculatePrice = (object) => {
  let itemPrice = object.price
  let taxes = 0
  if (object.imported) {
    taxes = object.price * 0.05
    taxes = (Math.ceil(taxes*20)/20)
    itemPrice = object.price + taxes
  }

  if (object.salesTax) {
    taxes += object.price * 0.1
    itemPrice += object.price * 0.1
  }
  object.finalPrice = Number(itemPrice.toFixed(2))
  object.taxes = Number(taxes)

  return object
}

const extractData = (input, object) => {
  const array = input.split(" ")
  object.quantity = Number(array[0])

  const trimIndex = input.indexOf(" at ")
  object.displayName = input.slice(0, trimIndex)

  const priceString = input.slice(trimIndex)
  object.price = Number(priceString.replace(/[^0-9.]/g, ""))

  return calculatePrice(object)
}

const createData = (input, category) => {
  const ifImported = input.search("import")
  const itemObj = {
      imported: ifImported >= 0
        ? true
        : false
    }
  
  itemObj.salesTax = category === ""
    ? true
    : false
    
  return extractData(input, itemObj)
}

module.exports = { 
  createData
}