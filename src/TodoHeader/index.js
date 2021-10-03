import React from "react";


function TodoHeader({children, loading}){
    return(
        <header>
        {
            React.Children
                .toArray(children)
                .map(child => React.cloneElement(child,{ loading }))
        }
        </header>
    )
}

//React.cloneElement lo usamos para clonar un elemento a partir de otro, con el primer argumento le decimos que queremos clonar y con el segundo le decimos que propiedades adicionales queremos que tenga el clone
//React.Children lo usamos para ayudarnos a manejar de otra manera el children de un elemento, en este caso como el React.cloneElement no sabe como actuar cuando recibe mas de un hijo del componente, entonces con el React.Children convertimos el children en un array para despues manipularlo como un array

export {TodoHeader}