import Header from "../Header/Header";
import "./FrontPage.css"
import Postview from "../PostView/postview"
import { useState, useEffect } from "react";
import axios from 'axios';
const API_KEY = process.env.REACT_APP_BASE_URL
const FrontPage = () => {
    const [userData, updateUserData] = useState([])
    useEffect(() => {
        async function fetchdata() {
            await axios.get(`${API_KEY}/posts`)
                .then(res => {
                    const data = res.data
                    updateUserData(data)
                }).catch(err => {
                    console.log("err", err);
                })
        }
        fetchdata()
    }, [])
    return (
        <>
            <Header />
            <div className="App">
                <div>
                    <div id='posts' >{userData.length ? userData.map((user) => <Postview key={user._id} userdata={user} />) : null}</div>
                </div>
            </div>

        </>

    )
}

export default FrontPage