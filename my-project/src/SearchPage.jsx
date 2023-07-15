import React from "react";
import Logo from './Assets/Logo.svg';
import Hamburger from './Assets/Hamburger.svg';
import './SearchPage.css';
import  "./Assets/Camp Images/Compressed Images/BuloySprings.jpg";

// import Data from "./Data.json"
import { Link, Outlet } from "react-router-dom"


export default function SearchPage(props, {change}){
    
    const screen = props.screen
    const camps = props.Data.camps
    const [value, setNewValue] = React.useState(0)

    function handleChange(event) {
        let value = event.target.value
        setNewValue(value)
        change(value)
    }
    
    const displayCamps = camps.map((each)=>{

        return (
            <div className="card py-2 px-2 m-6 mx-auto" key={each.id}>
            <img
                className="img"
                src={each.compressedImage}
            />
            <h3 className="py-2 camp-name mt-1">{each.name}</h3>
            <p className="py-1">{each.description}</p>
            <Link to="../:IndividualCampId"><button className="my-2 py-2 px-2 view-btn" onClick={handleChange}>View Campground</button></Link>
            {/* something new is up , it was individualCamp check that button onlick you gotta do something */}
        </div>
        )
    })

    

    
    return (
        <div className="search-page mx-3 my-6"> 
            <div className="flex nav my-5">
                <div className="mr-auto flex">
                    <img src={Logo}/> 
                    {screen > 675 &&  <span className="nav-desk mx-3 py-2 font-medium"><Link to="/">Home</Link></span> }
                </div>
                <div className="">
                    {screen < 675 && <img src={Hamburger}/>}
                    {screen > 675 && 
                    <div className="flex"> <span className="nav-desk mx-3 py-2 font-medium"><Link to="../SignIn">Login </Link></span> <button className="bg-black text-white px-4 py-2"> <Link to="../SignUp">Create an account</Link></button></div>
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
                        <Link to="../AddCamp" className=" add-yours">Or add your own Campground</Link>
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
                     {/* <Outlet context={[camps]}/> */}
        </div>
        
    )
}