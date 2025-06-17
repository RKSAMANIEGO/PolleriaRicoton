import Button from "../../../../shared/components/inputs/Button"
import TitleSection from "../../../../shared/components/Title/TitleSection"
import pollos from '../../../../assets/pollos.png'
import { PlusOutlined } from "@ant-design/icons"
import SearchAdmin from "../../../../shared/components/search/SearchAdmin"
import ProductCard from "./Components/ProductCard"
import { useCustomModal } from "../../../../shared/hooks/modal/CustomModalContext"
import CustomModal from "../../../../shared/components/modal/CustomModal"
import ProductCrud from "./Components/ProductCrud"

const combos= [
    {id:1 , title: 'pollos', price:15, image:pollos},
    {id:2 , title: 'combos', price:20,  image:pollos},
    {id:3 , title: 'bebidas', price:35, image:pollos},
    {id:4 , title: 'sopas', price:48, image:pollos}
]

const ComboPage = () => {
    const {isOpen,onOpen,onClose} = useCustomModal();
    const onDelete=(value)=> alert("Producto con Id "+value+" Eliminado");
    
  return (
     <div className="flex flex-col gap-4 max-w-7xl m-auto">

        <div className='flex'>
            <TitleSection title="Lista de Combos"/>
            <Button text="Ingresar" bgColor="black" textColor="white" type="button" icon={<PlusOutlined/>} onClick={()=>onOpen("agregar","combo")}/>
        </div>

        <SearchAdmin placeholder='productos'/>

        <div className="grid grid-cols-4 gap-4 h-auto py-5 ">
            <ProductCard productos={combos} onEdit={()=>onOpen("editar","combo")} onDelete={onDelete}/>
        </div>

        {isOpen.status && isOpen.entity === "combo" &&  
        <CustomModal isOpen={isOpen} onClose={onClose} title={`${isOpen.action} ${isOpen.entity}`}>
            <ProductCrud action={isOpen.action}/>
        </CustomModal> }

    </div>
  )
}

export default ComboPage