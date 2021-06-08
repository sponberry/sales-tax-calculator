import React from "react"

const Dropdown = ({ category, setCategory }) => {
  const handleClick = value => {
    setCategory(value)
  }

  return (
    <span className="mr-3">
      <select
        value={category}
        onChange={(e) => handleClick(e.target.value)}
      >
        <option value="none"></option>
        <option value="food">food</option>
        <option value="books">books</option>
        <option value="medical">medical products</option>
      </select>
    </span>
  )
}

export default Dropdown