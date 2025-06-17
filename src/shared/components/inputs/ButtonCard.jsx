
const ButtonCard = ({onEdit,onDelete}) => {
  return (
    <div className="flex gap-2 p-5">
        <button className="bg-gray-800 text-white w-[50%] py-2 rounded-md transition-all duration-500 hover:translate-y-1 hover:shadow-md hover:shadow-gray-600" onClick={onEdit}>Editar</button>
        <button className="bg-red-600 text-white w-[50%] py-2 rounded-md transition-all duration-500 hover:translate-y-1 hover:shadow-md hover:shadow-gray-600" onClick={onDelete}>Eliminar</button>
    </div>
  )
}

export default ButtonCard