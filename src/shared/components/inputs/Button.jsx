const colorBg = {
  blue: 'bg-blue-500',
  red: 'bg-red-500',
  green: 'bg-green-500',
  black: 'bg-black'
};

const colorText ={
    white : 'text-white',
    black : 'text-black',
    gray  : 'text-gray-400'
}

const Button = ({text,bgColor,textColor,type="submit"}) => {
  return (
    <button type={type} className={`py-3 px-5 rounded-md ${colorBg[bgColor]}  ${colorText[textColor]} font-bold  transititon-transform duration-500  hover:-translate-y-2 hover:translate-x-1 hover:shadow-lg hover:shadow-gray-600` }> {text} </button>
  )
}

export default Button