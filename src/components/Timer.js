import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useTimer } from 'react-timer-hook';

export default function Timer({ expiryTimestamp }) {
    const {
        totalSeconds,
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

    const navigate=useNavigate()

    return (
        <div className='timer_box mx-5'>
            <h3>
                Become Merchant Navy officer
            </h3>

            <div className='d-flex align-items-center w-100 justify-content-center'>
                <p className='mx-2'>Discount Ending in</p>

                <div className='timer_countdown' style={{ fontSize: '60px',color:'#fff' }}>
                    <span>{days}</span> <span>{hours}</span> <span>{minutes}</span> <span>{seconds}</span>
                </div>

                <div className='mx-5'>
                    <button className='register_today' onClick={()=>{navigate('/signup')}}>
                        Register Today
                    </button>
                </div>
            </div>
        </div>
    )
}
