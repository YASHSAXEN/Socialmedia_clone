import './ProfilePage.css'
import NavBar from '../components/navbar'
import SideBar from '../components/sidebar'
import MiddleBar from '../components/middlebar'
import Profile from '../components/profile'
import ProfileInfo from '../components/profileinfo'

function ProfilePage() {

  return (
    <>
      <NavBar></NavBar>
      <div className="mainbody">
        <SideBar></SideBar>
        <div className="secondHalf">
          <Profile></Profile>
          <div className="secondHalfInside">
            <MiddleBar></MiddleBar>
            <ProfileInfo></ProfileInfo>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfilePage
