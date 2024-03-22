import React from 'react'

export default function Trailer() {
    return (
        <div className='trailer_section'>
            <h1 className='watch_trailer_h1'>
                Into to Instructor
            </h1>

            <div className='mx-3'>
                <iframe width='100%' className='iframe_video' height={409} src="https://www.youtube.com/embed/ddadwvdF8Cg" allowFullScreen />;
            </div>
        </div>
    )
}
