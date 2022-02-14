import Collection from '../component/Collection'
import Contact from '../component/Contact'
import Featured from '../component/Featured'
import Logo from '../component/Logo'
import Slider from '../component/Slider'

function Home() {
  return (
    <>
      <Slider />
      <Collection />
      <Featured />
      <Contact />
      <Logo />
    </>
    
  )
}

export default Home