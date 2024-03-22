import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import { Backend_url } from './Config';

export default function VideosPage() {
    const location = useLocation();

    const [ModuleDetails, setModuleDetails] = useState(null);

    const GetModuleByName = () => {
        axios.post(`${Backend_url}course/getModule`, {
            ModuleName: location.state.videoName
        })
            .then((res) => {
                setModuleDetails(res.data.coursesModule)
                // setIsModalOpen(true)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        GetModuleByName()
    }, [])
    return (
        <div style={{ paddingTop: '180px' }}>
            <div className='video_player'>
                <ReactPlayer
                    width="1024"
                    height={"100%"}
                    url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />
            </div>

            <h3 className='mt-5'>
                {
                    ModuleDetails != null
                        ?
                        ModuleDetails[0].ModuleName
                        :
                        null
                }
            </h3>

            <p className='mt-3'>
                {
                    ModuleDetails != null
                        ?
                        ModuleDetails[0].description
                        :
                        null
                }
            </p>
        </div>
    )
}
