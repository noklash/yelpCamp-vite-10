import React from "react";
import Logo from '/Assets/Logo.svg';
import Hamburger from '/Assets/Hamburger.svg';
import Spring from "/Assets/Camp Images/High Quality Images/BuloySprings.jpg";
import "./IndividualCamp.css"
import ChatBubble from "/Assets/ChatBubble.svg";
import MapImg from "/Assets/Map.png";
import Data from"./Data.json"
// new
// import AddReview from "./AddReview";
import { useParams } from "react-router-dom";
import { Outlet, useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";

import closeBtn from "/Assets/Close.svg";








// export  function CampInfo(){
//     const camps = Data.camps
//     const params = useParams()
//     const id = params.id
//     console.log(id)
//     const selected = camps.filter((camp)=> camp.id == id)
//     console.log(selected)
//     // 
//     return (
//         <div>

//         </div>
//     )
    
    
// }


   




export default function IndvidualCamp(props){
    const screen = props.screen
    const mode = props.mode
    
    // const comment = (data)=> data 
    
// new starts here

    const camps = Data.camps
    const params = useParams()
    const id = params.id
    // console.log(id)
    const selected = camps.filter((camp)=> camp.id === id)
    // use the filter to return an array of the matched input
    // console.log(selected)

    // new starts

    const [formData, setFormData] = React.useState(
        {
            comment: ""
        }
    )

        // console.log(formData.comment)
    function handleChange(event){
        const {name, value} = event.target 
        setFormData(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    function handleSubmit(e){
         e.preventDefault()
        //  if (formData.comment)
        //  setFormData("")
    }
//    for mobileNav

function closeNav(){
    document.getElementById("mobileNav").style.width = "0%"
}

function openNav(){
    document.getElementById("mobileNav").style.width = "100%"
}

    return (
        <div className={mode ? "dark" : " "}>
            {/* added the top div to test dark mode */}
        <div className="individual-camp m-6 pb-8">
            {/* individual-camp m-6 pb-8 */}

                <div className="flex nav my-5">
                    <div className="mr-auto flex">
                        <img src={Logo}/> 
                        {screen > 675 && <span className="nav-desk mx-3 py-2 font-medium"><Link to="/">Home</Link></span>}
                    </div>
                    <div className="">
                        {screen < 675 && <img src={Hamburger} onClick={openNav}/>}
                        {screen > 675 && 
                        <div className="flex"> <span className="nav-desk mx-3 py-2 font-medium"><Link to="../SignIn">Login </Link></span> <button className="bg-black text-white px-4 py-2"><Link to="../SignUp">Create an account</Link></button></div>
                        }

                    <div className="overlay flex py-6 bg-white" id="mobileNav">
                        <div className="mr-auto ml-6 p-1"><img className="closebtn" src={closeBtn} onClick={closeNav}/></div>
                        <ul className="flex text-black mx-8">
                            <li className="mx-4"> <Link to="/">Home</Link></li>
                            <li className="mx-4"> <Link to="../SignIn">Login </Link></li>
                            <li className="mx-4"> <button className="bg-black text-white px-4 py-1"> <Link to="../SignUp">Create account</Link></button></li>
                            
                        </ul>
                        </div>
                    </div>
                    
                </div>
                        {/* the whole camp details begins */}
                <div>
                    
                    <div className="mapAndDetails">
                    { screen > 875 && <div className="map  mr-auto p-4">
                        <img src={MapImg}/>
                    </div>}
                    {/* camp details starts */}
                        <div className="cardInd p-8">
                            <img src={selected[0].fullImage} className="py-4"/>
                            <div className="flex my-2">
                                <h2 className="mr-auto place">{selected[0].name}</h2>
                                <span className="price name">$104.99/night</span>
                            </div>
                            <p >{selected[0].description}</p>
                            <p className="submitted py-4">Submitted by Andrew Mike</p>
                        </div>

                        {/* <CampInfo/> */}

                        {/* camp details ends here */}

                    </div>
                    {/* mapAndDetails ends here */}
                    
                    {/* review starts */}
                    <div className="comments my-6 p-8">
                        <div className="flex my-2">
                            <h6 className="name mr-auto">Kenmild</h6>
                            <span className="time">12hr ago</span>
                        </div>
                        <p className="my-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat adipisci porro sit tempore eius molestiae .</p>
                        <hr className=""/>
                        {/* end of first. But this should be reusable */}

                        <div className="flex my-2">
                            <h6 className="name mr-auto">Noklash</h6>
                            <span className="time">1day ago</span>
                        </div>
                        <p className="my-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat adipisci porro sit tempore eius molestiae .</p>
                        <hr className=""/>

                        <div className="flex my-2">
                            <h6 className="name mr-auto">Sean Geezy</h6>
                            <span className="time">2days ago</span>
                        </div>
                        <p className="my-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat adipisci porro sit tempore eius molestiae .</p>
                        <hr className=""/>

                        <div className="flex my-2">
                            <h6 className="name mr-auto">mike</h6>
                            <span className="time"></span>
                        </div>
                        <p className="my-4">{formData.comment}</p>
                        <hr className=""/>

                        

                        {/* <Link to="AddComment"><button className="btn-review bg-black text-white flex px-3 py-2 mt-8"> <img src={ChatBubble} className="mr-2"/> Leave a Review </button></Link> */}
                    </div>

{/* new test starts here */}

            <div className="heading mt-5 pt-8">
                <h3 className="header">Add New Comment</h3>
            </div>
            <div className="form-section mb-8 pt-10">
                <form>
                    <label className="my-4 description font-medium">Description</label>
                    <textarea
                        value={formData.comment}
                        placeholder="this was the best holiday i ever had , spending time in nature and watching the sunrise ...."
                        onChange={handleChange}
                        name="comment"
                    />

                    <button className="btn" onClick={handleSubmit}>Post Comment</button>
                </form>

            </div>



                    {/* reviews ends here */}

                    { screen < 875 && <div className="map my-4 p-4">
                        <img src={MapImg}/>
                    </div>}
                    {/* map ends here */}
                    
                </div>
                {/* the whole camp details ends here */}

                <div className="mt-8">
                   <img src={Logo}/>
                </div>

        </div>
        </div>
        
        // darkmode div is the last
    )
}