import React, { useEffect, useState, Suspense } from 'react';
import styles from '../../assets/stylesheets/abt.module.css'
import shape1 from '../../assets/abt_elements/1.svg'
import shape2 from '../../assets/abt_elements/2.svg'
import shape3 from '../../assets/abt_elements/3.svg'
import shape4 from '../../assets/abt_elements/4.svg'
import robo2 from '../../assets/abt_elements/robo2.svg'
import icon1 from '../../assets/abt_elements/icon1.png'
import icon2 from '../../assets/abt_elements/icon2.png'
import icon3 from '../../assets/abt_elements/icon3.png'
import icon4 from '../../assets/abt_elements/icon4.png'
import icon5 from '../../assets/abt_elements/icon5.png'
import icon6 from '../../assets/abt_elements/icon6.png'
import btnIcon from '../../assets/abt_elements/btnIco.svg'
import sec2Img from '../../assets/abt_elements/sec2_img.png'
import sec4Img from '../../assets/abt_elements/sec4_img.png'
import t1 from '../../assets/s4.svg'
import t2 from '../../assets/s5.svg'
import robo from '../../assets/robo3.svg'
import pseudo from '../../assets/pseudo.svg'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Helmet} from "react-helmet";
import { Link } from 'react-router-dom';


const DynamicOwlCarousel = React.lazy(() => import('react-owl-carousel'));

export default function About() {
  const [isClientSide, setIsClientSide] = useState(false);

  useEffect(() => {
    setIsClientSide(typeof window !== 'undefined');
  }, []);

  const options = {
    center: true,
    items:2,
    loop: true,
    margin:0,
    dots: false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        300:{
          items:1,
          touchDrag: true,
          stagePadding: 29 ,
          mergeFit: true,
          slideTransition: 'ease',
          
        },
        
        500:{
            items:2,
            margin: 150,
        },
        800:{
          items: 4,
          margin: 100
        },
        1200:{
          items: 4,
          margin: 50
        },
        1300:{
          items: 5,
          margin: 150
        },
        1500:{
          items: 5,
          margin: 20
        }
    }
  }

  return (
    <>
    <Helmet>
        <title>About Us - Invosoft</title>
        <meta name="description" content="Meet Invosoft in USA: Leaders in SEO, web development, SMM, and more. Explore our innovative digital solutions!"/>
        <link rel="canonical" href="https://invosoft.tech/about" />
        <meta name="robots" content="index, follow"/>
        
    </Helmet>
    <div className={`container ${styles.sec1}`}>
      <div className="row">
      <div className="col-8 col-sm-12">
      <h1 className={styles.title} data-aos="zoom-in-up" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="200" >ABOUT US</h1>
      <div className={`${styles.sub_heading} position-relative `}>
      <h2 className={styles.sub_title} data-aos="zoom-in-up" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="400">Unleashing the Power of Digital Possibilities</h2>
      <img src={pseudo} alt="" className={styles.pseudo1} data-aos="fade" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="1000" />
      </div>
      </div>
      <div className={`${styles.title_right} col-4 col-sm-0 `}>
        <img src={robo} alt="" className={styles.robo_right} data-aos="zoom-in-up" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="300" />
      </div>
       <div className={`${styles.sec1_info} col-12 col-sm-8`} data-aos="zoom-in-up" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="500"> <p> Welcome to <a href="https://www.invosoft.tech/" className="ilb">Invosoft </a>- where ideas find their true pulse in the vast realm of the digital universe. At the heart of our ethos lies a simple philosophy: every idea, whether nascent or mature, holds the potential to shine in the digital spectrum. We are here to ensure they do.</p></div>
       <div className="col-sm-4 position-relative">
       <img src={robo} alt="" className={styles.robo} data-aos="zoom-in-up" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="600"/>
       <img src={shape1} alt="" className={styles.shape1} data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="700"/>
       <img src={shape2} alt="" className={styles.shape2} data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="800" />
       </div>
       </div>
      <div className={`${styles.sec2} row`}>
        <div className="col-lg-4 d-flex justify-content-end align-items-center">
          <img src={sec2Img} alt="" className={styles.img1} />
        </div>
        <div className={`${styles.sec2_right} col-lg-8`}>
          <div className="position-relative " data-aos="fade" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="250">
            <h2 className={styles.sec2_title}>Our Origin Story</h2>
            <img src={pseudo} alt="" className={styles.pseudo2} />
          </div>
          <div className={styles.line}></div>
          <div className={styles.sec2_info} data-aos="fade" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="500"> <a href='https://www.invosoft.tech/' className='il' > Invosoft </a> was conceptualized on the foundation of passion - a passion for harnessing the limitless possibilities of the digital world. Over time, our core team of innovators, creators, and digital enthusiasts have converged their energies to form an organization that stands as a beacon for all things digital.</div>
          <Link to='/get-in-touch'><button className={`btn ${styles.btn}`}>Get In Touch</button></Link>
        </div>
      </div>

    </div>
   <div className={styles.sec3}>
    
          <div className={styles.heading}>
            <img src={robo2} alt="" className={styles.robo2}/>
            <div className={`position-relative ${styles.heading_right}`} >
            <h2 className={styles.sec3_title} data-aos="fade" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="350">Our Core Values</h2>
            <img src={pseudo} alt="" className={styles.pseudo3} data-aos="fade" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="600" />
            </div>
          </div>

          {isClientSide && (
            <Suspense fallback={<div>Loading...</div>}>
              <DynamicOwlCarousel className='owl-theme' {...options}>
                  <div className='item'>
                    <div className={styles.item}>
                      <div className={styles.icon_bg} data-aos="fade" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="650">
                        <img src={icon6} alt="" className={styles.icon} />
                      </div>
                    <h5 className={styles.item_title}>Innovation</h5>
                    <div className={`${styles.item_info} pb-4 `}>We're always on the hunt for cool new tech and designs to provide cutting edge solutions.</div>
                    <div className={styles.line2}></div>
                    </div>
                  </div>
                  <div className='item'>
                    <div className={styles.item}>
                      <div className={styles.icon_bg} data-aos="fade" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="750">
                        <img src={icon1} alt="" className={styles.icon}/>
                      </div>
                    <h5 className={styles.item_title}>Integrity</h5>
                    <div className={styles.item_info}>We're all about being honest and clear in everything we do, so our customers and partners can feel at ease.</div>
                    <div className={styles.line2}></div>
                    </div>
                  </div>
                  <div className='item'>
                    <div className={styles.item}>
                      <div className={styles.icon_bg} data-aos="fade" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="550">
                        <img src={icon5} alt="" className={styles.icon}/>
                      </div>
                    <h5 className={styles.item_title}>Customer First</h5>
                    <div className={`${styles.item_info} pb-5`}>We always put our customers' needs front and center..</div>
                    <div className={styles.line2}></div>
                    </div>
                  </div>
                  <div className='item'>
                    <div className={styles.item}>
                      <div className={styles.icon_bg} data-aos="fade" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="850">
                        <img src={icon2} alt="" className={styles.icon}/>
                      </div>
                    <h5 className={styles.item_title}>Quality</h5>
                    <div className={styles.item_info}>We're obsessed with making sure everything we do is top-notch, so our customer’s get the best result possible.</div>
                    <div className={styles.line2}></div>
                    </div>
                  </div>
                  <div className='item'>
                    <div className={styles.item}>
                      <div className={styles.icon_bg} data-aos="fade" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="850">
                        <img src={icon4} alt="" className={styles.icon}/>
                      </div>
                    <h5 className={styles.item_title}>Team Work</h5>
                    <div className={styles.item_info}>We believe in working together and talking things through, both in our team and with our clients, to get the best results</div>
                    <div className={styles.line2}></div>
                    </div>
                  </div>
                  <div className='item'>
                    <div className={styles.item}>
                      <div className={styles.icon_bg} data-aos="fade" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="850">
                        <img src={icon3} alt="" className={styles.icon}/>
                      </div>
                    <h5 className={styles.item_title}>Adaptability</h5>
                    <div className={styles.item_info}>The digital world changes fast, and we're all about keeping up and shifting gears to keep our customers happy.</div>
                    <div className={styles.line2}></div>
                    </div>
                  </div>
                  
              </DynamicOwlCarousel>
            </Suspense>
          )}
          
          <div className={styles.buttons}>
          <Link to='/get-in-touch'><button className={`btn ${styles.btn}`}>Get In Touch</button></Link>
          <Link to='/services'><button className={`btn ${styles.btn2}`}>
              Our Services
              <img src={btnIcon} alt="" className={styles.btnIco} />
            </button></Link>
          </div>
          <div className={styles.timer}>
            <img src={t1} alt="" className={styles.t1} data-aos="fade-down" data-aos-easing="linear"
            data-aos-duration="800" data-aos-delay="400" />
            <img src={t2} alt="" className={styles.t2} data-aos="fade-down" data-aos-easing="linear"
            data-aos-duration="800" data-aos-delay="500" />
          </div>
    </div>
    <div className={`container ${styles.sec4_spacing}`}>
    <div className={`${styles.sec4} row`}>
    <div className={styles.shapes2}>
    <img src={shape1} alt="" className={styles.abt1} data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="700"/>
    <img src={shape4} alt="" className={styles.abt3} data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="1200"/>
    </div>
    <img src={shape3} alt="" className={styles.abt2} data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="1000"/>
        <div className={`${styles.sec2_right} col-lg-7`}>
          <div className="position-relative ">
            <h2 className={styles.sec2_title} data-aos="fade" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="350">Our Commitment</h2>
            <img src={pseudo} alt="" className={styles.pseudo2} />
          </div>
          <div className={styles.line}></div>
          <div className={styles.sec2_info} data-aos="fade" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="500">In the era of digital metamorphosis, presence is not just about existing—it's about thriving. <a href="https://www.invosoft.tech/" className='il'>Invosoft</a>   is committed to boosting the vitality of your online presence. By channeling our combined expertise, creativity, and cutting-edge techniques, we ensure that your digital endeavors pulsate with life, resonating with your audience and achieving tangible business results.</div>
          <Link to='/get-in-touch'><button className={`btn ${styles.btn}`}>Get In Touch</button></Link>
        </div>
        <div className="col-lg-5 d-flex justify-content-center align-items-center">
          <img src={sec4Img} alt="" className={styles.img2} />
        </div>
      </div>
    </div>
    </>
  )
}
