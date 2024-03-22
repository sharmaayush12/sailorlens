import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Backend_url } from './Config';
import { useNavigate } from 'react-router-dom';


export default function CoursePage() {
  const [Modules, setModules] = useState(null);
  const navigation=useNavigate();

  const GetModule = () => {
    axios.get(`${Backend_url}course/AllModule`)
      .then((res) => {
        setModules(res.data.coursesModule)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    GetModule();
  }, [])

  return (
    <div style={{ paddingTop: '180px' }}>
      <div class="row justify-content-center">
        {
          Modules != null
            ?
            Modules.map((elem) => {
              return (
                <div class="col-lg-4 col-md-6 col-sm-12">
                  <div class="card2" onClick={()=>{navigation("/Video",{state:{videoName:elem.ModuleName}})}}>
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
      </div>
    </div>
  )
}
