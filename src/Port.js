import userImage from "./images/user.png"
import like from "./images/like.png"
import heart from "./images/heart.png"
import like1 from "./images/like1.png"
import comment from "./images/comment.png"
import share from "./images/share.png"
import inputEmoji from "./images/1.png"
import inputPic from "./images/2.png"
import FbImageLibrary from 'react-fb-image-grid'
import './App.css';

function Unorderedlist({shares , likes , postImg , img , name , date , title , description}) {

    const commentInput = "comment as " + name;

    return(
        <div>
            <ul className = "posts">
                <li>
                    <div className = "userData">
                        <img width = "100%" src = {img} />
                        <div>
                            <div className="userName" id="userName">
                                {name}
                            </div>
                            <div className="dateNtime" id="dateNtime">
                                {date}
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div>
                        <div>
                            <div className="title">
                                <h3 id="sharedTitle">{title}</h3>
                                <p id="sharedTitlePost">{description}</p>
                            </div>
                        </div>
                        <FbImageLibrary images={postImg}/>
                    </div>
                </li>
                <li>
                    <div className="boostingArea">
                        <p>See Insights</p>
                        <button>Boost Post</button>
                    </div>
                </li>
                <li>
                    <div className="emojisArea">
                        <div className="emojis">
                            <img width="20px" height="20px" src={like} />
                            <img width="20px" height="20px" src={heart} />
                            <p className="likeDetails">{likes}</p>
                        </div>
                        <p>{shares} Shares</p>
                    </div>
                </li>
                <li>
                    <div className="likeCommentShare">
                        <div className="icon">
                            <img src={like1} />
                            <p>Like</p>
                        </div>
                        <div className="icon">
                            <img src={comment} />
                            <p>Comment</p>
                        </div>
                        <div className="icon">
                            <img src={share} />
                            <p>Share</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="commentSection">
                        <img src={img} />
                        <div className="commentArea">
                            <input placeholder =  {commentInput} />
                            <div className="inputIcons">
                                <img src={inputEmoji} />
                                <img src={inputPic} />
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Unorderedlist