import { Avatar } from '@material-ui/core'
import { ArrowForward, Chat, Public, Send, ThumbUp } from '@material-ui/icons'
import React from 'react'
import ReactPlayer from 'react-player'
import "./Posts.css"

function Posts({avatar,username,description,time,caption,postImage,post,video,noOfLikes,noOfcomments}) {
    return (
        <div className="posts">
            <div className="posts__info">
                <Avatar src={avatar} alt={username}/>
                <div className="posts__user">
                    <h3>{username}</h3>
                    <p>{description}</p>
                    <p>{time} • <Public/></p>
                </div>
            </div>
            <div className="posts__detail">
                {caption && <p>{caption}</p>}
                {postImage && <img src={postImage} alt="Src postImage"/>}
                {video &&  <ReactPlayer width="100%" url={video} playing={true} loop={true} controls={false}/>}
                {post && <p>{post}</p>}
            </div>
            <div className="posts__response">
                <p><ThumbUp/>{noOfLikes} • {noOfcomments} comments</p>
            </div>
            <hr/>
            <div className="posts__emotions">
                <p><ThumbUp/> Like</p>
                <p><Chat/> Comments</p>
                <p><ArrowForward/> Share</p>
                <p><Send/> Send</p>
            </div>
        </div>
    )
}

export default Posts
