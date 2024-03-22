import React from 'react'

export default function ExploreCourse() {
  return (
    <div>
        <div className='section_hero-4'>
            <div class="hero_heading-text">
                <h1>LEARN WHAT SCHOOL DOESN’T TEACH YOU</h1>
                <p class="text-color-white-2 line-height-180">At Dhruv Rathee Academy, you can gain practical knowledge and learn real-world skills that will help you transform your life at work, school and home.</p>
                
                <div className='expore-div'>
                    <button className='explore-btn'>EXPLORE COURSES</button>
                </div>

                <div class="hero_learners-wrapper-2">
                    <img src="https://assets-global.website-files.com/64c3cccd0420b62485950351/64c8245d4662e6db9dfb18d1_Learners.png" loading="lazy" width="174" alt="" className="hero_learners-img"/>
                    <div class="hero_learners">
                        <div class="heading-style-h6-3">10000+</div>
                        <div class="text-size-small-3">Happy Learners</div>
                    </div>
            
                    <div class="html-embed-19 w-embed">
                        
                        <svg width="1" height="32" viewBox="0 0 1 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0.5" y1="2.18557e-08" x2="0.499999" y2="32" stroke="#1FC895"></line>
                        </svg>
                        
                    </div>
                    
                    <a href="#testimonials" class="w-inline-block">
                        <div class="hero_reviews">
                            <div class="heading-style-h6-3">4.8+&nbsp;
                                <span class="text-size-small-3 text-weight-normal">(600+ Ratings)</span>
                            </div>
                            <img src="https://assets-global.website-files.com/6455c5e84a23e4a53b5da193/645636d22beb50aa8da7dfe5_stars.png" loading="lazy" alt=""/>
                        </div>
                    </a>
                </div> 
            </div>

            <div className='hero_wrapper-2'>
                {/* <img src={require('../Assets/photo_img.png')} className='photoimg'/> */}
            </div>

        </div>
    </div>
  )
}
