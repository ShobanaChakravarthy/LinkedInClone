import React from 'react'
import "./Login.css"

function Login() {
    return (
        <div className="login">
            <img src="https://aerodynamicadvisory.com/wp-content/uploads/2020/06/Linkedin-Logo.png" alt="linkedin logo"/>
            <h2>Make the Most of your Professional Life</h2>
            <div className="login__form">
                <label>Email</label>
                <input type="text"/>
                <label>Password (6 or more characters)</label>
                <input type="text"/>
                <p>By Clicking Agree & Join, you agree to the LinkedIn <span>User</span></p>
                <p><span>Agreement Privacy Policy</span> and <span>Cookie Policy</span></p>
                <button>Agree & Join</button>
                <p>---------------or-----------</p>
                <button>Join with Google </button>
                <p>Already on LinkedIn? <span>Sign In</span></p>
            </div>
        </div>
    )
}

export default Login
