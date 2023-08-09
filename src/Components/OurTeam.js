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
    name: "Dhivya",
    title: "Founder",
    background: "#FBEFE4",
    imagebackground: "#F8E5D3",
    paragraph: "Meet Dhivya who started it all, she is our Big Data slayer with a wealth of experience across major platforms and industries. Her savvy insights wield the power of data, driving Rishi's success. She's the secret sauce in our Big Data recipe."
  },
  {
    image: "./images/vinodh.png",
    name: "Vinodh",
    title: "Advisor",
    background: "#E4F8FB",
    imagebackground: "#D3F3F8",
    paragraph: "Introducing Vinodh, one of our subject matter experts in the solar industry with a strong background in project management. He excels at breaking down complex requirements into techie-friendly bytes. He’s also incredibly organized, driven, and bald."
  },
  {
    image: "./images/yadhu.png",
    name: "Yadhu",
    title: "CEO",
    background: "#E4FBED",
    imagebackground: "#CAF7DB",
    paragraph: "A full-on tech enthusiast, Yadu brings to the table great wealth of experience in product management and delivery. He is that kind of a nerd who enjoys attending tech conferences, learning from them, and schooling us mortals."
  },
  {
    image: "./images/vidhya.png",
    name: "Vidhya",
    title: "CISO",
    background: "#FBF6E4",
    imagebackground: "#F8F0D3",
    paragraph: "Meet Vidhya: our compliance, auditing, and process guru! She conquered ISO 27001:2013 certification and drives us all a bit crazy with her processes, but we all bend the knee sooner or later."
  },
  {
    image: "./images/emre.png",
    name: "Emre",
    title: "Advisor",
    background: "#E4E7FB",
    imagebackground: "#D3D8F8",
    paragraph: "Our solar industry superhero, Emre has been in the deep end of the EPC side of things. He is the guardian of our product’s purpose and a much-needed reality check whenever we get too into our heads."
  },
  {
    image: "./images/vivek.png",
    name: "Vivek",
    title: "DevOps & <br/> Infra Director",
    background: "#E4E7FB",
    imagebackground: "#D3D8F8",
    paragraph: "Vivek has diverse experience across several programming, cloud platforms and cross functional experience. He is our man who is on a mission of keeping the service reliable and scalable for all our clients. Keep your phones and scales handy mate!"
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
                <p>We work with a few other awesome startups who played an active role in getting our product to the shape that it is. In many ways, they are an extension of us who just happened to be set up as separate entities.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}