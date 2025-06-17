import {useState } from "react"
import { CustomModalContext } from "./CustomModalContext"

const CustomModalProvider = ({children}) => {
  
    const [isOpen , setIsOpen] = useState({status:false, action:'',entity:''});

    const onOpen  = (value,entity) => setIsOpen({status:true, action:value, entity:entity});
    const onClose = () => setIsOpen({status:false, action:'', entity:''});

    return (
    <CustomModalContext.Provider value={{isOpen,onOpen,onClose}}>
        {children}
    </CustomModalContext.Provider>
  )
}

export default CustomModalProvider