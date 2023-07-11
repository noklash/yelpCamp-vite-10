import React from "react";
import Logo from './Assets/Logo.svg';
import Hamburger from './Assets/Hamburger.svg';
import './SearchPage.css';
import  "./Assets/Camp Images/Compressed Images/BuloySprings.jpg";

import Data from "./Data.json"


export default function SearchPage(props){

    const screen = props.screen

    const camps = Data.camps
    const displayCamps = camps.map((each)=>{
        return (
            <div className="card py-2 px-2 m-6 mx-auto" key={each.id}>
            <img
                className="img"
                src={each.compressedImage}
            />
            <h3 className="py-2 camp-name mt-1">{each.name}</h3>
            <p className="py-1">{each.description}</p>
            <button className="my-2 py-2 px-2 view-btn">View Campground</button>

        </div>
        )
    })
    return (
        <div className="search-page mx-3 my-6"> 
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

            <div className="welcome-box my-16  mx-4 p-4">
                    <div className="my-4">
                        <h2 className="welcome-text">Welcome to YelpCamp!</h2>
                        <p className="welcome-paragraph">View our hand-picked Campgrounds from all over the world or add your own</p>
                    </div>
                    <div>
                        <form className="formie">
                            <input
                                // onChange={}
                                name=""
                                type=""
                                placeholder="&#xF002; search for camps"
                                // this icon is not shhowing come back later
                                className=" inputt"
                            />

                            <button className="bg-black text-white btnn">search</button>
                            
                        </form>
                        <a href="#" className=" add-yours">Or add your own Campground</a>
                    </div>

                </div>


                {/* the camp component starts */}
                <div className=" campies">
                    {/* <div className="card py-2 px-2">
                        <img
                            className="img"
                            src={Test}
                        />
                        <h3 className="py-2 camp-name mt-1">Nihi Stream</h3>
                        <p className="py-1">Lorem ipsum delectants Buloy Springs isone of the most amazing places to be.</p>
                        <button className="my-2 py-2 px-2 view-btn">View Campground</button>

                    </div> */}

                        {displayCamps}
                </div>
            
        </div>
    )
}