import AnimationIn from '../../animations/AnimationIn'

const TitleSection = ({title}) => {
  //style={{fontFamily:"Beau Rivage"}}
  return (
    <AnimationIn direction="top">
        <h2 className="text-2xl font-bold title-shadow" style={{fontFamily: "Lobster"}}>{title}</h2>
    </AnimationIn>
  )
}

export default TitleSection