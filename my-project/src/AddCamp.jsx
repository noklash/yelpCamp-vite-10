import React from "react";
import Logo from "./Assets/Logo.svg";
import Hamburger from "./Assets/Hamburger.svg";
import "./AddCamp.css"

import { Link } from "react-router-dom"

import closeBtn from "./Assets/Close.svg";



export default function AddCamp(props){
    const screen = props.screen
    const [formData, setFormData] = React.useState(
        {
            campgroundName: "",
            price: "",
            image: "",
            description: ""
        }
    )

    function handleChange(event){
        const {name, value} = event.target 
        setFormData(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }


    function closeNav(){
        document.getElementById("mobileNav").style.width = "0%"
    }
    
    function openNav(){
        document.getElementById("mobileNav").style.width = "100%"
    }
    //  console.log(formData)
    return(
        <div className="add-camp m-5">
            <div className="flex">
                <div className="mr-auto flex">
                    <img src={Logo} className=""/>
                    { screen > 674 && <Link to="/"><span className="mx-4">Home</span></Link>}
                </div>
                
              {screen < 675 && <img src={Hamburger} onClick={openNav}/>}  
                { screen > 674 && <div> <span className="name mx-4">Kenmild</span> <span>Logout</span> </div> }

                <div className="overlay flex py-6 bg-white" id="mobileNav">
                    <div className="mr-auto ml-6 p-1"><img className="closebtn" src={closeBtn} onClick={closeNav}/></div>
                    <ul className="flex text-black mx-8">
                        <li className="mx-4"> <Link to="/">Home</Link></li>
                        <li className="mx-4"> <Link to="../SignIn">Login </Link></li>
                        <li className="mx-4"> <button className="bg-black text-white px-4 py-1"> <Link to="../SignUp">Create account</Link></button></li>
                        {/* <li className="mx-4"> <a href="#">contact</a></li> */}
                    </ul>
                </div>
            </div>
            <div className="heading my-5">
                <h3 className="header">Add New Campground</h3>
            </div>
            <div className="form-section">
                <form>
                    <label>Campground Name</label>
                    <input
                        type="text"
                        value={formData.campgroundName}
                        placeholder="Seven Sisters Waterfall"
                        onChange={handleChange}
                        name="campgroundName"
                    />
                    <label>Price</label>
                    <input
                        type="number"
                        value={formData.price}
                        placeholder="$149"
                        onChange={handleChange}
                        name="price"
                    />
                    <label>Image</label>
                    <input
                        type="file"
                        value={formData.image}
                        placeholder="www.google.com/image/waterfall.png"
                        onChange={handleChange}
                        name="image"
                    />
                    <label>Description</label>
                    <textarea
                        value={formData.description}
                        placeholder="The seven sisters is the best place to enjoy family camps for the summer,
                                     with a serene and natural environment......."
                        onChange={handleChange}
                        name="description"
                    />

                    <button className="btn">Add Campground</button>
                </form>

            </div>

            <div className="my-16">
                <img src={Logo} className=""/>
            </div>
            
        </div>
    )
}