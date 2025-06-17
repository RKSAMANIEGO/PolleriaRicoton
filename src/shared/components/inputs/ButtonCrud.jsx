const ButtonCrud = ({action}) => {
  return (
    <div className="flex gap-3 justify-end">
                    <button className='flex items-center justify-center border-[1px] border-gray-700 max-w-40 min-w-5 w-20 rounded-sm shadow-md transition-all duration-500 hover:shadow-gray-600 hover:translate-y-1 cursor-pointer'>Cancelar</button>
                    <button className='flex items-center justify-center bg-black text-white py-2 max-w-40 min-w-5 w-20 px-3 rounded-sm shadow-md transition-all duration-500 hover:shadow-gray-600 hover:translate-y-1 cursor-pointer capitalize'>{action}</button>
    </div>
  )
}

export default ButtonCrud