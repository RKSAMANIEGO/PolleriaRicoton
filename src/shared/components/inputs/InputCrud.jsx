const InputCrud = ({name,type}) => {
  return (
    <div>
        <label className="font-bold">{name}</label>
        <input type={type || 'text'} placeholder={`Ingrese ${name}`}  className="w-full py-2 px-5 border-[1px] border-gray-300 rounded-lg"/>
    </div>
  )
}

export default InputCrud