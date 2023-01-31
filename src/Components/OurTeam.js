import React from 'react'

// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";


// // import required modules
// import { Mousewheel, Pagination } from "swiper";

const team = [
  {
    image: "./images/dhivya.png",
    name: "Dhivya S",
    title: "Founder",
    background: "#FBEFE4",
    imagebackground: "#F8E5D3",
    paragraph: "Dhivya has been in the Big Data scene right from its nascent stages working across all major platforms and variety of industries. Her insight on how Data should be looked at in the organizational context is the foundation of Rishi in many ways."
  },
  {
    image: "./images/yadhu.png",
    name: "Yadhu N",
    title: "CTO",
    background: "#E4FBED",
    imagebackground: "#CAF7DB",
    paragraph: "Yadhu dons multiple hats, one moment he is a technology enthusiast who brings out his great wealth of experience in Product Management. Another moment, he becomes a pure strategist looking at the big picture. This unique combination made him the ideal person to run our whole show."
  },
  {
    image: "./images/vidhya.png",
    name: "Vidhya S",
    title: "CISO",
    background: "#FBF6E4",
    imagebackground: "#F8F0D3",
    paragraph: "Our Chief information security officer with hands on experience in compliance, auditing and processes. Vidhya spearheaded our ISO 27001:2013 certification and is eager to get started on SOC 2. Yes, she drives everyone crazy with her processes, but we all bend the knee sooner or later."
  },
  {
    image: "./images/vivek.png",
    name: "Vivek N",
    title: "DevOps & <br/> Infra Director",
    background: "#E4E7FB",
    imagebackground: "#D3D8F8",
    paragraph: "Vivek has diverse experience across several programming, cloud platforms and cross functional experience. He is our man who is on a mission of keeping the service reliable and scalable for all our clients. Keep your phones and scales handy mate!"
  },
  {
    image: "./images/vinodh.png",
    name: "Vinodh D",
    title: "Advisor",
    background: "#E4F8FB",
    imagebackground: "#D3F3F8",
    paragraph: "One of our subject matter experts, Vinodh comes with strong Project Management experience within Solar Industry. He helps translate the complex requirements of a project site into bits and bytes so that we Techies can understand. He is organized, driven and bald."
  },
  {
    image: "./images/emre.png",
    name: "Emre AC",
    title: "Advisor",
    background: "#E4E7FB",
    imagebackground: "#D3D8F8",
    paragraph: "One of our other subject matter experts, Emre has been in the deep end of the EPC side of things in solar industry. He helps us to not lose sight of what the product should deliver, he is our much-needed reality check whenever we get too into our heads."
  }
]


// export default function OurTeam() {
//   return (
//     <>
//     <section className="team" id='our-team'>
//         <div className="container">
//             <div className="team__header text-center">
//                 <h2>Our Team</h2>
//             </div>
//             <Swiper
//         direction={"vertical"}
//         slidesPerView={1}
//         spaceBetween={30}

//         mousewheel={true}
//         pagination={{
//           clickable: true,
//         }}

//         modules={[Mousewheel, Pagination]}
//         className="mySwiper"
//       >
//         {
//           team.map((ele, index)  =>{
//           return( <SwiperSlide key={index}>
//             <div className="row">
//                 <div className="col-sm-12 col-md-6 col-lg-6 d-flex align-items-center justify-content-center">
//                     <div className="team__img">
//                         <img src={ele.image} alt="" />
//                     </div>
//                 </div>
//                 <div className="col-sm-12 col-md-6 col-lg-6">
//                   <div className="team__name">
//                     <h3>{ele.name}</h3>
//                   </div>
//                   <div className="team__title mt-3">
//                     <h4>{ele.title}</h4>
//                   </div>
//                   <div className="team__paragraph mt-5">
//                     <p>{ele.paragraph}</p>
//                   </div>
//                 </div>
//             </div>
//         </SwiperSlide>  
//           )}
//           )
//         }
//       </Swiper>
//         </div>
//     </section>
//     </>
//   )
// }

export default function OurTeam() {
  return (
    <>
      <section className="team" id='our-team'>
        <div className="container">
          <div className="team__header text-center">
            <h2>Our Team</h2>
          </div>
          <div className="row mt-5" style={{ rowGap: "25px" }}>
            {
              team.map((ele, index) => {
                return (<div className="col-lg-4">
                  <div className="animation">
                    <div className="team__container" style={{background: `${ele.background}`}} key={index.image}>
                      <div className="team__img" style={{background: `${ele.imagebackground}`}}>
                        <img src={ele.image} alt="" />
                      </div>
                      <div className="team--details">
                        <div className="team__name mt-3">
                          <h3>{ele.name}</h3>
                        </div>
                        <div className="team__title mt-3">
                          <div dangerouslySetInnerHTML={{__html:ele["title"]}}></div>
                        </div>
                      </div>
                    </div>
                    <div className="team__paragraph mt-4">
                      <p>{ele.paragraph}</p>
                    </div>
                  </div>                  
                </div>
                )
              })
            }
          </div>

          <div className="partners">
            <div className="partners__img">
              <img src="./images/partners.png" alt="" width={236} height={214} />
            </div>
            <div className="partners--team__details">
              <div className="team__name mt-3">
                <h3>Partners</h3>
              </div>
              <div className="team__title mt-3">
                <h4>Collaboration</h4>
              </div>
              <div className="team__paragraph mt-4">
                <p>We work with few other startups based in India who are equally driven and skilled. They play an active role in getting our product to the shape that it is. We look at them as an extension of our internal team who just happened to be set up as separate entities.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}