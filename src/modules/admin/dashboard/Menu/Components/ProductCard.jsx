import ButtonCard from "../../../../../shared/components/inputs/ButtonCard"
import AnimationIn from '../../../../../shared/animations/AnimationIn'
const ProductCard = ({productos,onEdit,onDelete}) => {
  return (
    <>
    {productos.map(prod => (
    <AnimationIn direction='bottom'>      
      <div key={prod.id} className="group flex flex-col justify-between h-[320px] w-[250px] rounded-t-2xl transition-transform duration-500 hover:-translate-y-2" style={{boxShadow:"5px 5px 2px  #f1ecd7"}}>
        
        <div className="h-[50%] overflow-hidden bg-[#f1f1f1] flex justify-center rounded-t-2xl">
            <img className="w-[70%] transition-transform duration-500 group-hover:scale-110" src={prod.image} alt="producto 1"/>
        </div>

        <div className="p-5 font-bold">
            <h3 className="text-gray-700">{prod.title}</h3>
            <p className="text-gray-500">{`S/${Number(prod.price).toFixed(2)}`}</p>
        </div>

      <ButtonCard onEdit={onEdit} onDelete={()=> onDelete(prod.id)}/>
      </div>
    </AnimationIn> 
    ))}
    </>
  )
}

export default ProductCard