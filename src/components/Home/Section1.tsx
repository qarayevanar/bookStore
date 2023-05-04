import { useContext } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Navigation } from "swiper";
import LangContext from "../../context/langContext";
import { Link } from "react-router-dom";

const slide1 = require('../../assets/img/undraw4.png')
const slide2 = require('../../assets/img/undraw1.png')
const slide3 = require('../../assets/img/undraw3.png')

const Section1 = () => {
 const ctx = useContext(LangContext);


  return (
    <div className="container-fluid  background py-5 mt-5">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >


        <div className="container  ">
          <SwiperSlide>
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6 p-5">
                  <h6 data-aos="zoom-out-up "
                    data-aos-duration="2000" className="bg animate__infinite text_color">{ctx.lang.section1.slide1.head}</h6>
                  <h1 data-aos="flip-left" data-aos-duration="2000" className="h1 text_color">{ctx.lang.section1.slide1.read} <span>{ctx.lang.section1.slide1.span}</span>{ctx.lang.section1.slide1.online}</h1>
                  <p data-aos="fade-left" className="paragraph">{ctx.lang.section1.slide1.p}</p>
                  <Link to='/products'>
                  <button data-aos="flip-left" data-aos-easing="ease-out-cubic"
                    data-aos-duration="500" className="slipper-btn ">{ctx.lang.section1.slide1.btn}</button></Link>
                </div>
                <div className="col-12 col-sm-12 col-md-6 " data-aos="zoom-in-up">
                  <img src={slide1} alt="" className="img_size_sec_one"/>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6 p-5">
                  <h6  className="bg text_color animate__animated animate__bounceInDown animate__infinite animate__slower">{ctx.lang.section1.slide2.head}</h6>
                  <h1 className="h1 text_color  animate__animated animate__bounceInDown animate__infinite animate__slower">{ctx.lang.section1.slide2.hero} <span>{ctx.lang.section1.slide2.span}</span> </h1>
                  <p className="paragraph">{ctx.lang.section1.slide2.p}</p>
                  <Link to='/products'>
                    <button  className="slipper-btn animate__animated animate__flip animate__infinite animate__slower">{ctx.lang.section1.slide2.btn}</button>
                    </Link>
                </div>
                <div className="col-12 col-sm-12 col-md-6    animate__slower" >
                  <img src={slide2} alt="" className="img_size_sec_one"/>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6 p-5">
                  <h6 data-aos="zoom-out-up " data-aos-duration="2000" className="bg text_color">{ctx.lang.section1.slide3.head}</h6>
                  <h1 data-aos="flip-left" data-aos-duration="2000" className="h1 text_color">{ctx.lang.section1.slide3.hero}<span>{ctx.lang.section1.slide3.span}</span>  {ctx.lang.section1.slide3.book}</h1>
                  <p data-aos="fade-left" className="paragraph">{ctx.lang.section1.slide3.p}</p>
                  <Link to='/products'>
                    <button data-aos="flip-left" data-aos-easing="ease-out-cubic"
                    data-aos-duration="500" className="slipper-btn ">{ctx.lang.section1.slide3.btn}</button>
                    </Link>
                </div>
                <div className="col-12 col-sm-12 col-md-6 ">
                  <img src={slide3} alt="" className="img_size_sec_one"/>
                </div>
              </div>
            </div>
          </SwiperSlide>

        </div>
      </Swiper>
    </div>
  )
}

export default Section1;