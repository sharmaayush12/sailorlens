import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Backend_url } from './Config'
import { useNavigate } from 'react-router-dom'

export default function Hero_section() {

    const [data, setData] = useState(null);
    const navigation=useNavigate();

    const GetHomeData = () => {
        axios.get(`${Backend_url}home/get`)
            .then((res) => {
                setData(res.data.home)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        GetHomeData()
    }, [])
    return (
        <div className='hero_section'>
            <div className='hero_head'>
                <h1>
                    {
                        data != null
                            ?
                            data[0].title
                            :
                            null
                    }
                    <br />
                    <span className='text-color-red'>
                        All At Once
                    </span>
                </h1>

                <p className='line-height-180 mt-5'>
                    {
                        data != null
                            ?
                            data[0].description
                            :
                            null
                    }
                </p>

                <div className='d-flex justify-content-between cards_section'>
                    <div className='card-1'>
                        <i class="fa-brands fa-youtube mx-2"></i>
                        2.5 Hours of video content
                    </div>

                    <div className='card-1'>
                        <i class="fa-solid fa-list mx-2"></i>
                        4 Modules
                    </div>
                </div>

                <div className='mt-3' onClick={()=>{navigation("/signup")}}>
                    <button className='register_btn'>
                        Register Today
                    </button>
                </div>

                <div className='d-flex align-items-center justify-content-between mt-3'>
                    <div className='d-flex align-items-center'>
                        <div>
                            <img src={require('../Assets/subs.png')} />
                        </div>

                        <div class="hero_learners">
                            <div class="heading-style-h6-2">10,000+</div>
                            <div class="text-size-small">Happy Learners</div>
                        </div>
                    </div>

                    <div class="hero_reviews">
                        <div class="heading-style-h6-2">4.8+
                            <span class="text-size-small text-weight-normal">(600+ Ratings)</span>
                        </div>
                        <img src="https://assets-global.website-files.com/6455c5e84a23e4a53b5da193/645636d22beb50aa8da7dfe5_stars.png" loading="lazy" alt="" />

                    </div>
                </div>

            </div>
        </div>
    )
}
