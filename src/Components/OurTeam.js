import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Mousewheel, Pagination } from "swiper";

const team=[
  {
    image:"./images/dhivya.png",
    name:"Dhivya S",
    title:"Founder",
    paragraph:"A data geek at heart, Dhivya has worked in all the major big data platforms across different industries from Manufacturing, Telecom, Transport, Banking to FMCG. Dhivya is driven by a simple vision and that is to make the world a better place through technology and she thought what better way to do that than Solar and here we are."
  },
  {
    image:"./images/yadhu.png",
    name:"Yadhu N",
    title:"CTO",
    paragraph:"A technology enthusiast, Yadhu brings to the table great wealth of experience in product management, insights into the latest technologies and deploying them appropriately to fit. He relates the feeling of going to tech conferences as like his childhood when he sees firecrackers during Diwali, what a nerd!"
  },
  {
    image:"./images/vidhya.png",
    name:"Vidhya S",
    title:"CISO",
    paragraph:"Our Chief information security officer with hands on experience in compliance, auditing and processes. Vidhya spearheaded our ISO 27001:2013 certification and is eager to get started on SOC 2. Yes, she drives everyone crazy with her processes, but we all bend the knee sooner or later."
  },
  {
    image:"./images/vivek.png",
    name:"Vivek N",
    title:"DevOps Lead",
    paragraph:"With rich experience in multiple programming, cloud and DevOps platforms, Vivek handles the infrastructure side of things. His obsession with efficiency while some may think is unhealthy, made him the ideal person to run our operations at its peak performance."
  },
  {
    image:"./images/partners.png",
    name:"Partners",
    title:"Collaboration",
    paragraph:"We work with few other startups based in India who are equally driven. This section would be incomplete without a mention of them"
  }
]


export default function OurTeam() {
  return (
    <>
    <section className="team" id='our-team'>
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
        {
          team.map((ele, index)  =>{
          return( <SwiperSlide key={index}>
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6 d-flex align-items-center justify-content-center">
                    <div className="team__img">
                        <img src={ele.image} alt="" />
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="team__name">
                    <h3>{ele.name}</h3>
                  </div>
                  <div className="team__title mt-3">
                    <h4>{ele.title}</h4>
                  </div>
                  <div className="team__paragraph mt-5">
                    <p>{ele.paragraph}</p>
                  </div>
                </div>
            </div>
        </SwiperSlide>  
          )}
          )
        }
      </Swiper>
        </div>
    </section>
    </>
  )
}
