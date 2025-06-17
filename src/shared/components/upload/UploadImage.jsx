import { DeleteOutlined, PictureOutlined } from "@ant-design/icons"
import { Button, Upload } from "antd"

const UploadImage = ({fileList,beforeUpload,imageUrl,removeImage}) => {
  return (
    <div className="relative">
        <div className="flex justify-center items-center h-[250px] bg-gray-200 rounded-lg p-5">    
                    {fileList === null ? (
                        <Upload
                            showUploadList={false}
                            beforeUpload={beforeUpload}
                            maxCount={1}
                            >
                            <Button type="button" icon={<PictureOutlined className="text-[5rem] text-gray-500"/>} className="border-dashed p-28 flex flex-col">Subir Imagen</Button>
                        </Upload>
                    ) : 
                        <img className="w-[85%]" src={imageUrl} alt="logo"/>
                    }       
        </div>
        <div className="flex justify-start">
            <button type="button" onClick={removeImage} className="absolute bottom-1 left-1 w-8 h-8 rounded-lg"><DeleteOutlined className="text-red-600 text-[16px] transition-transform duration-500 hover:bg-slate-300 p-2 rounded-full hover:-translate-y-1"/></button>
        </div>
    </div>
  )
}

export default UploadImage