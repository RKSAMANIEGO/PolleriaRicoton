import { useState } from "react";
import ButtonCrud from "../../../../../shared/components/inputs/ButtonCrud"
import InputCrud from "../../../../../shared/components/inputs/InputCrud"
import UploadImage from "../../../../../shared/components/upload/UploadImage"

const ProductCrud= ({action}) => {

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


  return (
    <form className="flex flex-col gap-3">
        <UploadImage fileList={fileList} beforeUpload={beforeUpload} imageUrl={imageUrl} removeImage={removeImage}/>
        <InputCrud name={'Nombre'}/>
        <InputCrud name={'Descripción'}/>
        <div className="flex gap-2">
            <InputCrud name={'Porción'}/>
            <InputCrud name={'Precio'} type={'Number'}/>
        </div>
        <ButtonCrud action={action}/>    
    </form>
  )
}

export default ProductCrud