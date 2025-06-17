const colorBg = {
  blue: 'bg-blue-500',
  red: 'bg-red-500',
  green: 'bg-green-500',
  black: 'bg-black',
  orange: 'bg-orange-700'
};

const colorText ={
    white : 'text-white',
    black : 'text-black',
    gray  : 'text-gray-400'
}

const Button = ({text,bgColor,textColor,type="submit",icon,onClick }) => {
  return (
    <button type={type} onClick={onClick} className={`flex gap-1 justify-center py-3 px-5 rounded-md ${colorBg[bgColor]}  ${colorText[textColor]} font-bold  transititon-transform duration-500  hover:-translate-y-1 hover:translate-x-1 hover:shadow-lg hover:shadow-gray-600` }>{icon} {text} </button>
  )
}

export default Button