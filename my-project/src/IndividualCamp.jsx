import React from "react";
import Logo from './Assets/Logo.svg';
import Hamburger from './Assets/Hamburger.svg';
import Spring from "./Assets/Camp Images/High Quality Images/BuloySprings.jpg";
import "./IndividualCamp.css"
import ChatBubble from "./Assets/ChatBubble.svg";
import MapImg from "./Assets/Map.png";

// new
// import AddReview from "./AddReview";


export default function IndvidualCamp(props){
    
    

    const screen = props.screen
    const mode = props.mode
    return (
        <div className={mode ? "dark" : " "}>
            {/* added the top div to test dark mode */}
        <div className="individual-camp m-6 pb-8">
            {/* individual-camp m-6 pb-8 */}

                <div className="flex nav my-5">
                    <div className="mr-auto flex">
                        <img src={Logo}/> 
                        {screen > 675 && <span className="nav-desk mx-3 py-2 font-medium">Home</span>}
                    </div>
                    <div className="">
                        {screen < 675 && <img src={Hamburger}/>}
                        {screen > 675 && 
                        <div className="flex"> <span className="nav-desk mx-3 py-2 font-medium">Login</span> <button className="bg-black text-white px-4 py-2">Create an account</button></div>
                        }
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
                            <img src={Spring} className="py-4"/>
                            <div className="flex my-2">
                                <h2 className="mr-auto place">Mount Ulap</h2>
                                <span className="price name">$104.99/night</span>
                            </div>
                            <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda quisquam numquam nisi quo incidunt ipsum repellat mollitia sequi adipisci ea maiores, temporibus expedita harum cumque commodi est veritatis, quas eaque.</p>
                            <p className="submitted py-4">Submitted by Andrew Mike</p>
                        </div>

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

                        <button className="btn-review bg-black text-white flex px-3 py-2 mt-8"> <img src={ChatBubble} className="mr-2"/> Leave a Review </button>
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