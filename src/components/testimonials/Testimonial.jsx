import React from 'react'
import './testimonial.css'
// import AVTR1 from '../../assests/avatar1.jpg'
// import AVTR2 from '../../assests/avatar2.jpg'
// import AVTR3 from '../../assests/avatar3.jpg'
// import AVTR4 from '../../assests/avatar4.jpg'


// import Swiper core and required modules
import SwiperCore, {Autoplay, Navigation, Pagination } from 'swiper/core';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Autoplay,Pagination,Navigation]);
// Import Swiper styles

// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';


// Dynamic content 
const data = [
    {
        name: 'Apurva Parihar',
        review: 'It was great and handled very fast. They worked around my conference call and fixed the issue right away.'
    },
    {
        name: 'Ashutosh Dwivedi',
        review: 'Thank you Ajile Minds for your continued tireless efforts in making sure we are productive. And you always do it with a smile!!! Many thanks'
    },
    {
        name: 'Harshit Nakra',
        review: 'AjileMinds did a great job developing my website. They were experienced, responsive, and on top of things. I would definitely use them again.'
    },
    {
        name: 'Babita Tiwari',
        review: 'AjileMinds service was the best service I ever encountered somewhere. I am very happy with the result and my client is too. They will use this to establish themselves more in the online community to be there for their customers.'
    }
]

const Testimonial = () => {
    return (
        <section className='testimonials'>
            <h5>Review form clients</h5>
            <h2>Testimonials</h2>

            <Swiper style={{padding:'43px'}} className="container testimonials__container"
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{
                    'delay':2500,
                    "disableOnInteraction":false
                }}
            >
                {
                    data.map(({  name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className="testimonial">
                               

                                <h5 className="client__name"> {name}</h5>
                                <small className="client__review">
                                    {review}
                                </small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Testimonial