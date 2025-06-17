import { PlusOutlined } from "@ant-design/icons"
import Button from "../../../../shared/components/inputs/Button"
import TitleSection from "../../../../shared/components/Title/TitleSection"
import SearchAdmin from "../../../../shared/components/search/SearchAdmin"
import CategorieCards from "./Components/CategorieCards"
import { useCustomModal } from "../../../../shared/hooks/modal/CustomModalContext"
import CustomModal from "../../../../shared/components/modal/CustomModal"
import CategorieCrud from "./Components/CategorieCrud"

const categories=[
    {id:1,title:"pollos",image:"https://png.pngtree.com/png-vector/20241107/ourlarge/pngtree-delicious-golden-fried-chicken-in-red-bucket-png-image_14309850.png"},
    {id:2,title:"combos",image:"https://png.pngtree.com/png-vector/20241107/ourlarge/pngtree-delicious-golden-fried-chicken-in-red-bucket-png-image_14309850.png"},
    {id:3,title:"sopas",image:"https://png.pngtree.com/png-vector/20241107/ourlarge/pngtree-delicious-golden-fried-chicken-in-red-bucket-png-image_14309850.png"}
]

const CategoriePage = () => {

  const {isOpen,onOpen,onClose} =  useCustomModal();
  const onDelete=(id)=>alert(`Categoria con ID ${id} Eliminado`);
  return (
    <div className="flex flex-col gap-4 max-w-7xl m-auto">

        <div className='flex'>
            <TitleSection title="Lista de Categorias"/>
            <Button text="Ingresar" bgColor="black" textColor="white" type="button" icon={<PlusOutlined/>} onClick={() => onOpen("agregar","categoria")}/>
        </div>

        <SearchAdmin placeholder='productos' />

        <div className="grid grid-cols-4 gap-4 h-auto py-5 ">
            <CategorieCards categories={categories} onEdit={()=>onOpen("editar","categoria")} onDelete={onDelete}/>
        </div>

        {isOpen.status && isOpen.entity === "categoria"  && 
        <CustomModal isOpen={isOpen} onClose={onClose} title={`${isOpen.action} ${isOpen.entity}`}>
          <CategorieCrud action={isOpen.action}/>
        </CustomModal>}

    </div>
  )
}

export default CategoriePage