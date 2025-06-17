import { useForm } from "react-hook-form"
import Button from "../../../shared/components/inputs/Button"
import InputEmail from "../../../shared/components/inputs/InputEmail"
import InputPassword from "../../../shared/components/inputs/InputPassword"
import { useNavigate } from "react-router-dom"
import login from '../../../assets/polleria_login.webp'
import logo from '../../../assets/logoPolleria.png'
import '../../../shared/styles/sidebar.css'
import { useEffect, useState } from "react"
import AnimationIn from '../../../shared/animations/AnimationIn'

const LoginPage= () => {

  const{register,handleSubmit,formState:{errors}} = useForm();
  const [width,setWidth]=useState(window.innerWidth);
  const navigate = useNavigate();

  const sendForm = (data) =>{
      console.log(data);
      navigate("/panel");
  }

  useEffect(()=>{
    const widthPage=()=>setWidth(window.innerWidth);
    window.addEventListener("resize",widthPage);
    return ()=>  window.removeEventListener("resize",widthPage);
  },[])


  return (
    <div className={`${"marco"} relative flex justify-start ${width > 700 ? 'pr-10' : ''} h-[100dvh]`} style={  width >820 ? {background:`url(${login})`, backgroundSize:"121%", backgroundPositionY:"50%", backgroundPositionX:"50%"} : {background:"#f5efdb"} }>
    
      <div className={`flex flex-col justify-between gap-5 ${width>820 ?' w-[40%] ' :' w-full bg-transparent' } bg-[#f4efda] p-10`}>

          <h2 className={`${"recorte"}  font-bold text-6xl ${width > 820 ? 'text-red-700': ' text-red-700 title-shadow'}  h-[200px] text-center flex items-center justify-center`} style={{fontFamily:"Lobster"}}><AnimationIn direction='top'><span className="w-full">Bienvenido</span></AnimationIn> </h2>
        
        <AnimationIn direction='right'>
          <p className="text-center font-bold w-full">Polleria <span className="text-[#f9ba0e] block text-3xl" style={{fontFamily:"Bungee Spice"}}>EL RICOTON</span></p>
        </AnimationIn>

        <AnimationIn direction='left'>
          <form className="flex flex-col gap-5 w-full" onSubmit={handleSubmit(sendForm)}>
              <InputEmail nameInput="email" placeholder="correo" register={register} errors={errors}/>
              <InputPassword nameInput="password" placeholder="contraseña" register={register} errors={errors}/>
              <Button text='Ingresar' bgColor='orange' textColor='white'/>
              <p className={`text-center text-[12px]`}>Para mayor información ingresa a nuestras redes sociales</p>
          </form>
        </AnimationIn>
          <div className="flex items-center justify-center gap-5 py-5">
            <a href="#">
              <img className={`${width>820 ? 'w-20':'w-14'}`} src="https://www.artsboston.org/wp-content/uploads/2018/02/instagram-png-instagram-logo-2-png-8-de-abril-de-2017-927-kb-3500-3393-3500.png" alt="ig"/>
            </a> 
              
            <a href="#">
              <img className={`${width>820 ? 'w-20':'w-14'}`} src="https://www.freeiconspng.com/uploads/logo-facebook-transparent-24.png" alt="ig"/>
            </a>
          </div>

      </div>

      <div className={`absolute   ${width >820 ? 'w-24 right-7 top-5': 'w-10 right-2 top-2'}`}> <img  className={`rounded-full `} src={logo} alt="logo" /></div>

    </div>
  )
}

export default LoginPage