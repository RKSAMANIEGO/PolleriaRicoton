import { PlusOutlined } from "@ant-design/icons"
import Button from "../../../../shared/components/inputs/Button"
import TitleSection from "../../../../shared/components/Title/TitleSection"
import SearchAdmin from "../../../../shared/components/search/SearchAdmin"
import CategorieCards from "./Components/CategorieCards"
import { useCustomModal } from "../../../../shared/hooks/modal/CustomModalContext"
import CustomModal from "../../../../shared/components/modal/CustomModal"
import CategorieCrud from "./Components/CategorieCrud"
import { useEffect, useState } from "react"
import { getCategories } from "../../../../shared/services/CategoryService"


const CategoriePage = () => {

  const [categories, setcategories] = useState([]);

  useEffect(() => {
    
    const fetchCategories = async () => {
      
      const response = await getCategories();
      setcategories(response);

    }

    fetchCategories();
  }, [])
  


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