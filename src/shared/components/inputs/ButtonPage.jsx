import AnimationIn from '../../animations/AnimationIn'

const ButtonPage = ({onClick}) => {
  return (

    <AnimationIn direction='bottom'>
      <div className='w-full'></div>
      <div className="flex justify-end gap-2 pt-10 pb-5">
            <button className="border-[1px] border-black  max-w-40 min-w-5 w-20 rounded-md py-2 transition-transform duration-500 hover:translate-y-1 hover:shadow-md hover:shadow-gray-500">Editar</button>
            <button className="bg-black text-white  max-w-40 min-w-5 w-20 py-2 rounded-md transition-transform duration-500 hover:translate-y-1 hover:shadow-md hover:shadow-gray-500" onClick={onClick}>Guardar</button>
      </div>
    </AnimationIn>
  )
}

export default ButtonPage