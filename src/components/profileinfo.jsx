import styles from './profileinfo.module.css';
import { Users } from '../dummyData';

function ProfileInfo() {
    return (
        <div className={styles.profileInfo}>
            <div className={styles.infoContent}>
                <h3>User Information</h3>
                <div><p>City:</p><p>New York</p></div>
                <div><p>From:</p><p>Madrid</p></div>
                <div><p>Realtionship:</p><p>Single</p></div>
            </div>
            <div className={styles.friends}>
                <h3>User Friends</h3>
                <div className={styles.friendImages}>
                    {Users.map((el) => {
                        return (
                            <div className={styles.image}>
                                <img src={el.profilePicture} alt="freind1" className={styles.images} />
                                <p className={styles.usernames}>{el.username}</p>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;