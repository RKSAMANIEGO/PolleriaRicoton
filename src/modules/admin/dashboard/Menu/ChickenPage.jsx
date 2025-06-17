import { PlusOutlined } from "@ant-design/icons"
import Button from "../../../../shared/components/inputs/Button"
import SearchAdmin from "../../../../shared/components/search/SearchAdmin"
import TitleSection from "../../../../shared/components/Title/TitleSection"
import ProductCard from "./Components/ProductCard"
import img from '../../../../assets/producto.png'
import CustomModal from "../../../../shared/components/modal/CustomModal"
import { useCustomModal } from "../../../../shared/hooks/modal/CustomModalContext"
import ProductCrud from "./Components/ProductCrud"

const producto =[
    {id:1, title:'1/4 de Pollo con papas', price:26.00, image:img },
    {id:2, title:'1/2 de Pollo con papas', price:38.00, image:img },
    {id:3, title:'1 de Pollo con papas', price:62.00, image:img },
    {id:4, title:'3/4 de Pollo con papas', price:48.00, image:img },
    {id:5, title:'Pollo Familiar con papas', price:75.00, image:img },
    {id:6, title:'2/8 de Pollo con papas', price:16.00, image:img },
]
const ChickenPage = () => {

  const {isOpen,onOpen,onClose}=useCustomModal();

  const onDelete =(value)=>{ alert("Producto con Id "+value+" Eliminado"); }
  return (
    <div className="flex flex-col gap-4 max-w-7xl m-auto">

        <div className='flex'>
          <TitleSection title="Lista de Pollos"/>
          <Button text="Ingresar" bgColor="black" textColor="white" type="button" icon={<PlusOutlined/>} onClick={()=> onOpen("agregar","pollo")}/>
        </div>

        <SearchAdmin placeholder='productos'/>

        <div className="grid grid-cols-4 gap-4 h-auto py-5 ">
            <ProductCard productos={producto} onEdit={()=>onOpen("editar","pollo")}  onDelete={onDelete}/>
        </div>

        { (isOpen.status && isOpen.entity === "pollo")  &&  
        <CustomModal isOpen={isOpen.status} onClose={onClose} title={`${isOpen.action} ${isOpen.entity}`}> 
          <ProductCrud action={isOpen.action}/>
        </CustomModal>}
            
    </div>
  )
}

export default ChickenPage