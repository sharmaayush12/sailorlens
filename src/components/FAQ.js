import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Backend_url } from './Config'

export default function FAQ() {

    const [FAQ, setFAQ] = useState(null);

    const GetFAQ = async () => {
        await axios.get(`${Backend_url}faq/get`)
            .then((res) => {
                setFAQ(res.data.faq)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        GetFAQ()
    }, [])
    return (
        <div className='faq_section'>
            <div className='text-center pt-5'>
                <h3>
                    Frequently Asked Questions
                </h3>
            </div>

            <div className='faq_wrapper mt-5'>
                {
                    FAQ != null
                        ?
                        FAQ.map((elem) => {
                            return (
                                <div className='accordion-item-wrapper v6 align-items-center'>
                                    <div className='d-flex flex-column'>
                                        <div class="accordion-header">
                                            <h3 class="accordion-title">{elem.question}</h3>
                                        </div>

                                        {/* <div class="acordion-body mt-2">
                                            <div class="accordion-spacer">
                                            </div>
                                            <p class="mg-bottom-0">Yes, this course is made up of pre-recorded video lessons by Sailor Lens.</p>
                                        </div> */}
                                    </div>

                                    <div>
                                        <i class="fa fa-plus-circle fa-2x" style={{ color: '#fff' }} aria-hidden="true"></i>
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
