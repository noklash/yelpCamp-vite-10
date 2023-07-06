import React from "react";
import Logo from "./Assets/Logo.svg";
import Hamburger from "./Assets/Hamburger.svg";
import "./AddCamp.css"


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
    //  console.log(formData)
    return(
        <div className="add-camp m-5">
            <div className="flex">
                <div className="mr-auto flex">
                    <img src={Logo} className=""/>
                    { screen > 674 && <span className="mx-4">Home</span>}
                </div>
                
              {screen < 675 && <img src={Hamburger}/>}  
                { screen > 674 && <div> <span className="name mx-4">Kenmild</span> <span>Logout</span> </div> }
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
                        type=""
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