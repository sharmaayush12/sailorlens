import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Backend_url } from './Config'

export default function Courses() {

    const [CourseDetails, setCourseDetails] = useState(null);
    function GetCourse() {
        axios.get(`${Backend_url}course/get`)
            .then((res) => {
                setCourseDetails(res.data.courses[0])
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        GetCourse()
    }, [])
    return (
        <div>
            <div className='section_courses pb-5'>
                <div className='head1-courses pt-5'>COURSES</div>
                <div className='head2-courses'>BECOME SKILLED AT WHAT MATTERS</div>

                <div className='course_bg d-flex align-items-center mt-5'>

                    <div style={{ width: '50%' }}></div>

                    <div className='card_wrapper' style={{ color: "#fff" }}>
                        <div className='d-flex flex-column'>
                            <span className='course_head'>
                                {
                                    CourseDetails != null
                                        ?
                                        CourseDetails.heading
                                        :
                                        null
                                }
                            </span>

                            <span className='courses_card-heading'>
                                {
                                    CourseDetails != null
                                        ?
                                        CourseDetails.title
                                        :
                                        null
                                }
                            </span>

                            <p className='text-color-white-2'>
                                {
                                    CourseDetails != null
                                        ?
                                        CourseDetails.description
                                        :
                                        null
                                }
                            </p>

                            <ul>
                                {
                                    CourseDetails != null
                                        ?
                                        CourseDetails.points.map((elem) => {
                                            return (
                                                <li>
                                                   {elem}
                                                </li>
                                            )
                                        })
                                        :
                                        null
                                }
                            </ul>

                            <div>
                                <button className='started_btn'>
                                    Get Started
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}
