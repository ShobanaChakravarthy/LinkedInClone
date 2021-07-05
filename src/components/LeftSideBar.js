import { Avatar } from '@material-ui/core'
import { Bookmark } from '@material-ui/icons'
import React from 'react'
import "./LeftSideBar.css"

function LeftSideBar() {
    return (
        <div className="leftsidebar">
            {/* profile bar */}
            <div className="leftsidebar__profile">
                <div className="leftsidebar__profileinfo">
                    <img src="https://images.unsplash.com/photo-1544965850-6f8a66788f9b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1082&q=80" alt=""/>
                    <Avatar src="https://images.unsplash.com/photo-1470509037663-253afd7f0f51?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"/>
                    <h4>Shobana Chakravarthy</h4>
                    <p><center>Frontend Developer | UI/UX Designer | Web Developer | HTML | CSS | JS | REACTJS</center></p>
                </div>
                <hr className="leftsidebar__hr"/>
                <div className="leftsidebar__middle">
                    <p>Connections<span>92</span></p>
                    <p>Who Viewed your profile<span>28</span></p>
                    <hr className="leftsidebar__hr"/>
                    <h6>Access Exclusive tools & Insights</h6>
                    <h5>Try premium for a month</h5>
                    <hr className="leftsidebar__hr"/>
                    <div className="leftsidebar__profileend"><span><Bookmark/></span>My Items</div>
                </div>
            </div>
            {/* group bar */}
            <div className="leftsidebar__group">
                <p>Groups</p>
                <div className="leftsidebar__event">Events<span>+</span></div>
                <p>Followed Hashtags</p>
                <hr className="leftsidebar__hr"/>
                <center><h6>Discover More</h6></center>
            </div>
        </div>
    )
}

export default LeftSideBar
