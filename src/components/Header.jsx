import { useState } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
export default Header = () => {
const [btnName, setBtn] = useState("Login");
const changeBtn = () => {
    btnName == "Login" ? setBtn("Logout"): setBtn("Login"); 
}   
const onlineStatus = useOnlineStatus();
    return (
        <div className="header">
            <div className="logo">
            <img className= "foodlogo" src={LOGO_URL} alt="applogo" />
            </div>
            <div className="nav-items">
                <ul >
                    <li>{onlineStatus? "online": "offline"}</li>
                    <li><Link style={{textDecoration:"none", color:"black"}}to = "/">Home</Link></li>
                    <li><Link style={{textDecoration:"none", color:"black"}}to = "/about">About Us</Link></li>
                    <li><Link style={{textDecoration:"none", color:"black"}}to = "/contact">Contact Us</Link></li>
                    <li><Link style={{textDecoration:"none", color:"black"}}>Cart </Link></li>
                    <li><Link style={{textDecoration:"none", color:"black"}}to = '/groceries'>Groceries </Link></li>
                    <button className="login" onClick={()=>changeBtn()}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

