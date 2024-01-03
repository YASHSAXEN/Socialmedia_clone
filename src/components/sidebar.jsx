import styles from './sidebar.module.css';
import { MdRssFeed, MdChat } from "react-icons/md";
import { FaRegPlayCircle, FaBookmark, FaRegQuestionCircle } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { BsBriefcase } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { RiGraduationCapFill } from "react-icons/ri";
import { Users } from '../dummyData'

function SideBar() {
    return (
        <div className={styles.sideBar}>
            <div className={styles.upperPart}>
                <div className={styles.items}>
                    <MdRssFeed className={styles.icons} />
                    <p className={styles.text}>Feed</p>
                </div>
                <div className={styles.items}>
                    <MdChat className={styles.icons} />
                    <p className={styles.text}>Chats</p>
                </div>
                <div className={styles.items}>
                    <FaRegPlayCircle className={styles.icons} />
                    <p className={styles.text}>Videos</p>
                </div>
                <div className={styles.items}>
                    <FaUserGroup className={styles.icons} />
                    <p className={styles.text}>Groups</p>
                </div>
                <div className={styles.items}>
                    <FaBookmark className={styles.icons} />
                    <p className={styles.text}>Bookmarks</p>
                </div>
                <div className={styles.items}>
                    <FaRegQuestionCircle className={styles.icons} />
                    <p className={styles.text}>Questions</p>
                </div>
                <div className={styles.items}>
                    <BsBriefcase className={styles.icons} />
                    <p className={styles.text}>Jobs</p>
                </div>
                <div className={styles.items}>
                    <SlCalender className={styles.icons} />
                    <p className={styles.text}>Events</p>
                </div>
                <div className={styles.items}>
                    <RiGraduationCapFill className={styles.icons} />
                    <p className={styles.text}>Courses</p>
                </div>
                <div className={styles.items}>
                    <button className={styles.button}>Show More</button>
                </div>
                <hr />
            </div>
            <div className={styles.lowerPart}>
                {Users.map((element) => {
                    return (
                        <div key={element.id} className={styles.container}>
                            <div className={styles.imagecontainer}>
                                <img src={element.profilePicture} alt="user_pic" className={styles.userPic} />
                            </div>
                            <div className={styles.friendName}>
                                <p className={styles.name}>{element.username}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SideBar;