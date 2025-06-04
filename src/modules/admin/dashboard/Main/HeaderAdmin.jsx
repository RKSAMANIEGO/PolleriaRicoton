import { UserOutlined } from "@ant-design/icons";
import InputEmail from "../../../../shared/components/inputs/InputEmail";
import InputPassword from "../../../../shared/components/inputs/InputPassword";
import { useForm } from "react-hook-form";
import Button from "../../../../shared/components/inputs/Button";
import { useState } from "react";
import { useTheme } from "../../../../core/store/Theme/ThemeContext";

const HeaderAdmin = () => {

  const {register,handleSubmit,formState:{errors}} = useForm();
  const [isOpenRegister,setOpenRegister] = useState(false);
  const user="enrike";
  const {isDark} = useTheme();
  const handleRegister = (data) => console.log(data);

  return (
  <>
    <div className={`flex justify-between items-center h-[10dvh] my-3 mx-7 px-10  ${isDark ? " bg-[#f12828] text-white":"bg-white"}  rounded-2xl`}>
        <h3 className="text-2xl" style={{fontFamily: "Lobster"}}>Control del Menú - Pollos</h3>
        <span className="flex gap-1"><UserOutlined className="cursor-pointer" onClick={()=>setOpenRegister(!isOpenRegister)}/><p className="capitalize flex flex-col text-[9px] leading-[10px]"> <span className="font-bold text-[11px]">{user}</span> Administrador </p>  </span>
    </div>

    <div className={`transition-transform duration-500 ease-in-out ${isOpenRegister ? "translate-x-[0%]" :"translate-x-[100%]"} fixed right-0 top-0 h-[100dvh] w-[25%] z-10 bg-red-900 text-white p-5 rounded-tl-3xl`}>
        <div className="text-right cursor-pointer hover:text-blue-500" onClick={()=>setOpenRegister(!isOpenRegister)}>&#215;</div>
        <h3 className="text-3xl">Registrar</h3>
        <form onSubmit={handleSubmit(handleRegister)} className="flex flex-col gap-5 my-5 text-black">
            <InputEmail nameInput="email" placeholder="correo" register={register} errors={errors}/>
            <InputPassword nameInput="password" placeholder="contraseña" register={register} errors={errors}/>
            <Button text="Registrar" bgColor="blue" textColor="white"/>
        </form>
    </div>
  </>
  )
}

export default HeaderAdmin