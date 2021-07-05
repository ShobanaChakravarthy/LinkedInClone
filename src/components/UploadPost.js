import { Edit, Event, Notes, Photo, YouTube } from '@material-ui/icons'
import React from 'react'
import "./UploadPost.css"

function UploadPost() {
    return (
        <div className="uploadpost">
            <div className="uploadpost__search">
                <Edit/>
                <input type="text" placeholder="Start a Post"/>
            </div>
            <div className="uploadpost__icons">
                <p><Photo/> Photo</p>
                <p><YouTube/> Video</p>
                <p><Event/> Event</p>
                <p><Notes/> Write Article</p>
            </div>
        </div>
    )
}

export default UploadPost
