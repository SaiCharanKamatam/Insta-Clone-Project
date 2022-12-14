import React from 'react'
import photo from "../images/photo.jpg"
import icon from "../images/icon.svg"
import { NavLink} from "react-router-dom";

function Header() {
  return (
    <div>
       <header>
                <nav id="nav-bar">
                    <div className="logo-holder">
                        <img id="camera-logo" src={icon} alt="camera-logo" />
                        <h2 id="header">Instaclone</h2>
                    </div>
                  <NavLink to={"/createpost"} ><img id="camera-logo" src={photo} alt="camera-logo" /></NavLink>

                </nav>
            </header>
    </div>
  )
}

export default Header