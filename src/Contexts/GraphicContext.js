import React, { useState, createContext } from "react";


export const GraphicContext = createContext();

export function GraphicProvider(props){

    const [media1, setMedia1] = useState(null)
    const [media2, setMedia2] = useState(null)
    const [media3, setMedia3] = useState(null)

    return(
        <GraphicContext.Provider value={{
            media1, setMedia1,
            media2, setMedia2,
            media3, setMedia3
        }}
            >
            {props.children}
        </GraphicContext.Provider>
    )
}

