import React, { useState } from 'react'

const Filter = ({ itemsToFilter, setItemsToFilter }) => {
  const [value, setValue] = useState("")

  const filterItems = (searchTerm) => {
    const filteredItems = itemsToFilter.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setItemsToFilter(filteredItems);
  }

  const handleChange = (e) => {
    const inputValue = e.target.value;

    setValue(inputValue)
    filterItems(inputValue)
  }

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder='Type to search'
    />
  )
}

export default Filter