import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Backend_url } from './Config';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [loginType, setLoginType] = useState('Phone');
    const [Mobile, setMobile] = useState('');

    const [OTP, setOTP] = useState();

    const [ShowOTP, setShowOTP] = useState(false);

    const navigate = useNavigate();

    const getUser = () => {
        if (Mobile == "") {
            message.error("Enter Mobile Number")
        }
        else {
            axios.get(`${Backend_url}user/profile/${Mobile}`)
                .then((res) => {
                    if (res.data.user == null) {
                        message.error("Please Register")
                        // navigate("/signup")
                    }
                    else {
                        SendOTP()
                    }
                })
                .catch((err) => {
                    message.error("Please Register")
                    console.log(err)
                })
        }
    }

    const SendOTP = () => {
        axios.post(`${Backend_url}mobile/send-otp`, {
            to: "+91" + Mobile
        })
            .then((res) => {
                setShowOTP(true);
                message.success("OTP Sent");
            })
            .catch((err) => {
                message.error("There is some error please try again later")
                console.log(err)
            })
    }

    const VerifyOTP = () => {
        axios.post(`${Backend_url}mobile/verify-otp`, {
            phoneNumber: '+91' + Mobile,
            otp: OTP
        })
            .then((res) => {
                message.success("OTP Verified");
                localStorage.setItem("Sailor_Mobile", Mobile)
                navigate("/Coursepage")
            })
            .catch((err) => {
                console.log()
            })
    }

    return (
        <div className='wlLoginv1Wrapper'>
            <div className='wlLoginCardContainer'>
                <div className='login_box'>
                    <div className='loginv1Header'>
                        <h1 className="loginv1HeaderTitle">Continue to use Sailor Lens Academy</h1>
                        <h2 className="loginv1HeaderSubTitle">Welcome back! Please enter your details.</h2>
                    </div>
                    <div className="ant-form ant-form-vertical loginv1Form">
                        <div className="ant-row ant-form-item">
                            <div className="ant-col ant-form-item-control">
                                <div className="ant-form-item-control-input">
                                    <div className="ant-form-item-control-input-content">
                                        <span className="ant-input-affix-wrapper loginInputPrefix">
                                            <span className="ant-input-prefix">
                                                {
                                                    loginType == "Phone"
                                                        ?
                                                        <div>
                                                            <img src={require('../Assets/india.png')} alt="India" width="26px" />+91
                                                        </div>
                                                        :
                                                        null
                                                }
                                            </span>
                                            {
                                                loginType == "Phone"
                                                    ?
                                                    < input placeholder="Enter mobile" onChange={(e) => { setMobile(e.target.value) }} className="ant-input" id="mobile" type="text" />
                                                    :
                                                    < input placeholder="Enter Email" className="ant-input" id="mobile" type="text" value="" />
                                            }
                                        </span>

                                        {
                                            ShowOTP
                                                ?
                                                <span className="ant-input-affix-wrapper loginInputPrefix mt-3">
                                                    < input placeholder="Enter OTP" onChange={(e) => { setOTP(e.target.value) }} className="ant-input" id="mobile" type="text" />
                                                </span>
                                                :
                                                null
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="submit" onClick={() => { getUser() }} className="ant-btn ant-btn-primary ant-btn-block loginv1FormSubmitBtn">
                            <span>Request OTP</span>
                        </button>

                        {
                            ShowOTP
                                ?
                                <button type="submit" onClick={() => { VerifyOTP() }} className="ant-btn ant-btn-primary ant-btn-block loginv1FormSubmitBtn">
                                    <span>VerifyOTP OTP</span>
                                </button>
                                :
                                null
                        }
                    </div>

                    <p className='login_other'>
                        OR,
                        {
                            loginType == "Phone"
                                ?
                                <button className='email_login' onClick={() => { setLoginType('Email') }}>Login using Email</button>
                                :
                                <button className='email_login' onClick={() => { setLoginType('Phone') }}>Login using Phone</button>
                        }
                    </p>

                    <p className='login_other'>
                        <button className='email_login' onClick={() => { navigate("/signup") }}>Register</button>
                    </p>
                </div>
            </div>
        </div>
    )
}
