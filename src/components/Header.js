import { Avatar } from '@material-ui/core'
import {  Chat, ExpandMore, Home, Notifications, People, Search, ViewComfy, Work } from '@material-ui/icons'
import React from 'react'
import "./Header.css"

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="linkedin logo"/>
                <div className="header__searchbox">
                    <Search className="header__search"/>
                    <input type="text" placeholder="Search"/>
                </div>
            </div>
            <div className="header__right">
                <div className="header__icons">
                    <Home/>
                    <p>Home</p>
                </div>
                <div className="header__icons">
                    <People/>
                    <p>My Network</p>
                </div>
                <div className="header__icons">
                    <Work/>
                    <p>Jobs</p>
                </div>
                <div className="header__icons">
                    <Chat/>
                    <p>Messaging</p>
                </div>
                <div className="header__icons">
                    <Notifications/>
                    <p>Notifications</p>
                </div>
                <div className="header__icons">
                    <Avatar className="header__avatar"/>
                    <div className="header__workIcon">
                        <p>Me</p>
                        <ExpandMore fontSize="small" />
                    </div>
                </div>
                <div className="verticalLine"></div>
                <div className="header__icons header__work">
                    <ViewComfy/>
                    <div className="header__workIcon">
                        <p>Work</p>
                        <ExpandMore fontSize="small" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
