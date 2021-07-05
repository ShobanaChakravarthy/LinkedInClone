import { ExpandMore, FiberManualRecord, Info } from '@material-ui/icons'
import React from 'react'
import "./RightSideBar.css"

function RightSideBar() {
    return (
        <div className="rightsidebar">
            <div className="rightsidebar__news">
                <p>LinkedIn News<span><Info/></span></p>
                <div className="rightsidebar__newsinfo">
                    <FiberManualRecord/>
                    <div className="rightsidebar__infopost">
                        <h4>New to LinkedIn? Hello there</h4>
                        <p>1d ago • 1,398 readers</p>
                    </div>
                </div>
                <div className="rightsidebar__newsinfo">
                    <FiberManualRecord/>
                    <div className="rightsidebar__infopost">
                        <h4>Meet Amazon's new boss!</h4>
                        <p>1d ago • 1,398 readers</p>
                    </div>
                </div>
                <div className="rightsidebar__newsinfo">
                    <FiberManualRecord/>
                    <div className="rightsidebar__infopost">
                        <h4>Massive NRIs rush to buy homes</h4>
                        <p>1d ago • 1,398 readers</p>
                    </div>
                </div>
                <div className="rightsidebar__newsinfo">
                    <FiberManualRecord/>
                    <div className="rightsidebar__infopost">
                        <h4>The Roles in demand in 2021</h4>
                        <p>1d ago • 1,398 readers</p>
                    </div>
                </div>
                <div className="rightsidebar__expandmore">
                    <h5>ShowMore</h5>
                    <ExpandMore/>
                </div>
            </div>
            <div className="rightsidebar__news">
                <p>Today's Most Viewed Courses<span><Info/></span></p>
                <div className="rightsidebar__newsinfo">
                    <FiberManualRecord/>
                    <div className="rightsidebar__infopost">
                        <h4>The Six Morning habits of high perform...</h4>
                        <p>1d ago • 1,398 readers</p>
                    </div>
                </div>
                <div className="rightsidebar__newsinfo">
                    <FiberManualRecord/>
                    <div className="rightsidebar__infopost">
                        <h4>Unconscious Bias</h4>
                        <p>1d ago • 1,398 readers</p>
                    </div>
                </div>
                <div className="rightsidebar__newsinfo">
                    <FiberManualRecord/>
                    <div className="rightsidebar__infopost">
                        <h4>Diversity,inclusion and belongings</h4>
                        <p>1d ago • 1,398 readers</p>
                    </div>
                </div>
                <h5 className="rightsidebar__h5">Show More on LinkedIn Learning</h5>
            </div>
            <div className="rightsidebar__footer">
                <center><p>About</p></center>
                <center><p>Accessibility</p></center>
                <center><p>Privacy & Terms</p></center>
                <center><p>Ad Choices</p></center>
                <center><p>Advertising</p></center>
                <center><p>Business Services</p></center>
                <center><p>Get the Linkedin App</p></center>
                <center><p>More</p></center>
                <center><p>Help Center</p></center>
                <div className="rightsidebar__copyright">
                    <img src="https://aerodynamicadvisory.com/wp-content/uploads/2020/06/Linkedin-Logo.png" alt=""/>
                    <h6>LinkedIn Corporation © 2021</h6>
                </div>
            </div>
        </div>
    )
}

export default RightSideBar
