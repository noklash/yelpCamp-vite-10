import React from "react";
import Logo from './Assets/Logo.svg';
import Hamburger from './Assets/Hamburger.svg';


export default function SearchPage(props){

    const screen = props.screen
    return (
        <div className="search-page m-4"> 
            <div className="flex nav">
                <div className="mr-auto flex">
                    <img src={Logo}/> 
                    {screen > 675 && <span className="nav-desk mx-3 py-2">Home</span>}
                </div>
                <div className="">
                    {screen < 675 && <img src={Hamburger}/>}
                    {screen > 675 && 
                    <div className="flex"> <span className="nav-desk mx-3 py-2">Login</span> <button className="bg-black text-white px-4 py-2">Create an account</button></div>
                    }
                </div>

            </div>
            
        </div>
    )
}