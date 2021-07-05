import React from 'react'
import "./MiddleBar.css"
import Posts from './Posts'
import UploadPost from './UploadPost'

function MiddleBar() {
    return (
        <div className="middlebar">
            <UploadPost/>
            <Posts
                avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/%E2%80%98LG_Q7_BTS_%EC%97%90%EB%94%94%EC%85%98%E2%80%99_%EC%98%88%EC%95%BD_%ED%8C%90%EB%A7%A4_%EC%8B%9C%EC%9E%91_%2842773472410%29_%28cropped%29.jpg/280px-%E2%80%98LG_Q7_BTS_%EC%97%90%EB%94%94%EC%85%98%E2%80%99_%EC%98%88%EC%95%BD_%ED%8C%90%EB%A7%A4_%EC%8B%9C%EC%9E%91_%2842773472410%29_%28cropped%29.jpg"
                username="BigHit Entertainment"
                description="KPop Boy Band"
                time="1h"
                caption="BTS Life Goes On"
                video="https://www.youtube.com/watch?v=-5q5mZbe3V8"
                noOfLikes = "4"
                noOfcomments = "10"
            />
            <Posts
                avatar="https://lh3.googleusercontent.com/ogw/ADGmqu-SU7EwK0UpoGiqfh7PPHBKzxMP4qlVTBKzyxXf=s32-c-mo"
                username="Shobana"
                description="Frontend Developer"
                time="1h"
                post="When your first cry makes your parents smile,When you try and fail but never give up,When your absence in a forum is felt"
                noOfLikes = "4"
                noOfcomments = "10"
            />
            <Posts
                avatar="https://lh3.googleusercontent.com/ogw/ADGmqu-SU7EwK0UpoGiqfh7PPHBKzxMP4qlVTBKzyxXf=s32-c-mo"
                username="Shobana"
                description="Frontend Developer"
                time="1h"
                caption="Chilling adventures"
                postImage="https://media-exp1.licdn.com/dms/image/C4D22AQEPK5NuUva-hw/feedshare-shrink_1280/0/1612427270176?e=1615420800&v=beta&t=LjJKxWj4ZHcCYl-V5uIx92aPaviLoFEIuKfy08_-RXY"
                post="When your first cry makes your parents smile,When you try and fail but never give up,When your absence in a forum is felt"
                noOfLikes = "4"
                noOfcomments = "10"
            />
            <Posts
                avatar="https://media-exp1.licdn.com/dms/image/C4D0BAQHUcu98SZ2TVw/company-logo_100_100/0/1607665771371?e=1620864000&v=beta&t=VE2MIDWVBLeDol1aJD2GFKFy0b9ROB-AY0AZq1vmY78"
                username="Tesla"
                description="7,642,114"
                time="8h"
                caption="Stamping Model Y body parts"
                video = "https://www.youtube.com/watch?v=wySJb1uxUg0"
                noOfLikes = "0"
                noOfcomments = "0"
            />
        </div>
    )
}

export default MiddleBar
