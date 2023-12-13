import React, { useState } from 'react'

const Filter = ({ itemsToFilter, setFilteredItems, value, setValue }) => {
  const filterItems = (searchTerm) => {
    const filteredItems = itemsToFilter.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    filteredItems.length > 0 ? setFilteredItems(filteredItems) : setFilteredItems([])
  }

  const handleChange = (e) => {
    const inputValue = e.target.value;
    console.log(inputValue)
    setValue(inputValue)
    filterItems(inputValue)
  }

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder='Filtra pokemons por nombre...'
    />
  )
}

export default Filter