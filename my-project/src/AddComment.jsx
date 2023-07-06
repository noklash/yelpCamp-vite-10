import React from "react";

import Logo from "./Assets/Logo.svg";
import Hamburger from "./Assets/Hamburger.svg";
import Close from "./Assets/Close.svg";

export default function AddComment(props){

    const screen = props.screen
    const [formData, setFormData] = React.useState(
        {
            comment: ""
        }
    )

        // console.log(formData)
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
        // document.getElementById("mobileNav").style.width = "100vw"
        console.log('e dey show')
    }

    return (
        <div className="add-comment mx-5 mt-8 mb-4">
            <div className="flex">
                <div className="mr-auto flex">
                    <img src={Logo} className=""/>
                    { screen > 674 && <span className="mx-4">Home</span>}
                </div>
                
              {screen < 675 && <img src={Hamburger} onClick={openNav}/>}  
                { screen > 674 && <div> <span className="name mx-4">Kenmild</span> <span>Logout</span> </div> }
{/* start here */}
                {/* { screen < 675 && <div className="overlay flex  bg-white" id="mobileNav">
                    <div className="mr-auto ml-6 p-1"><img className="closebtn" src={Close} onClick={closeNav}/></div>
                    <ul className="flex text-black mx-8">
                        <li className="mx-4"> <a href="#">home</a></li>
                        <li className="mx-4"> <a href="#">shop</a></li>
                        <li className="mx-4"> <a href="#">about</a></li>
                        <li className="mx-4"> <a href="#">contact</a></li>
                    </ul>
                </div>}  */}
{/* stop here */}
            </div>
            <div className="heading mt-5 pt-8">
                <h3 className="header">Add New Comment</h3>
            </div>
            <div className="form-section mb-8 pt-10">
                <form>
                    <label className="my-4 description font-medium">Description</label>
                    <textarea
                        value={formData.description}
                        placeholder="this was the best holiday i ever had , spending time in nature and watching the sunrise ...."
                        onChange={handleChange}
                        name="comment"
                    />

                    <button className="btn">Post Comment</button>
                </form>

            </div>

            <div className="my-16">
                <img src={Logo} className=""/>
            </div>
            
        </div>
    )
}

