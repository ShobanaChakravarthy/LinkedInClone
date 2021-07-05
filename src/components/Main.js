import React from 'react'
import LeftSideBar from './LeftSideBar'
import "./Main.css"
import MiddleBar from './MiddleBar'
import RightSideBar from './RightSideBar'

function Main() {
    return (
        <div className="main">
            {/* left sidebar */}
            <LeftSideBar/>
            {/* posts */}
            <MiddleBar/>
            {/* right sidebar */}
            <RightSideBar/>
        </div>
    )
}

export default Main
