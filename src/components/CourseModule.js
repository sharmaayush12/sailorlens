import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'antd';
import axios from 'axios';
import { Backend_url } from './Config';
import ReactPlayer from 'react-player';
import PDFViewer from 'pdf-viewer-reactjs';

export default function CourseModule() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [Modules, setModules] = useState(null);
    const [ModulesDetails, setModuleDetails] = useState(null);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const GetModule = () => {
        axios.get(`${Backend_url}course/AllModule`)
            .then((res) => {
                setModules(res.data.coursesModule)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const GetModuleByName = (ModuleName) => {
        axios.post(`${Backend_url}course/getModule`, {
            ModuleName: ModuleName
        })
            .then((res) => {
                setModuleDetails(res.data.coursesModule)
                setIsModalOpen(true)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        GetModule()
    }, [])

    return (
        <>
            <div class="course_module">
                <div className='course_details'>
                    <h2>
                        Module
                    </h2>
                </div>
                <div class="row justify-content-center">
                    {
                        Modules != null
                            ?
                            Modules.map((elem) => {
                                return (
                                    <div class="col-lg-4 col-md-6 col-sm-12">
                                        <div class="card2" onClick={() => { GetModuleByName(elem.ModuleName) }}>
                                            <div class="overlay"></div>
                                            <div class="content">
                                                <h4>{elem.ModuleName}</h4>
                                            </div>
                                            <div class="fav">
                                                <i class="fa fa-video-camera mx-2" aria-hidden="true"></i>
                                                {
                                                    elem.status == "locked"
                                                        ?
                                                        <i class="fa fa-lock" aria-hidden="true"></i>
                                                        :
                                                        <i class="fa fa-unlock" aria-hidden="true"></i>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            :
                            null
                    }


                    {/* <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="card">
                            <div class="overlay"></div>
                            <div class="content">
                                <h4>Module 1</h4>
                            </div>
                            <div class="fav">
                                <i class="fa fa-video-camera mx-2" aria-hidden="true"></i>
                                <i class="fa fa-lock" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="card">
                            <div class="overlay"></div>
                            <div class="content">
                                <h4>Module 2</h4>
                            </div>
                            <div class="fav">
                                <i class="fa fa-video-camera mx-2" aria-hidden="true"></i>
                                <i class="fa fa-lock" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="card">
                            <div class="overlay"></div>
                            <div class="content">
                                <h4>Module 3</h4>
                            </div>
                            <div class="fav">
                                <i class="fa fa-video-camera mx-2" aria-hidden="true"></i>
                                <i class="fa fa-lock" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="card">
                            <div class="overlay"></div>
                            <div class="content">
                                <h4>Module 4</h4>
                            </div>
                            <div class="fav">
                                <i class="fa fa-video-camera mx-2" aria-hidden="true"></i>
                                <i class="fa fa-lock" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div> */}
                </div>

                <Modal footer={null} title={ModulesDetails != null ? ModulesDetails[0].ModuleName : "Title"} open={isModalOpen} onCancel={() => { setIsModalOpen(false); }}>
                    <div>
                        <div className='mt-5'>
                            {
                                ModulesDetails != null
                                    ?
                                    ModulesDetails[0].description
                                    :
                                    null
                            }
                        </div>

                        <div className='d-flex '>
                            <div className='Video_player'>
                                {
                                    ModulesDetails != null
                                        ?
                                        <img src={'https://sailor-lens.azurewebsites.net' + ModulesDetails[0].pdf} />
                                        :
                                        null
                                }
                                {/* <span className='subtitles'>
                                    Play Video
                                </span> */}
                            </div>

                            <div className='Video_player'>
                                {
                                    ModulesDetails != null
                                        ?
                                        <img src={'https://sailor-lens.azurewebsites.net' + ModulesDetails[0].pdf} />
                                        // console.log(`https://sailor-lens.azurewebsites.net${ModulesDetails[0].pdf}`)
                                        :
                                        null
                                }
                                {/* <span className='subtitles'>
                                    View PDF
                                </span> */}
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        </>
    )
}
