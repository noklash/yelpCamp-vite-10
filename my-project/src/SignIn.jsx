
import React from "react";
import Logo from "./Assets/Logo.svg";
import Testimonial from "./Assets/UserTestimonial.svg";
import "./SignUp.css";

import { Link } from "react-router-dom";




export default function SignIn(props){
    const screen = props.screen
    const [formData, setFormData] = React.useState(
        {
            username: "",
            password: ""
        }
    )

    function handleChange(event){
        const {name, value} = event.target
        setFormData(prev => {
            return {
                ...prev,
                [name]:value
                
            }
        })
    }
    // console.log(formData.username)
    return(
        <div className="sign-up ">
            <div className="form-side">
                <div className="top flex  my-4">
                    <div className="logo-box mr-auto">
                        <img src={Logo} alt="logo " className="px-4"/>
                    </div>
                    <div>
                        {/* <img src={}/> */}
                        <Link to="../SearchPage"><span className="back">Back to campgrounds</span></Link>
                    </div>
                </div>
                <div className="mx-8 my-6">
                    <h3 className="header-signUp my-4">Start exploring camps from all around the world.</h3>
                </div>
                <form className="mx-8">
                    {/* <div className="form"> */}
                    <label>Username</label>
                    <input
                        type="text"
                        name="username" 
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="ken_mild1"
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter Password"
                    />
                    <button>Sign In</button>
                    {/* </div> */}
                    
                </form>
                    <p className="mx-8 my-4">Not a user? <Link to="../SignUp" className="sign-in">Sign Up</Link></p>
            </div>
            <div className="testimonial">
                <p>"YelpCamp has honestly saved me hours of reasearch and time, and the camps on here are definitely 
                    well picked and added ".</p>
                <div className="flex"><img src={Testimonial} className="py-3 px-1"/><span className="p-3 test-name"> <b>May Andrew </b><span className="bloc">Professional Hiker</span></span></div>
            </div>
            

        </div>
    )
}