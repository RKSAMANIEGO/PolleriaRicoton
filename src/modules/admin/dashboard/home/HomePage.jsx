import Button from '../../../../shared/components/inputs/Button'
import SearchAdmin from '../../../../shared/components/search/SearchAdmin'
import TitleSection from '../../../../shared/components/Title/TitleSection'

const HomePage = () => {



  return (
    <div className="flex flex-col gap-4">
      <div className='flex'>
         <TitleSection title="Lista de Pollos"/>
         <Button text="Ingresar" bgColor="black" textColor="white" type="button"/>
      </div>
     
      <SearchAdmin placeholder='productos'/>

    </div>
  )
}

export default HomePage