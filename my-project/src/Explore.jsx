import React from "react";
import Logo from './Assets/Logo.svg';
import MobileImg from "./Assets/HeroImageMobile.jpg";
import DesktopHero from "./Assets/HeroImage.jpg";
import CheckMark from "./Assets/checkmark.svg"
import Airbnb from "./Assets/Airbnb.svg";
import Booking from "./Assets/Booking.svg";
import PlumGuide from "./assets/PlumGuide.svg";

// new test
// import { Link } from "react-router-dom"


import "./Explore.css"

export default function Explore(props){
    const screen = props.screen
// new 
    // const history = useHistory();
    // const search = () => {
    //     history.push("/SearchPage")
    // }

    // e no work
    return (
        <div className="explore">
            <div className="logo-box p-3">
                <img src={Logo}/>
                
            </div>
            { screen < 765 && <div>
               <div>
                    <img src={MobileImg} />
               </div>
               <div className="p-6">
                    <h3 className="header">Explore the best camps on earth</h3>
                    <p className="description">YelpCamp is a curated list of the best camping spots on Earth. Unfiltered and unbiased reviews.</p>
                    <div className="flex py-2">
                        <img src={CheckMark}/>
                       <span className="px-3">Add your own camp suggestions.</span> 
                    </div> 
                    <div className="flex py-2">
                        <img src={CheckMark}/>
                       <span className="px-3 pt-1">Leave reviews and experiences.</span> 
                    </div>
                    <div className="flex pt-2 pb-3">
                        <img src={CheckMark}/>
                       <span className="px-3">See locations for all camps.</span> 
                    </div>
                    {/* <button className="btn" onClick={}>View campgrounds</button> */}
                    <div className="my-3"><button className="btn" >View campgrounds</button></div>
                    <div>
                        <h5>Partnered with:</h5>
                        <div className="flex px-2">
                            <img src={Airbnb} className="sponsor"/>
                            <img src={Booking} className="sponsor"/>
                            <img src={PlumGuide} className="sponsor"/>
                        </div>
                    </div>
               </div>
            </div>} 

            {screen > 764 && 
                <div className="flex">
                        <div className="py-14 px-9 m-6">
                        <h3 className="header">Explore the best camps on earth</h3>
                        <p className="description">YelpCamp is a curated list of the best camping spots on Earth. Unfiltered and unbiased reviews.</p>
                        <div className="flex py-2">
                            <img src={CheckMark}/>
                           <span className="px-3">Add your own camp suggestions.</span> 
                        </div> 
                        <div className="flex py-2">
                            <img src={CheckMark}/>
                           <span className="px-3 pt-1">Leave reviews and experiences.</span> 
                        </div>
                        <div className="flex pt-2 pb-3">
                            <img src={CheckMark}/>
                           <span className="px-3">See locations for all camps.</span> 
                        </div>
                        {/* anchor link is new */}

                        {/* <button className="btn">View campgrounds</button> */}
                        <div className="my-3"> <button className="btn">View campgrounds</button> </div>
                        <div>
                            <h5>Partnered with:</h5>
                            <div className="flex px-2">
                                <img src={Airbnb} className="sponsor"/>
                                <img src={Booking} className="sponsor"/>
                                <img src={PlumGuide} className="sponsor"/>
                            </div>
                        </div>
                   </div>
                    <div>
                        <img src={DesktopHero} className="desktop"/>
                    </div>
                </div>
            }
        </div>
    )
}
