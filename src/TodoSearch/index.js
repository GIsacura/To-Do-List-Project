import React from 'react';
import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue, loading}) {
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      value={searchValue}
      onChange={onSearchValueChange}
      disabled = {loading} //En esta propiedad disable la condicionamos a que sea true cuando loading sea true y viceversa, que sea false cuando loading sea false
    />
  );
}

export { TodoSearch };
