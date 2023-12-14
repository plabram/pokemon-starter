import React, { useState } from "react";

const Filter = ({ itemsToFilter, setFilteredItems, value, setValue }) => {
  const filterItems = (searchTerm) => {
    const filteredItems = itemsToFilter.filter(
      (item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()), // search is case-insensitive
    );
    setFilteredItems(filteredItems);
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    filterItems(inputValue);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="Filtra pokemons por nombre..."
      className="filter"
    />
  );
};

export default Filter;
