import React from 'react'

export default function AboutCourse() {

    return (
        <div className='mx-3 mt-5'>
            <div className='row mx-0'>
                <div className='col-md-6'>
                    <div className='image_bg'>
                        <img src={require('../Assets/1.jpg')} className='Sailor_img' />
                    </div>
                </div>

                <div className='col-md-6 about_desc'>
                    <h3>
                        What is Merchnat Navy ?
                    </h3>

                    <p>
                        The merchant navy is a vital component of global trade, tasked with the transportation of goods across the vast expanses of the world's oceans. Unlike the Indian navy, which operates under governmental jurisdiction, the merchant navy predominantly functions within the private sector. Picture it as a fleet of commercial vessels sailing across the seas, connecting distant shores and facilitating international commerce.

                        Now, don't envision a typical 9 to 5 office job; life in the merchant navy is far from mundane. It's a dynamic, ever-changing environment where the sea becomes your office, and adventure lurks around every wave.
                    </p>
                </div>
            </div>

            <div className='row mx-0 mt-5'>
                <div className='col-md-7 about_desc'>
                    <h3>
                        What is Nautical Knowledge ?
                    </h3>

                    <p>
                        The nautical knowledge, often referred to as the backbone of international trade, offers lucrative career opportunities for individuals seeking adventure, challenges, and a life at sea. This comprehensive guide aims to provide aspiring seafarers with a step-by-step overview of how to embark on a rewarding journey in the Merchant Navy.
                    </p>
                </div>

                <div className='col-md-5'>
                    <div className='image_bg'>
                        <img src={require('../Assets/2.jpg')} className='Sailor_img2' />
                    </div>
                </div>
            </div>

            <div className='row mx-0 mb-4'>
                <div className='col-md-5'>
                    <div className='image_bg'>
                        <img src={require('../Assets/3.jpg')} className='Sailor_img2' />
                    </div>
                </div>

                <div className='col-md-7 about_desc'>
                    <h3>
                        What will I Learn ?
                    </h3>

                    <p>
                        Offer practical advice on entering the Merchant Navy as a cadet or trainee, highlighting the importance of gaining hands-on experience and mentorship.
                        Outline the career progression and ranks within the Merchant Navy hierarchy, illustrating the pathway to advancement and leadership roles.
                        Discuss the process of obtaining seafarer certification and licensing, emphasizing the importance of compliance with international regulations and industry standards.
                    </p>
                </div>
            </div>
        </div>
    )
}
