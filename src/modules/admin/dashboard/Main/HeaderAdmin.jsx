import { UserOutlined } from "@ant-design/icons";
import InputEmail from "../../../../shared/components/inputs/InputEmail";
import InputPassword from "../../../../shared/components/inputs/InputPassword";
import { useForm } from "react-hook-form";
import Button from "../../../../shared/components/inputs/Button";
import { useState } from "react";
import { useTheme } from "../../../../core/store/Theme/ThemeContext";
import AnimationIn from '../../../../shared/animations/AnimationIn'
const HeaderAdmin = () => {

  const {register,handleSubmit,formState:{errors}} = useForm();
  const [isOpenRegister,setOpenRegister] = useState(false);
  const user="enrike";
  const handleRegister = (data) => console.log(data);

  return (
  <>
    <div className={`flex justify-between items-center h-[10dvh] my-3 mx-7 px-10 bg-white rounded-2xl`}>
      <AnimationIn direction='left'><h3 className="text-2xl" style={{fontFamily: "Lobster"}}>Control del Menú</h3></AnimationIn>  
       <span className="flex gap-1"><AnimationIn direction='right'>  <UserOutlined className="cursor-pointer" onClick={()=>setOpenRegister(!isOpenRegister)}/><p className="capitalize flex flex-col text-[9px] leading-[10px]"> <span className="font-bold text-[11px]">{user}</span> Administrador </p> </AnimationIn>  </span>
    </div>

    <div className={`transition-transform duration-500 ease-in-out shadow-lg shadow-gray-500 ${isOpenRegister ? "translate-x-[0%]" :"translate-x-[100%]"} fixed right-0 top-0 h-[100dvh] w-[25%] z-10 bg-[#f4eed9] text-white p-5 rounded-tl-3xl`}>
        <div className="text-right cursor-pointer text-blue-500 hover:text-black" onClick={()=>setOpenRegister(!isOpenRegister)}>&#215;</div>
        <h3 className="text-3xl text-gray-700 font-bold title-shadow">Cambiar Contraseña</h3>
        <form onSubmit={handleSubmit(handleRegister)} className="flex flex-col gap-5 my-5 text-black">
            <InputEmail nameInput="email" placeholder="correo" register={register} errors={errors}/>
            <InputPassword nameInput="password" placeholder="nueva contraseña" register={register} errors={errors}/>
            <Button text="Registrar" bgColor="blue" textColor="white"/>
        </form>
    </div>
  </>
  )
}

export default HeaderAdmin