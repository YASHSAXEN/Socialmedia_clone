import styles from './rightbar.module.css';
import { Users } from '../dummyData'
function RightBar(){
    return(
        <div className={styles.rightbar}>
            <div className={styles.upper}>
                <div className={styles.logo}>
                    <img src="../public/gift.png" alt="gift" className={styles.giftImage} />
                </div>
                <div className={styles.text}>
                    <p className={styles.insideText}><b>Pola Foster</b> and <b>3 other friends</b> have a birthday today</p>
                </div>
            </div>
            <div className={styles.middle}>
                <img src="../public/ad.png" alt="ad" className={styles.ad} />
            </div>
            <div className={styles.lowerPart}>
                <div className={styles.heading}>
                    <h3>Online Friends</h3>
                </div>
                {Users.map((element) => {
                    return (
                        <div key={element.id} className={styles.container}>
                            <div className={styles.imagecontainer}>
                                <img src={element.profilePicture} alt="user_pic" className={styles.userPic} />
                                <div className={styles.circle}></div>
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

export default RightBar;