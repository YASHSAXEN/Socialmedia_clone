import './Home.css'
import NavBar from '../components/navbar'
import SideBar from '../components/sidebar'
import MiddleBar from '../components/middlebar'
import RightBar from '../components/rightbar'

function Home() {

  return (
    <>
      <NavBar></NavBar>
      <div className="mainbody">
        <SideBar></SideBar>
        <MiddleBar></MiddleBar>
        <RightBar></RightBar>
      </div>
    </>
  )
}

export default Home
