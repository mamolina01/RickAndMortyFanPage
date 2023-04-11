import React, { createContext } from 'react'

export const characterContext=createContext()


export const CharacterContextProvider = ({children}) => {
  return (
   <>
   <characterContext.Provider>
      {children}
   </characterContext.Provider>
   </>
  )
}
