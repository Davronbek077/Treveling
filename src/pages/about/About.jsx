import React from 'react'
import "./About.css"
import aboutImg from "../../assets/aboutImg.png"
import about1 from "../../assets/about1.png"
import about2 from "../../assets/about2.png"
import about3 from "../../assets/about3.png"
import about4 from "../../assets/about4.png"
import info1 from "../../assets/info1.png"
import info2 from "../../assets/info2.png"
import info3 from "../../assets/info3.png"
import info4 from "../../assets/info4.png"
import info5 from "../../assets/info5.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const About = () => {
  return (
    <div className='about'>
      <div className="container">
        <div className="about-top">
        <div className="about-text-wrap">
          <div className="about-title">
          <h3>Hey, We are the Red Explorers
          Brief History <span>About Us.</span> </h3>
          </div>

          <div className="about-p">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mor mattis nec etiam ac.
             Bibendum tellus mi imperdiet amet maecenas magna tortor nulla. Nec tortor ut cursus ornare nibh vivamus. 
             Quam elementum at velit viverra mattis.
          Eleifend enim, praesent eu, leo semper quis et. Nisl neque malesuada arcu, felis, vitae rhoncus morbi volutpat ante. 
          Adipiscing mauris  </p>
          </div>
        </div>

        <div className="about-img-wrap">
          <div className="about-img">
          <img src={aboutImg} alt="" />
          </div>

          <div className="about-img-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. 
              Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. 
              Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor pharetra vitae rhoncus. 
              Nisl quam massa sapien tempor semper. Hac tempus pellentesque nibh duis ultrices. 
              Senectus sagittis id ullamcorper mi eget pellentesque egestas. In ut sollicitudin ut orci volutpat egestas fermentum. 
              Sit turpis diam risus leo bibendum neque, quis in vitae. 
            Praesent enim augue tellus vitae placerat purus pretium at massa. Aliquet a malesuada eget posuere. 
            Pellentesque euismod nulla praesent rhoncus.</p>
          </div>
        </div>
        </div>

        <div className="about-bottom">
          <div className="about-wrapper1 .about-wrapper">
          <div className="story">
              <h3>Our Story</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. 
                Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus. </p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. 
                Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus. 
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. 
                  Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. 
                  Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor pharetra vitae rhoncus.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. 
                    Mi arcu, nunc imperdiet sit arcu id. In libero.</p>
            </div>

            <div className="explorer">
              <h3>Who Are Red Explorers</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. 
                Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus. </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. 
                  Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. 
                  Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor pharetra vitae rhoncus.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. 
                    Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. 
                    Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor pharetra vitae rhoncus.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. 
                      Mi arcu, nunc imperdiet sit.</p>
            </div>
          </div>

          <div className="about-wrapper2 .about-wrapper">
            <div className="cameraman">
              <h3>About Our Cameraman</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. 
                Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. 
                Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor pharetra vitae rhoncus.Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. 
                In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna. 
                Pharetra, tortor pharetra vitae rhoncus.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. 
                  Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. 
                  Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor pharetra vitae rhoncus.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. 
                    Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus.</p>
            </div>

            <div className="learn">
              <h3>What you’ll Learn Here</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. 
                Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. 
                Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor pharetra vitae rhoncus.Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. 
                In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna. 
                Pharetra, tortor pharetra vitae rhoncus.</p>

                <h3 className='learn-title2'>On Our Website You’ll find:</h3>

                <p>Lorem ipsum dolor sit amet, consectetur.</p>
                <p>Lorem ipsum dolor sit amet, consectetur.</p>
                <p>Lorem ipsum dolor sit amet, consectetur.</p>
                <p>Lorem ipsum dolor sit amet, consectetur.</p>
                <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
          </div>
        </div>

        <div className="about-photo">
          <img src={about1} alt="" />
          <img src={about2} alt="" />
          <img src={about3} alt="" />
          <img src={about4} alt="" />
        </div>

        <div className="customer-text">
          <div className="customer-title">
            <h3>What  <span>Customer says </span>
            About us?</h3>
          </div>

          <div className="customer-p">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. 
              Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. 
              Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor pharetra vitae rhoncus.Lorem, Lorem ipsum 
              dolor sit amet, consectetur adipiscing elit. Facilisis ut.</p>
          </div>
        </div>

        <div className="about-cards">
          <div className="card">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus.Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus.</p>
              <h3>Joy Kim</h3>
              <p>explorer</p>
          </div>
          <div className="card">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus.Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus.</p>
              <h3>Joy Kim</h3>
              <p>explorer</p>
          </div>
          <div className="card">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus.Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus.</p>
              <h3>Joy Kim</h3>
              <p>explorer</p>
          </div>
        </div>


        <div className="info-wrapper">
          <div id='des-img' className="img-wrap">
          <Swiper
  modules={[Autoplay]}
  spaceBetween={0}
  slidesPerView={1}
  autoplay={{
    delay: 2000,
    disableOnInteraction: false,
  }}
  speed={800}
  loop={true}
>
  <SwiperSlide className="multi-slide">
    <img src={info3} alt="" />
    <img src={info4} alt="" />
    <img src={info1} alt="" />
    <img src={info2} alt="" />
    <img src={info5} alt="" />
  </SwiperSlide>
  <SwiperSlide className="multi-slide">
    <img src={info2} alt="" />
    <img src={info1} alt="" />
    <img src={info4} alt="" />
    <img src={info5} alt="" />
    <img src={info3} alt="" />
  </SwiperSlide>
  <SwiperSlide className="multi-slide">
    <img src={info2} alt="" />
    <img src={info4} alt="" />
    <img src={info3} alt="" />
    <img src={info5} alt="" />
    <img src={info1} alt="" />
  </SwiperSlide>
  <SwiperSlide className="multi-slide">
    <img src={info4} alt="" />
    <img src={info1} alt="" />
    <img src={info3} alt="" />
    <img src={info5} alt="" />
    <img src={info2} alt="" />
  </SwiperSlide>
</Swiper>
          </div>

          <div className="input-wrap">
            <div className="input-text">
              <h3>Join <span>98,641</span> Monthly Readers. Subscribe Today!</h3>
            </div>

            <div className="input">
              <input type="email" placeholder='Email Address' />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
