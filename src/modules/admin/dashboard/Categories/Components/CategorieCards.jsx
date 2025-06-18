import ButtonCard from "../../../../../shared/components/inputs/ButtonCard"
import AnimationIn from '../../../../../shared/animations/AnimationIn'
const CategorieCards = ({categories,onEdit,onDelete}) => {

  return (
    <>
    {categories.map(cat => (
      <AnimationIn direction='bottom'>       
        <div key={cat.id} className="group flex flex-col justify-between h-[300px] w-[250px] rounded-t-2xl transition-transform duration-500 hover:-translate-y-2 " style={{boxShadow:"5px 5px 2px  #f1ecd7"}}>        
            
            <div className="h-[50%] bg-[#f1f1f1] flex justify-center rounded-t-2xl">
                <img className="w-[70%] transition-transform duration-500 group-hover:scale-90" src={cat.image_url} alt="producto 1"/>
            </div>

            <div className="p-5 font-bold">  
                <h3>{cat.name}</h3> 
            </div>

            <ButtonCard onEdit={onEdit} onDelete={()=> onDelete(cat.id)}/>
        </div>
      </AnimationIn> 
    ))}
    </>
  )
}

export default CategorieCards