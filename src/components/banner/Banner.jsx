import React from 'react'
import "./Banner.css"
import AboutImg from "../../assets/about.png"
import recentImg1 from "../../assets/recent1.png"
import recentImg2 from "../../assets/recent2.png"
import product1 from "../../assets/product1.png"
import product2 from "../../assets/product2.png"
import product3 from "../../assets/product3.png"
import facebook from "../../assets/facebook.png"
import twitter from "../../assets/twitter.png"
import youtube from "../../assets/youtube.png"
import instagram from "../../assets/instagram.png"
import road from "../../assets/road.png"
import mapicon from "../../assets/mapicon.png"
import comment from "../../assets/comment.png"
import beach from "../../assets/popular.png"
import city from "../../assets/city.png"
import wild from "../../assets/wild.png"
import globus from "../../assets/globus.png"
import tree from "../../assets/tree.png"
import towers from "../../assets/towers.png"
import animal from "../../assets/animal.png"
import info1 from "../../assets/desfooter1.png"
import info2 from "../../assets/desfooter2.png"
import info3 from "../../assets/desfooter3.png"
import info4 from "../../assets/desfooter4.png"
import info5 from "../../assets/desfooter5.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Banner = () => {
  
  return (
    <div className='banner'>
      <div className="container">
      <div className="blog-wrap">
        <div className="blog-left">
          <div className="aboutme">
            <h3>About Me</h3>
            <img src={AboutImg} alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Cum in vel massa donec sit. Mi ut risus sem malesuada ornare. 
              Ac eu erat eget et lorem est arcu. Gravida hendrerit 
              sit blandit semper lacus. Nulla amet suscipit sit lectus tortor. 
              Dolor non eget suspendisse leo scelerisque sed d.</p>

              <div className="about-btn">
                <a href="#">Read More</a>
              </div>
          </div>

          <div className="categories">
            <h3>Categories</h3>
            <div className="category-wrap">
            <div className="category">
              <p>Europe</p>
              <p>(11)</p>
            </div>

            <div className="category">
              <p>Mountains</p>
              <p>(11)</p>
            </div>

            <div className="category">
              <p>Traveling Video</p>
              <p>(11)</p>
            </div>

            <div className="category">
              <p>Beauty of Seas</p>
              <p>(11)</p>
            </div>

            <div className="category">
              <p>Cuisine</p>
              <p>(11)</p>
            </div>

            <div className="category">
              <p>Guides for traveler</p>
              <p>(11)</p>
            </div>

            <div className="category">
              <p>Other</p>
              <p>(11)</p>
            </div>
            </div>

          </div>

          <div className="popular-post">
            <div className="popular-title">
              <h3>Popular Post</h3>
            </div>

            <div className="popular-text">
              <p>September 17, 2018 - Tips & Tricks</p>
              <h3>Finding Love & home in Tbilisi, Georgia</h3>
            </div>
          </div>

          <div className="recent-post">
            <div className="recent-title">
              <h3>Recent Post</h3>
            </div>

            <div className="recent-wrap">
              <div className="recent">
              <div className="recent-img">
                <img src={recentImg1} alt="" />
              </div>

              <div className="recent-text">
                <p>September 17, 2018 - Tips & Tricks</p>
                <h3>Finding Love & home in Tbilisi, Georgia</h3>
              </div>
              </div>
              
              <div className="recent">
              <div className="recent-img">
                <img src={recentImg2} alt="" />
              </div>

              <div className="recent-text">
                <p>September 17, 2018 - Tips & Tricks</p>
                <h3>Finding Love & home in Tbilisi, Georgia</h3>
              </div>
              </div>

              <div className="recent">
              <div className="recent-img">
                <img src={recentImg2} alt="" />
              </div>

              <div className="recent-text">
                <p>September 17, 2018 - Tips & Tricks</p>
                <h3>Finding Love & home in Tbilisi, Georgia</h3>
              </div>
              </div>

            </div>
          </div>

          <div className="details-wrap">
            <h3>Gear I Use</h3>
            <h3>What’s in My Bag??</h3>
            <div className="details-text">
            <p>Unfortunately, there is no “one-size-fits-all” when it comes to travel packing lists.</p>
            </div>

            <div className="datails-btn">
              <a href="#">View Details</a>
            </div>
          </div>

          <div className="product-wrap">
            <div className="product-title">
            <h3>Product That I Have</h3>
            </div>
            <div className="product">
              <div className="product-img">
                <img src={product1} alt="" />
              </div>

              <div className="product-text">
                <p id='title'>Apple MacBook Air  MJV2ELL/A 13-inch Laptop</p>
                <p id='price'>$514</p>
              </div>
            </div>
            
            <div className="product">
              <div className="product-img">
                <img src={product2} alt="" />
              </div>

              <div className="product-text">
                <p id='title'>Iphone Xs case, Iphone X case, SUPCASE</p>
                <p id='price'>$267</p>
              </div>
            </div>

            <div className="product">
              <div className="product-img">
                <img src={product3} alt="" />
              </div>

              <div className="product-text">
                <p id='title'>Master Sport band for Apple wrist watch</p>
                <p id='price'>$378</p>
              </div>
            </div>

          </div>

          <div className="touch-wrap">
            <div className="touch-title">
              <h3>Get In Touch</h3>
            </div>

            <div className="touchs">
            <a target='_blank' href="https://www.facebook.com/">
            <div id='facebook' className="touch">
              <div className="touch-img">
                <img id='face' src={facebook} alt="" />
              </div>

              <div className="touch-text">
              <p>65.5K</p>
              <p>Likes</p>
              </div>
            </div>
            </a>
            
            <a target='_blank' href="https://x.com/">
            <div id='twitter' className="touch">
              <div className="touch-img">
                <img src={twitter} alt="" />
              </div>

              <div className="touch-text">
              <p>105 k</p>
              <p>Followers</p>
              </div>
            </div>
            </a>
            </div>
            <div className="touchs">
            <a target='_blank' href="https://www.youtube.com/">
            <div id='youtube'  className="touch">
              <div className="touch-img">
                <img id='you' src={youtube} alt="" />
              </div>

              <div className="touch-text">
              <p>1.5 M</p>
              <p>Subscribers</p>
              </div>
            </div>
            </a>

            <a target='_blank' href="https://www.instagram.com/">
            <div id='instagram' className="touch">
              <div className="touch-img">
                <img id='insta' src={instagram} alt="" />
              </div>

              <div className="touch-text">
              <p>85 k</p>
              <p>Followers</p>
              </div>
            </div>
            </a>
            </div>

          </div>
        </div>

        <div className="blog-right">
          <div className="trevel-wrap">
            <div className="trevel-img">
            <iframe
      width="100%"
      height="455"
      src="https://www.youtube.com/embed/htqd5aGB7FY?si=tsL3arlB3Swg6P8r"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
            </div>

            <div className="trevel-text">
              <div className="trevel-title">
                <p>July, 15, 2021 - Tips and Tricks</p>
                <h3>A traveler’s guide to Penang, Malaysia - Where to Eat, Drink, Sleep and Explore</h3>
              </div>

              <p id='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Viverra pharetra ac erat commodo non leo eget gravida viverra. Pharetra pharetra.</p>

                <div className="trevel-map-wrap">
                  <div className="trevel-map">
                    <div className="trevel-map-img">
                    <img src={mapicon} alt="" />
                    </div>

                    <div className="trevel-map-text">
                      <p>Penang, Malaysia</p>
                    </div>
                  </div>

                  <div className="trevel-comment-wrap">
                    <div className="trevel-comment-img">
                      <img src={comment} alt="" />
                    </div>

                    <div className="trevel-comment-text">
                      <p>Comment (52)</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>

          <div className="beach-wrapper">
            <div className="beach" style={{height: "550px"}}>
            <div className="trevel-img">
              <img id='beach-img' src={beach} alt="" />
            </div>

            <div className="trevel-text">
              <div className="trevel-title">
                <p>September 17, 2021 - Tips & Tricks</p>
              </div>

              <h3>Have you read The Beach by Alex?</h3>

                <div className="trevel-map-wrap">
                  <div className="trevel-map">
                    <div className="trevel-map-img">
                    <img src={mapicon} alt="" />
                    </div>

                    <div className="trevel-map-text">
                      <p>Georgia</p>
                    </div>
                  </div>

                  <div className="trevel-comment-wrap">
                    <div className="trevel-comment-img">
                      <img src={comment} alt="" />
                    </div>

                    <div className="trevel-comment-text">
                      <p>Comment (52)</p>
                    </div>
                  </div>
                </div>
            </div>
            </div>

            <div id='beach2' className="beach" style={{height: "550px"}}>
            <div className="trevel-img">
              <img src={city} alt="" />
            </div>

            <div className="trevel-text">
              <div className="trevel-title">
                <p>September 17, 2021 - Tips & Tricks</p>
              </div>

              <h3>The writer actually live in Philippines</h3>

                <div className="trevel-map-wrap">
                  <div className="trevel-map">
                    <div className="trevel-map-img">
                    <img src={mapicon} alt="" />
                    </div>

                    <div className="trevel-map-text">
                      <p>Georgia</p>
                    </div>
                  </div>

                  <div className="trevel-comment-wrap">
                    <div className="trevel-comment-img">
                      <img src={comment} alt="" />
                    </div>

                    <div className="trevel-comment-text">
                      <p>Comment (52)</p>
                    </div>
                  </div>
                </div>
            </div>
            </div>
          </div>

          <div className="trevel-wrap nature">
            <div className="trevel-img">
            <iframe
      width="100%"
      height="455"
      src="https://www.youtube.com/embed/VFJPYlqpgeU?si=0ChtKvKkjh8tFe7d"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
            </div>

            <div className="trevel-text">
              <div id='trevel-text' className="trevel-title">
                <p>September 17, 2021 - Tips & Tricks</p>
                <h3>Finding Love & home in Tbilisi, Georgia</h3>
              </div>

              <p id='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Viverra pharetra ac erat commodo non leo eget gravida viverra. Pharetra pharetra.</p>

                <div className="trevel-map-wrap">
                  <div className="trevel-map">
                    <div className="trevel-map-img">
                    <img src={mapicon} alt="" />
                    </div>

                    <div className="trevel-map-text">
                      <p>Penang, Malaysia</p>
                    </div>
                  </div>

                  <div className="trevel-comment-wrap">
                    <div className="trevel-comment-img">
                      <img src={comment} alt="" />
                    </div>

                    <div className="trevel-comment-text">
                      <p>Comment (52)</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>

          <div className="purchase-wrap">
            <h3>Want <span>Me to Purchase</span> Something For You That isn’t available in your Country?</h3>

            <div className="purchase-btn">
              <a href="#">Place Order</a>
            </div>
          </div>

          <div className="beach-wrapper castle">
            <div id='globus' className="beach" style={{height: "550px"}}>
            <div className="trevel-img">
              <img src={globus} alt="" />
            </div>

            <div className="trevel-text">
              <div className="trevel-title">
                <p>September 17, 2021 - Tips & Tricks</p>
              </div>

              <h3>Get away from the maddening Crowds</h3>

                <div className="trevel-map-wrap">
                  <div className="trevel-map">
                    <div className="trevel-map-img">
                    <img src={mapicon} alt="" />
                    </div>

                    <div className="trevel-map-text">
                      <p>Georgia</p>
                    </div>
                  </div>

                  <div className="trevel-comment-wrap">
                    <div className="trevel-comment-img">
                      <img src={comment} alt="" />
                    </div>

                    <div className="trevel-comment-text">
                      <p>Comment (52)</p>
                    </div>
                  </div>
                </div>
            </div>
            </div>

            <div id='beach2' className="beach" style={{height: "550px"}}>
            <div className="trevel-img">
              <img src={tree} alt="" />
            </div>

            <div className="trevel-text">
              <div className="trevel-title">
                <p>September 17, 2021 - Tips & Tricks</p>
              </div>

              <h3>Matsumoto Castle is considered one of</h3>

                <div className="trevel-map-wrap">
                  <div className="trevel-map">
                    <div className="trevel-map-img">
                    <img src={mapicon} alt="" />
                    </div>

                    <div className="trevel-map-text">
                      <p>Georgia</p>
                    </div>
                  </div>

                  <div className="trevel-comment-wrap">
                    <div className="trevel-comment-img">
                      <img src={comment} alt="" />
                    </div>

                    <div className="trevel-comment-text">
                      <p>Comment (52)</p>
                    </div>
                  </div>
                </div>
            </div>
            </div>
          </div>

          <div className="beach-wrapper castle japan">
            <div id='globus' className="beach" style={{height: "550px"}}>
            <div className="trevel-img">
              <img src={towers} alt="" />
            </div>

            <div className="trevel-text">
              <div className="trevel-title">
                <p>September 17, 2021 - Tips & Tricks</p>
              </div>

              <h3>Many buildings especially in Japan</h3>

                <div className="trevel-map-wrap">
                  <div className="trevel-map">
                    <div className="trevel-map-img">
                    <img src={mapicon} alt="" />
                    </div>

                    <div className="trevel-map-text">
                      <p>Georgia</p>
                    </div>
                  </div>

                  <div className="trevel-comment-wrap">
                    <div className="trevel-comment-img">
                      <img src={comment} alt="" />
                    </div>

                    <div className="trevel-comment-text">
                      <p>Comment (52)</p>
                    </div>
                  </div>
                </div>
            </div>
            </div>

            <div id='beach2' className="beach" style={{height: "550px"}}>
            <div className="trevel-img">
              <img src={animal} alt="" />
            </div>

            <div className="trevel-text">
              <div className="trevel-title">
                <p>September 17, 2021 - Tips & Tricks</p>
              </div>

              <h3>There are roughly 1200 semiwild dear</h3>

                <div className="trevel-map-wrap">
                  <div className="trevel-map">
                    <div className="trevel-map-img">
                    <img src={mapicon} alt="" />
                    </div>

                    <div className="trevel-map-text">
                      <p>Georgia</p>
                    </div>
                  </div>

                  <div className="trevel-comment-wrap">
                    <div className="trevel-comment-img">
                      <img src={comment} alt="" />
                    </div>

                    <div className="trevel-comment-text">
                      <p>Comment (52)</p>
                    </div>
                  </div>
                </div>
            </div>
            </div>
          </div>

          <div className="trevel-wrap nature">
            <div className="trevel-img">
            <iframe
      width="100%"
      height="455"
      src="https://www.youtube.com/embed/C0gOmA7EOfs?si=Q0HmSo7K0cQOm-0q"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
            </div>

            <div className="trevel-text">
              <div className="trevel-title">
                <p>September 17, 2021 - Tips & Tricks</p>
                <h3>Finding Love & home in Tbilisi, Georgia</h3>
              </div>

              <p id='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Viverra pharetra ac erat commodo non leo eget gravida viverra. Pharetra pharetra.</p>

                <div className="trevel-map-wrap">
                  <div className="trevel-map">
                    <div className="trevel-map-img">
                    <img src={mapicon} alt="" />
                    </div>

                    <div className="trevel-map-text">
                      <p>Penang, Malaysia</p>
                    </div>
                  </div>

                  <div className="trevel-comment-wrap">
                    <div className="trevel-comment-img">
                      <img src={comment} alt="" />
                    </div>

                    <div className="trevel-comment-text">
                      <p>Comment (52)</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>

          <div className="beach-wrapper">
            <div className="beach" style={{height: "550px"}}>
            <div className="trevel-img">
              <img src={beach} alt="" />
            </div>

            <div className="trevel-text">
              <div className="trevel-title">
                <p>September 17, 2021 - Tips & Tricks</p>
              </div>

              <h3>Have you read The Beach by Alex?</h3>

                <div className="trevel-map-wrap">
                  <div className="trevel-map">
                    <div className="trevel-map-img">
                    <img src={mapicon} alt="" />
                    </div>

                    <div className="trevel-map-text">
                      <p>Georgia</p>
                    </div>
                  </div>

                  <div className="trevel-comment-wrap">
                    <div className="trevel-comment-img">
                      <img src={comment} alt="" />
                    </div>

                    <div className="trevel-comment-text">
                      <p>Comment (52)</p>
                    </div>
                  </div>
                </div>
            </div>
            </div>

            <div id='beach2' className="beach" style={{height: "550px"}}>
            <div className="trevel-img">
              <img src={city} alt="" />
            </div>

            <div className="trevel-text">
              <div className="trevel-title">
                <p>September 17, 2021 - Tips & Tricks</p>
              </div>

              <h3>The writer actually live in Philippines</h3>

                <div className="trevel-map-wrap">
                  <div className="trevel-map">
                    <div className="trevel-map-img">
                    <img src={mapicon} alt="" />
                    </div>

                    <div className="trevel-map-text">
                      <p>Georgia</p>
                    </div>
                  </div>

                  <div className="trevel-comment-wrap">
                    <div className="trevel-comment-img">
                      <img src={comment} alt="" />
                    </div>

                    <div className="trevel-comment-text">
                      <p>Comment (52)</p>
                    </div>
                  </div>
                </div>
            </div>
            </div>
          </div>

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
    <img src={info1} alt="" />
    <img src={info2} alt="" />
    <img src={info3} alt="" />
    <img src={info4} alt="" />
    <img src={info5} alt="" />
  </SwiperSlide>
  <SwiperSlide className="multi-slide">
    <img src={info2} alt="" />
    <img src={info3} alt="" />
    <img src={info4} alt="" />
    <img src={info5} alt="" />
    <img src={info1} alt="" />
  </SwiperSlide>
  <SwiperSlide className="multi-slide">
    <img src={info2} alt="" />
    <img src={info5} alt="" />
    <img src={info1} alt="" />
    <img src={info3} alt="" />
    <img src={info4} alt="" />
  </SwiperSlide>
  <SwiperSlide className="multi-slide">
    <img src={info4} alt="" />
    <img src={info1} alt="" />
    <img src={info2} alt="" />
    <img src={info5} alt="" />
    <img src={info3} alt="" />
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

export default Banner
