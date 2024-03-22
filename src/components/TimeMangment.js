import React from 'react'
import Hero_section from './Hero_section'
import Trailer from './Trailer'
import AboutCourse from './AboutCourse'
import CourseModule from './CourseModule'
import Testimonial from './Testimonial'
import Timer from './Timer'
import FAQ from './FAQ'

export default function TimeMangment() {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 10000);
    return (
        <div className='time_mange'>
            <Hero_section />
            <Trailer />
            <AboutCourse />
            <CourseModule />
            <Testimonial/>
            <Timer expiryTimestamp={time}/>
            <FAQ/>
        </div>
    )
}
