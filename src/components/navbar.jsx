import styles from './navbar.module.css'
import { IoSearchOutline, IoPerson } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className={styles.navbarContainer}>
            <div className={styles.logoContainer}>
                <Link to='/'className={styles.logoName} >
                    <p className={styles.logoName}>
                        Facebook
                    </p>
                </Link>
            </div>
            <div className={styles.inputContainer}>
                <div className={styles.inputContainerInside}>
                    <IoSearchOutline className={styles.searchIcon} />
                    <input type="text" placeholder='Search for friend, post or video' className={styles.inputBox} />
                </div>
            </div>
            <div className={styles.profileContainer}>
                <div className={styles.text}>
                    <span className={styles.homePage}>Homepage</span>
                    <span className={styles.homePage}>Timeline</span>
                </div>
                <div className={styles.icons}>
                    <div className={styles.personDiv}>
                        <IoPerson className={styles.person} />
                        <div className={styles.count1}>1</div>
                    </div>
                    <div className={styles.messageDiv}>
                        <MdMessage className={styles.message} />
                        <div className={styles.count2}>2</div>
                    </div>
                    <div className={styles.notifyDiv}>
                        <IoIosNotifications className={styles.notify} />
                        <div className={styles.count3}>1</div>
                    </div>
                </div>
                <div className={styles.profilePhoto}>
                    <Link to='/profile-page'><img src="../public/images/1.jpeg" alt="profile_image" style={{ width: '40px', height: '40px' }} className={styles.profilePic} /></Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar;