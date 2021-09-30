import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './sidebar.css'

export default function SideBar() {
    const [cats, setCats] = useState([]);

    useEffect(()=>{
        const getCats = async () =>{
            const res = await axios.get("/categories");
            setCats(res.data)
        };
        getCats();
    },[]);
    return (
        <div className="sideBar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img 
                src = "https://lh3.googleusercontent.com/D3WsjGjW9zR-9pFBRGLFztCa_fFIFJZ7ySBwhnoSsapsYbtaaph0xUAUCLvB7d8HnGvfZMZMaJaSxPdvBkw8tVeNsVqLzAIhCFnXMCKwd2YAgwJUdGAOH6krlrjXyAHsHR3zG4v22U3abvF_YoARMLiAFxr4dsLyh1qxA2HnkcFynp7lVQlWcVPA_x0kqgKyUsLdn2yJm-al7Rrv4CdaxHgV2RN1WApx5k8OUqN91LN5Jp2ohR6izj9Iv1HTXPKbbT6JjzG8L5pJr_eGN7kX6J5xIEDMQWOqWG1o3otNLQayVni-ai1b8EimK_gfWMlFfnd6prUBZtOhzAnuEjSCLKspxmZrWx6SIvwNVW_7w34C3RT6bxLxi4cWvcw0TjVN2twQkjP__xzVOvKSfwmT-qK6VqjA5T4-dtXx48nMXLbTt3YSlrTU_SWAY1XqFfuV9_FcjBuFtKZWWjAV3pg3mjSrmCl6ezVBk4lqXjkX95wCU2W1FPgAmkUKKtSPpSaacayuMeQwWYf1xeaZBf4rGqTENrZatr22BdBTF-Bwx-EpyJ1tdPAo_Zd7VRwqovQ89IbVGN-7R5p6P_CIpYHlJeFCjQNT4AFipCs4ut3Relm7VM_zBwEgqOMiqJNN-ys6xsfuKHCxqOxTpxl02gmQEpZwqS9izfUn9lhMjzLjTCqiaslOVXoScS2GcfM81YgrKfPH9cWa08TyYLk-FRkM0kM1ZQ=w400-h396-no?authuser=0" 
                alt="picture"
                />
                <p>Hi i'm swikriti. I'm a swoftware engineer. I love reding books and learning new things!</p>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                { cats.map((c) => (
                    <Link to={`/?cat=${c.name}`} className="link">
                        <li className="sidebarListItem">{c.name}</li>
                    </Link>
                ))}
            </ul>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-linkedin"></i>
                <i className="sidebarIcon fab fa-instagram-square"></i>
                <i className="sidebarIcon fab fa-facebook-square"></i>
                <i className="sidebarIcon fab fa-pinterest-square"></i>
            </div>
            </div>
        </div>
    )
}
