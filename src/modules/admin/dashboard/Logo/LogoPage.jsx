import { Upload,Button, message } from "antd"
import TitleSection from "../../../../shared/components/Title/TitleSection"
import { PictureOutlined } from "@ant-design/icons"
import { useState } from "react"
import AnimationIn from "../../../../shared/animations/AnimationIn"

const LogoPage = () => {
  
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
    <div className="flex flex-col justify-between gap-2 h-full">
        <TitleSection title="Logo"/>

        <AnimationIn direction='bottom'>
          <div className="flex justify-center items-center h-[100%] w-full">    
            {fileList === null ? (
                <Upload
                  showUploadList={false}
                  beforeUpload={beforeUpload}
                  maxCount={1}
                >
                    <Button icon={<PictureOutlined className="text-[5rem] text-gray-500"/>} className="border-dashed p-28 flex flex-col">Subir Imagen</Button>
                </Upload>
            ) : 
                <img className="h-[60vh]" src={imageUrl} alt="logo"/>
            }       
          </div>
        </AnimationIn>
        
        <AnimationIn direction='right'>
          <div className="w-full"></div> {/* le da direction end al boton */}
          <div className="flex justify-end">
            <button onClick={removeImage} className="bg-red-600 text-white px-5 py-2 rounded-md transition-all duration-500 hover:translate-y-1 hover:shadow-md hover:shadow-gray-600">Eliminar</button>
          </div>
        </AnimationIn>

    </div>
  )
}

export default LogoPage