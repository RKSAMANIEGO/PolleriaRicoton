import { useState } from "react";
import InputCrud from "../../../../../shared/components/inputs/InputCrud";
import UploadImage from "../../../../../shared/components/upload/UploadImage";
import ButtonCrud from "../../../../../shared/components/inputs/ButtonCrud";

const CategorieCrud = ({action}) => {

  const [fileList,setListImage] = useState(null);
  const [imageUrl,setImageUrl]=useState('');

  const beforeUpload = (file)=>{
    const isImage= file.type.startsWith('image/');
    if(!isImage){
        message.error("Solo Se Permite Imagenes");
        return Upload.LIST_IGNORE;
    }

    const reader = new FileReader();
    reader.onload=(e)=>{
        setImageUrl(e.target.result);
        setListImage(file);
    }
    reader.readAsDataURL(file);

    return false;
  }

  const removeImage=()=>{
    setListImage(null);
    setImageUrl(null)
  }
 
  const sendCategorie=()=>{ };

  return (
    <form className="w-full flex flex-col gap-3" onSubmit={sendCategorie}> 
        <InputCrud name="Nombre"/>
        <label className="font-bold" htmlFor="categorie">Icono</label>
                
        <UploadImage fileList={fileList} beforeUpload={beforeUpload} imageUrl={imageUrl} removeImage={removeImage}/>        
                
        <ButtonCrud action={action}/>
    </form>
  )
}

export default CategorieCrud