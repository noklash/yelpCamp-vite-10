import React from "react";
import Logo from '/Assets/Logo.svg';
import Hamburger from '/Assets/Hamburger.svg';
import './SearchPage.css';
import  "./Assets/Camp Images/Compressed Images/BuloySprings.jpg";
import closeBtn from "/Assets/Close.svg";

// import Data from "./Data.json"
import { Link } from "react-router-dom"


export default function SearchPage(props){
    
    const screen = props.screen
    const camps = props.Data.camps
    const [search, setSearch] = React.useState('')
    // console.log(search)
    
    
    const displayCamps = camps.filter((each) =>{
        return search.toLowerCase === '' ? each : each.name.toLowerCase().includes(search)
        // this is for the search results
    }).map((each)=>{

        return (
            <div className="card py-2 px-2 m-6 mx-auto" key={each.id}>
            <img
                className="img"
                src={each.compressedImage}
            />
            <h3 className="py-2 camp-name mt-1 px-2">{each.name}</h3>
            <p className="py-1 px-2">{each.description}</p>
            <Link to={`../${each.id}`} className="mx-6"><button className="view-btn my-4 py-2 hover:bg-black hover:text-white">View Campground</button></Link>
            {/* <div className="my-2 mx-auto py-2 px-2 view-btn "></div> */}
            
        </div>
        )
    })
// for mobile nav

function closeNav(){
    document.getElementById("mobileNav").style.width = "0%"
}

function openNav(){
    document.getElementById("mobileNav").style.width = "100%"
}
    

    
    return (
        <div className="search-page mx-3 my-6"> 
            <div className="flex nav my-5">
                <div className="mr-auto flex">
                    <img src={Logo}/> 
                    {screen > 675 &&  <span className="nav-desk mx-3 py-2 font-medium"><Link to="/">Home</Link></span> }
                </div>
                <div className="">
                    {screen < 675 && <img src={Hamburger} onClick={openNav}/>}
                    {screen > 675 && 
                    <div className="flex"> <span className="nav-desk mx-3 py-2 font-medium"><Link to="../SignIn">Login </Link></span> <button className="bg-black text-white px-4 py-2"> <Link to="../SignUp">Create an account</Link></button></div>
                    }


                    {/* something new */}

                    <div className="overlay flex py-6 bg-white" id="mobileNav">
                    <div className="mr-auto ml-6 p-1"><img className="closebtn" src={closeBtn} onClick={closeNav}/></div>
                    <ul className="flex text-black mx-8">
                        <li className="mx-4"> <Link to="/">Home</Link></li>
                        <li className="mx-4"> <Link to="../SignIn">Login </Link></li>
                        <li className="mx-4"> <button className="bg-black text-white px-4 py-1"> <Link to="../SignUp">Create account</Link></button></li>
                        {/* <li className="mx-4"> <a href="#">contact</a></li> */}
                    </ul>
                </div>
                    {/* new ends */}
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
                                onChange={(e)=> setSearch(e.target.value)}
                                // this checks for the latest input
                                name=""
                                type=""
                                placeholder="&#xF002; search for camps"
                                // this icon is not shhowing come back later
                                className=" inputt mx-auto px-8"
                            />

                            {/* <button className="bg-black text-white btnn">search</button> */}
                            
                        </form>
                        <Link to="../AddCamp" className=" add-yours">Or add your own Campground</Link>
                    </div>

                </div>

                {/* the camp component starts */}
                <div className=" campies">

                        {displayCamps}
                </div>
        </div>
        
    )
}