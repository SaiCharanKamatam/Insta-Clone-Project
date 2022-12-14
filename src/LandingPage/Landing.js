import { useNavigate } from "react-router-dom"
import front from "../images/front.png"
import "./Landing.css"
const Landing =()=>{
    const navigate = useNavigate()
    const navigateToFeed =()=>{
        navigate("/posts")
    }

    return(
        <div className="Landing" >
        <div className="landing-logo">
            <img src={front} alt = "front"/>
        </div>
        <div className="enter-btn">
            <div>10X Team 04 </div>
            <button className="button" onClick={navigateToFeed} >Enter</button>
        </div>
        </div>
    )
}
export default Landing