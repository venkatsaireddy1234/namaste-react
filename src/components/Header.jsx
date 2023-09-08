import { LOGO_URL } from "../utils/constants"

export default Header = () => {
    return (
        <div className="header">
            <div className="logo">
            <img className= "foodlogo" src={LOGO_URL} alt="applogo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

