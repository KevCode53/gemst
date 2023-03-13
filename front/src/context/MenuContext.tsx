import { createContext, ReactElement, ReactNode, useState } from "react";

export const MenuContext = createContext({})

export const MenuContextProvider = ({children}:{children:ReactNode}):ReactElement => {
  const [isOpen, setIsOpen] = useState(false)
  const [isExpand, setIsExpand] = useState(true)

  return (
    <MenuContext.Provider value={{isOpen, setIsOpen, isExpand, setIsExpand}}>
      {children}
    </MenuContext.Provider>
  )
}