import ReactQuill from "react-quill"
import TitleSection from "../../../../shared/components/Title/TitleSection"
import 'react-quill/dist/quill.snow.css';
import { useState } from "react"
import ButtonPage from "../../../../shared/components/inputs/ButtonPage";
import AnimationIn from '../../../../shared/animations/AnimationIn'
const PoliticPage = () => {

    const [content,setContent] = useState('');
    const sendPolitics = ()=>console.log(content);

  return (
    <div className="flex flex-col justify-between ] gap-5">
        <TitleSection title='Politicas de Privacidad'/>

        <AnimationIn direction="right">
        <ReactQuill className="h-auto w-full" value={content} onChange={setContent}/>
        </AnimationIn>
        
        <ButtonPage onClick={sendPolitics}/>
    </div>

  )
}

export default PoliticPage