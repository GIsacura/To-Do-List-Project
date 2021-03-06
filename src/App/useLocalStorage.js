import React from 'react';

function useLocalStorage(itemName, initialValue) {
  const [sincronizedItem, setSincronizedItem] = React.useState(true)
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);
  
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
        setSincronizedItem(true)
      } catch(error) {
        setError(error);
      }
    }, 3000);
  }, [sincronizedItem]); //El segundo parametro que esta recibiendo useeffect determina cuando ejecutar el codigo, en este caso si no se coloca nada el estara ejecutandose constantemente, pero si le colocamos un array vacio le indicamos que se ejecute solo la primera vez que renderizamos
  
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch(error) {
      setError(error);
    }
  };

  const sincronizeItem = () => {
    setLoading(true);
    setSincronizedItem(false)
  }

  return {
    item,
    saveItem,
    loading,
    error,
    sincronizeItem
  };
}

export { useLocalStorage };
