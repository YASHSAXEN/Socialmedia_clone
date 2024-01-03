import styles from './middlebar.module.css';
import { MdPermMedia, MdEmojiEmotions } from "react-icons/md";
import { BiTagAlt } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { PiDotsThreeOutlineVertical } from "react-icons/pi";
import { Posts, Users } from '../dummyData';
import { useState } from 'react';


function MiddleBar() {
    
    return (
        <div className={styles.middleBar}>
            <div className={styles.upper}>
                <div className={styles.upperContainer}>
                    <img src="../public/images/1.jpeg" alt="profile_pic" className={styles.profilePic} />
                    <input type="text" className={styles.inputBox} placeholder="What's in your mind Safak" />
                </div>
                <div className={styles.middleContainer}>
                    <hr />
                </div>
                <div className={styles.lowerContainer}>
                    <div className={styles.text}>
                        <div className={styles.tag}>
                            <MdPermMedia className={styles.icons1} />
                            <p>Photo or Video</p>
                        </div>
                        <div className={styles.tag}>
                            <BiTagAlt className={styles.icons2} />
                            <p>Tag</p>
                        </div>
                        <div className={styles.tag}>
                            <FaLocationDot className={styles.icons3} />
                            <p>Location</p>
                        </div>
                        <div className={styles.tag}>
                            <MdEmojiEmotions className={styles.icons4} />
                            <p>Feelings</p>
                        </div>
                    </div>
                    <div className={styles.button}>
                        <button className={styles.share}>Share</button>
                    </div>
                </div>
            </div>
            <div className={styles.lower}>
                {Posts.map((element) => {

                   const [likes, SetLikes] = useState(element.like)
                   const [isliked, SetIsLiked] = useState(false)

                    const clicked = () =>{
                        isliked?SetLikes(likes-1):SetLikes(likes+1);
                        SetIsLiked(!isliked);
                    }

                    const [name] = Users.filter(el => el.id === element.id)
                    return(
                    <div className={styles.postCard} key={element.id}>
                        <div className={styles.first}>
                            <div className={styles.left}>
                                <img src={name.profilePicture} alt="pic" className={styles.userPic} />
                                <p className={styles.userName}>{name.username}</p>
                                <p className={styles.uploadTime}>{element.date}</p>
                            </div>
                            <div className={styles.right}>
                                <PiDotsThreeOutlineVertical className={styles.menu} />
                            </div>
                        </div>
                        <div className={styles.second}>
                            <p>{element.desc}</p>
                        </div>
                        <div className={styles.third}>
                            <img src={element.photo} alt="post" className={styles.postPic} />
                        </div>
                        <div className={styles.fourth}>
                            <div className={styles.likes}>
                                <img src="../public/heart.png" alt="" className={styles.heart} onClick={() => clicked()} />
                                <img src="../public/like.png" alt="" className={styles.like} onClick={() => clicked()}/>
                                <p className={styles.likeCount}>{likes} people liked it</p>
                            </div>
                            <div className={styles.comments}>
                                <p className={styles.commentCount}>{element.comment} Comments</p>
                            </div>
                        </div>
                    </div>)
                })}

            </div>
        </div>
    )
}

export default MiddleBar;