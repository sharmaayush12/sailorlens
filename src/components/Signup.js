import React, { useState } from 'react'
import { Backend_url } from './Config';
import axios from 'axios';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';


export default function Signup() {

    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Mobile, setMobile] = useState('');
    const navigation = useNavigate();


    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }

    const Signup = () => {
        axios.post(`${Backend_url}user/register`, {
            name: Name,
            email_id: Email,
            mobile: Mobile
        })
        .then((res)=>{
            console.log(res)
            localStorage.setItem("Sailor_Mobile",Mobile)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    async function showRazorpay() {
        const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

        if (Name == "") {
            message.error("Enter Name")
        }
        else if (Email == "" || emailRegex.test(Email) == false) {
            message.error("Enter Valid Email")
        }
        else if (Mobile == "" || Mobile.length > 10) {
            message.error("Enter Valid Mobile Number")
        }
        else {
            const res = await loadScript(
                "https://checkout.razorpay.com/v1/checkout.js"
            );

            const data = axios.post(`${Backend_url}payment/initiate`, {
                amount: "4799.00",
                currency: "INR",
                receipt: "order-001",
                customer_name: Name,
                email: Email,
                product_id: "Course_1",
                mobile: Mobile
            })
                .then((res) => {
                    console.log(res)
                    const options = {
                        key: "rzp_test_hwUjFy8AB6TrHd",
                        currency: res.data.payment.currency,
                        amount: res.data.payment.amount,
                        order_id: res.data.payment.id,
                        name: Name,
                        description: "",
                        image: "https://sailorlens.project-tester.cloud/static/media/Logo.d63dc4da70fc7e6cc398.png",
                        handler: function (response) {
                            axios.post(`${Backend_url}payment/callback`, {
                                payment_id: response.razorpay_payment_id,
                                razorpay_order_id: response.razorpay_order_id,
                                razorpay_signature: response.razorpay_signature
                            }).then((res) => {
                                message.success("Payment done");
                                Signup();
                                navigation("/CoursePage")
                            })
                                .catch((err) => {
                                    console.log(err)
                                })
                        },
                        prefill: {
                            name: Name,
                            email: Email,
                            contact: Mobile,
                        },
                    };

                    const paymentObject = new window.Razorpay(options);
                    paymentObject.open();
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    return (
        <div className='d-flex signup_section'>
            <div className='w-50 p-5'>
                <h1 className='head_signup'>
                    How to do a Million Things All At Once
                </h1>

                <p className='author_name'>
                    by
                    <span className='mx-2'>
                        Arpit Gupta
                    </span>
                </p>

                <p className='price'>
                    ₹4799
                </p>

                <div className='d-flex flex-column'>
                    <div className='banner_section'>
                        <img src={require('../Assets/2.jpg')} />
                    </div>

                    <p className='mt-3'>
                        <strong className='course_details'>
                            Pre-recorded Course | 36 lessons | 2.5 Hours of Content | Lifetime Access | Watch it any time, as many times
                        </strong>
                        <br />
                        <br />
                        Become a Master of Time Management and Productivity. Learn from me as I teach you how to plan your day, track your time, achieve your goals and live your dream life!
                    </p>

                    <p className='mt-3'><em>Please note : Payments are processed &amp; handled by Tagmango using multiple payment gateways. Also, for people living in Canada and Australia, please note that this amount is in US Dollars.</em></p>
                </div>
            </div>

            <div className='signup_forms'>
                <div className='pb-5'>
                    <h1>
                        Payments Details
                    </h1>

                    <p className='signup_sub_head'>
                        Complete your purchase by providing your payment details.
                    </p>
                </div>

                <div className='d-flex flex-column billing_section'>
                    <p>
                        Billing informations
                    </p>

                    <input type='text' onChange={(e) => { setName(e.target.value) }} placeholder='Enter Name' className='first_input' />

                    <input type='text' onChange={(e) => { setEmail(e.target.value) }} placeholder='Enter Email' />

                    <span className="ant-input-affix-wrapper loginInputPrefix align-items-center d-flex last_input">
                        <span className="ant-input-prefix">
                            <div>
                                <img src={require('../Assets/india.png')} alt="India" width="26px" />+91
                            </div>
                        </span>

                        <input placeholder="Enter mobile" onChange={(e) => { setMobile(e.target.value) }} className="ant-input " id="mobile" type="text" />
                    </span>
                </div>

                <div className='coupon_section'>
                    <div>
                        <span className='mx-3'>
                            <i class="fa-solid fa-percent"></i>
                        </span>

                        Have a Coupon?
                    </div>

                    <button className='coupon_add_btn'>
                        <i class="fa fa-plus" aria-hidden="true"></i>
                    </button>
                </div>

                <div className='bill_summary'>
                    <div className='d-flex align-items-center justify-content-between service_sections'>
                        <div>
                            <p>
                                Service
                            </p>
                            <span>
                                How to do a Million Things All At Once
                            </span>
                        </div>

                        <div>
                            ₹4799
                        </div>
                    </div>

                    <div className='d-flex justify-content-between align-items-center'>
                        <span className='total_amount'>
                            Amount to be paid :
                        </span>

                        <span className='total_amount'>
                            ₹4799.00
                        </span>
                    </div>
                </div>

                <div>
                    <button className='pay_btn' onClick={() => { showRazorpay() }}>
                        Proceed to pay ₹4799.00
                    </button>
                </div>

                <div className='d-flex justify-content-center mt-3'>
                    <img src={require('../Assets/payment.png')} />
                </div>
            </div>
        </div>
    )
}
