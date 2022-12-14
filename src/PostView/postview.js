import React from 'react';
import dots from "../images/dots.png"
import heart from "../images/heart.png"
import tele from "../images/tele.png"
import "./postview.css"
const Postview = (props) => {
    const { userdata } = props

    return (
        <>
            <section className='card-container'>
                <section className='name-container'>
                    <div className='name-location'>
                        <span><strong>{userdata?.author}</strong></span>
                        <span>{userdata?.location}</span>
                    </div>
                    <div className='dots-container'>
                        <img src={dots}/>
                    </div>
                </section>
                <section className='image-container'>
                    <img src={userdata?.postImage} alt={userdata?.desc} />            
                </section>
                <section>
                    <div className='like-container' >
                        <div>
                            <img className='logos' src={heart} alt="heart"/>
                            <img className='logos' src={tele} alt="tele"/>
                        </div>
                        <div className='date'>
                            {userdata?.date}
                        </div>
                    </div>
                    <div className='noOfLikes'>
                        {` ${userdata?.likes} likes` }
                    </div>
                    <div className='decription'>
                       <strong>{userdata?.desc}</strong>  
                    </div>
                </section>
            </section>
        </>
    )
}
export default Postview