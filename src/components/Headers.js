import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Upperhead from './Upper_Head'

export default function Headers() {

    const location = useLocation();

    const [navSize, setnavSize] = useState("10rem");
    const [navColor, setnavColor] = useState("transparent");

    const navigation = useNavigate();

    const listenScrollEvent = () => {
        window.scrollY > 10 ? setnavColor("#000") : setnavColor("transparent");
        window.scrollY > 10 ? setnavSize("5rem") : setnavSize("10rem");
    };

    const LogOut = () => {
        localStorage.removeItem("Sailor_Mobile");
        window.location.reload('/')
    }
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, [])
    return (
        <>

            <div className='main_header' style={{
                backgroundColor: navColor
            }}>
                <div style={{ background: "#97532e" }}>
                    <Upperhead />
                </div>
                <div>
                    <div className='nav_wrapper'>
                        <div className='d-flex align-items-center justify-content-between header'>
                            <div>
                                <img src={require('../Assets/Logo.png')} className='logo' />
                            </div>

                            <div className='d-flex align-items-center justify-content-between header_links px-5'>

                                <Link to="/" className={location.pathname == "/" ? 'underline' : null}>
                                    Nutical Knowledge Course
                                </Link>


                                {
                                    localStorage.getItem("Sailor_Mobile")
                                        ?
                                        <Link to="/Coursepage" className={location.pathname == "/Coursepage" ? 'underline' : null}>
                                            Course
                                        </Link>
                                        :
                                        null
                                }


                                {
                                    localStorage.getItem("Sailor_Mobile")
                                        ?
                                        <button onClick={() => { LogOut() }} className='login_btn'>
                                            Log Out
                                        </button>
                                        :
                                        <button onClick={() => { navigation('/Login') }} className='login_btn'>
                                            Login
                                        </button>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
