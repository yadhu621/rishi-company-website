import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Mousewheel, Pagination } from "swiper";


export default function OurTeam() {
  return (
    <>
    <section className="team">
        <div className="container">
            <div className="team__header text-center">
                <h2>Our Team</h2>
            </div>
            <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="row">
                <div className="col-lg-6">
                    <div className="team__img">
                        <img src="./images/dhivya.png" alt="" />
                    </div>
                </div>
                <div className="col-lg-6"></div>
            </div>
        </SwiperSlide>
        
      </Swiper>
        </div>
    </section>
    </>
  )
}
