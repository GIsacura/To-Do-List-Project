import React from "react";

function useStorageListener(sincronize){
    const [storageChange, setStorageChange] = React.useState(false) //Se crea un stado para verficar si hubo cambios en alguna otra pestaña que tenga la app abierta

    window.addEventListener('storage', (change) => {
        if(change.key === 'TODOS_V1'){
            console.log('Hubo cambios en TODOS_V1')
            setStorageChange(true)
        }
    })

    const toggleShow = () =>{
        sincronize()
        setStorageChange(false)
    }

    return {
        show : storageChange, //con esta propiedad indicamos que se mostrara el componente cuando el storageChange sea true, osea cuando haya algun cambio
        toggleShow //aca llamariamos al actualizador del estado de manera que cuando ya se hayan recargado las pestañas y todas tengan la misma informacion podamos desparecer este componente

    }
}


export {useStorageListener}