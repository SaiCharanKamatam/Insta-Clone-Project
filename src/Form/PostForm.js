import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../Header/Header'
import "./PostForm.css"
const API_KEY = process.env.REACT_APP_BASE_URL
function PostForm() {
    const navigate = useNavigate()
   
    const submitbutton = async (e) => {
        e.preventDefault()
        const data = e.target
        const formData = new FormData(data)
        console.log(formData);
        try {
            await fetch(`${API_KEY}/createpost`, { method: "POST", body:formData })
                .then((res) => {
                    return res.json()
                }).then((data) => {
                    alert("Succesfully posted")
                    console.log(data);
                })
                .catch((err) => { console.log(err) })
                .finally(() => {
                    navigate("/posts")
                })

        } catch (error) {
           alert("error" , error.message)
        }

    }

    return (
        <div>
            <Header />
            <div className='form-holder'>
                <form onSubmit={(e)=>submitbutton(e)}>
                    <div className='file-desc' >
                        <input type={"file"}  name='file' placeholder="No File Choosen"  />
                    </div>
                    <div className="author-location">
                        <input type={"text"} name="author" placeholder="Author"  />
                        <input type={"text"} name="location" placeholder="Location" />
                    </div>
                    <div className='file-desc'>
                        <input type={"text"} name="desc" placeholder="Description"  />
                    </div>
                    <div>
                        <button type='submit' className='postButton' >Post</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PostForm