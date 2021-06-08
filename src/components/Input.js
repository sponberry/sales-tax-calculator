import React from "react"

const Input = ({ inputValue, setInputValue }) => {

  const handleTyping = (value) => {
    setInputValue(value)
  }
  return (
    <span className="mr-3">
      <input type="text" value={inputValue} onChange={(e) => handleTyping(e.target.value)} />
    </span>
  )
}

export default Input