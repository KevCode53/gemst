import { MenuContext } from "../context/MenuContext"
import { useContext } from "react"

export const useMenu = () => {
  const {
    isOpen, setIsOpen,
    isExpand, setIsExpand
  } = useContext(MenuContext)

  const openMenu = () => {
    setIsOpen(true)
  }
  const closeMenu = () => {
    setIsOpen(false)
  }
  const handleExpand = () => {
    setIsExpand(!isExpand)
  }
  return {
    openMenu,
    closeMenu,
    handleExpand,
    isOpen,
    isExpand
  }
}