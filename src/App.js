import React, { useState } from "react";
import Input from "./components/Input"
import Dropdown from "./components/Dropdown"
import Items from "./components/Items"
import Totals from "./components/Totals"
import { createData } from "./createItemObject"


function App() {
  const [ inputValue, setInputValue ] = useState("")
  const [ category, setCategory ] = useState("none")
  const [ receiptItems, setReceiptItems ] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    const itemObject = createData(inputValue, category)
    const newItems = [
      ...receiptItems,
      itemObject
    ]
    setReceiptItems(newItems)
    setInputValue("")
    setCategory("")
  }

  return (
  
    <div className="container p-5">
      <div className="card pt-3 pb-3 px-5">
        <div className="row">
          <p className="small mx-auto pb-0 mb-0">
            Enter your item in this format: "1 book at £12.49"
          </p>
        </div>
        <div className="row">
          <form 
            className="form-control pb-5 text-center"
            onSubmit={handleSubmit}
          >
            <Input
              inputValue={inputValue}
              setInputValue={(inputValue) => setInputValue(inputValue)}
            />
            <Dropdown
            category={category}
              setCategory={(category) => setCategory(category)}
            />
            <button 
              type="submit" 
              className="mr-3 btn btn-dark"
            >
              submit
            </button>
          </form>
        </div>
        
        <Items
          receiptItems={receiptItems}
        />
        <Totals 
          receiptItems={receiptItems}
        />
      </div>
    </div>
  );
}

export default App;
