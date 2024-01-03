import styles from './profile.module.css';

function Profile(){
    return(
        <div className={styles.mainConatiner}>
            <div className={styles.backgroundImageContainer}>
                <img src="../public/post/3.jpeg" alt="backgroundpic" className={styles.bgImage}/>
                <img src="../public/images/1.jpeg" alt="profilepic" className={styles.profilePic} />
            </div>
            <div className={styles.profileName}>
                <h2>Safak Kocagolu</h2>
                <p>Hello my friends!!</p>
            </div>
        </div>
    )
}

export default Profile;