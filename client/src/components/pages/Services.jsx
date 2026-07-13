import React, { useState } from 'react';
import styles from '../../assets/stylesheets/services.module.css'
import pseudo from '../../assets/pseudo.svg'
import robo2 from '../../assets/wwd_elements/robo_wwd.svg'
import robo from '../../assets/services_elements/robo.svg'
import s1 from '../../assets/services_elements/1.svg'
import s2 from '../../assets/services_elements/2.svg'
import s3 from '../../assets/services_elements/3.svg'
import s4 from '../../assets/services_elements/4.svg'
import s6 from '../../assets/services_elements/6.svg'
import hIcon1 from '../../assets/wwd_elements/wwd1.svg'
import hIcon2 from '../../assets/wwd_elements/wwd2.svg'
import icon3 from '../../assets/services_elements/icon3.png'
import icon5 from '../../assets/services_elements/icon5.png'
import icon7 from '../../assets/services_elements/icon7.png'
import icon1 from '../../assets/services_elements/icon8.png'
import icon9 from '../../assets/services_elements/icon9.png'
import wwd_one from '../../assets/wwd_elements/1.svg'
import wwd_two from '../../assets/wwd_elements/2.svg'
import 'react-alice-carousel/lib/alice-carousel.css';
import {Helmet} from "react-helmet";
import {HashLink} from 'react-router-hash-link'
import { Link } from 'react-router-dom';



export default function Services() {
  
const handleDragStart = (e) => e.preventDefault();

  const [box, setBox] = useState(
    {
      ico: icon1,
      title: 'Creative Design',
      btn1: 'Brand Identity',
      btn2: 'Brand collateral',
      btn3: 'Graphics Design',
      btn4: 'UI & UX'
    }
  );
  const clickHandler = ()=>{
    setBox({
      ico: icon1,
      title: 'Creative Design',
      btn1: 'Brand Identity',
      btn2: 'Brand collateral',
      btn3: 'Graphics Design',
      btn4: 'UI & UX'
    });
    document.getElementById('btn').style.display = 'flex';
    document.getElementById('btn2').style.display = 'flex';
    
  }
  const clickHandler2 = ()=>{
    setBox({
      ico: icon3,
      title: 'Content Creation',
      btn1: 'Video Editing',
      btn2: 'Motion Graphics',
      btn3: 'Social Media Content',
      btn4: 'Copywriting'
    }); 
    document.getElementById('btn').style.display = 'flex';
    document.getElementById('btn2').style.display = 'flex';
  }
  const clickHandler3 = ()=>{
    setBox({
      ico: icon7,
      title: 'Strategy',
      btn1: 'SEO',
      btn2: 'SMEO',
      btn3: 'Campaigns',
      btn4: 'Brand strategy and Positioning'
    });
    document.getElementById('btn').style.display = 'flex';
    document.getElementById('btn2').style.display = 'flex';
  }
  const clickHandler4 = ()=>{
    setBox({
      ico: icon5,
      title: 'Development',
      btn1: 'Website Development',
      btn2: 'Mobile Application',
    }); 
    document.getElementById('btn').style.display = 'none';
    document.getElementById('btn2').style.display = 'none';

  }
  const clickHandler5 = ()=>{
    setBox({
      ico: icon9,
      title: 'Marketing',
      btn1: 'Digital Marketing',
      btn2: 'Social Media Marketing',
    }); 
    document.getElementById('btn').style.display = 'none';
    document.getElementById('btn2').style.display = 'none';

  }

  
  
  return (
    <>
      <Helmet>
        <title>Services | Invosoft</title>
        <meta name="description" content="Explore Invosoft services: SEO, digital marketing, web development, and creative design. Elevate your brand now!"/>
        <meta name="robots" content="index, follow"/>
        <link rel="canonical" href="https://Invosoft.tech/services"/>
      </Helmet>
      <div className={`row ${styles.sec1}`}>
      <div className="col-sm-8 m-0 p-0 ">
      <h1 className={styles.title} data-aos="zoom-in-up" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="200">SERVICES</h1>
      <div className={`${styles.sub_heading} position-relative `}>
      <h3 className={styles.sub_title} data-aos="zoom-in-up" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="400">Standout in the digital landscape</h3>
      <img src={pseudo} alt="" className={styles.pseudo1} data-aos="fade" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="1000" />
      </div>
      <div className={styles.info}>
      Experience a seamless journey from concept to market dominance with our comprehensive digital solutions. Be more than just another brand, be a digital phenomenon.
      </div>
      </div>
      <div className="col-sm-4 position-relative p-0">
        <div className={styles.shapes}>
          <div className={styles.shape1}>
            <img src={s1} alt="" className={`${styles.shape}`} data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="600" />
            <img src={s2} alt="" className={`${styles.shape}`} data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="800" />
          </div>
          <div className={styles.shape2}>
            <img src={s6} alt="" className={`${styles.shape}`} data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="1100"/>
            <img src={s3} alt="" className={`${styles.shape}`} data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="1000" />
            <img src={s4} alt="" className={`${styles.shape}`} data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="1100"/>
          </div>
        </div>
      </div>
      </div>
    <div className={`container `}>
        <div className="row">

        
        <div className="col-lg-4">
            <img src={robo2} alt="" className={styles.robo2}/>
          </div>
          <div className="col-lg-4">
            <div className={styles.heroBox}>
              <div className={`${styles.shapesM}`}>
                <img src={wwd_one} alt="" className={`${styles.shapeM} ${styles.res_d}`} data-aos="fade-right" data-aos-easing="ease-in-out"     data-aos-duration="1000" data-aos-delay="1100"/>
                <img src={wwd_two} alt="" className={`${styles.shapeM} ${styles.res_d}`} data-aos="fade-right" data-aos-easing="ease-in-out"     data-aos-duration="1000" data-aos-delay="1100"/>
              </div>
              <img src={hIcon1} alt="" className={styles.hIco}/>
              <h3 className={styles.h_title}>Startup Launchpad</h3>
              <div className={styles.h_subTitle}>From ideas to impactful businesses</div>
              <Link to='/bring-idea-to-life'><button className={styles.h_btn}>Read More...</button></Link> 
            </div>
          </div>
          <div className="col-lg-4">
            <div className={styles.heroBox}>
              <img src={hIcon2} alt="" className={styles.hIco}/>
              <h3 className={styles.h_title}>Business Boost</h3>
              <div className={styles.h_subTitle}>Revitalize your established brand</div>
              <Link to='/increase-digital-energy'><button className={styles.h_btn}>Read More...</button></Link> 
            </div>
          </div>
          </div>
        
          
    <div className={styles.sec2}>
      <div className={styles.sec2M}>
        <img src={robo} alt="" className={styles.roboM} />
        <img src={s3} alt="" className={`${styles.roboRightM}`} data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="1000" />
      </div>
      <div className='position-relative mb-5'>
        <h2 className={styles.sec2_title}>High-impact services to take your business to the next level</h2>
        <img src={pseudo} alt="" className={styles.pseudo2} data-aos="fade" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="400"  />
      </div>

      <div className={`row`}>
        <div className={`col-md-6 ${styles.box_bg} col-lg-4`}>
          <div className={`${styles.box}`} data-aos="fade" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="200">
            <div className={styles.icon_bg}>
              <img src={icon1} alt="" className={styles.icon} />
            </div>
            <h5 className={styles.box_title}>Creative Design</h5>
            <HashLink to='/services/design#brand'><button className={`btn ${styles.btn}`} >
              Brand Identity
              </button></HashLink>
            <HashLink to='/services/design#social'><button className={`btn ${styles.btn}`} >
            Social Media Designs
              </button></HashLink>
            <Link to='/services/design'><button className={`btn ${styles.btn}`} >
            Graphics Design
              </button></Link>
            <HashLink to='/services/design#uiux'><button className={`btn ${styles.btn}`} >
            UI & UX
              </button></HashLink>
          </div>
        </div>
        <div className={`col-md-6 ${styles.box_bg} col-lg-4`}>
          <div className={`${styles.box}`} data-aos="fade" data-aos-easing="ease-in-out" data-aos-duration="1200" data-aos-delay="400">
            <div className={styles.icon_bg}>
              <img src={icon3} alt="" className={styles.icon} />
            </div>
            <h5 className={styles.box_title}>Content Creation</h5>
            <HashLink to='/services/content-creation#video-editing'><button className={`btn ${styles.btn}`} >
            Video Editing
              </button></HashLink>
            <HashLink to='/services/content-creation#motion-graphics'><button className={`btn ${styles.btn}`} >
            Motion Graphics
              </button></HashLink>
            <HashLink to='/services/content-creation#social-media-content'><button className={`btn ${styles.btn}`} >
            Social Media Content
              </button></HashLink>
            <HashLink to='/services/content-creation#copywriting'><button className={`btn ${styles.btn}`} >
            Copywriting
              </button></HashLink>
          </div>
        </div>
        <div className={`col-md-6 ${styles.box_bg} col-lg-4`}>
          <div className={`${styles.box}`} data-aos="fade" data-aos-easing="ease-in-out" data-aos-duration="1400" data-aos-delay="600">
            <div className={styles.icon_bg}>
              <img src={icon7} alt="" className={styles.icon} />
            </div>
            <h5 className={styles.box_title}>Strategy</h5>
            <Link to='/services/search-engine-optimization'><button className={`btn ${styles.btn}`} >
            SEO
              </button></Link>
            <HashLink to='/services/search-engine-optimization#smeo'><button className={`btn ${styles.btn}`} >
            SMEO
              </button></HashLink>
            <HashLink to='/services/search-engine-optimization#compaigns'><button className={`btn ${styles.btn}`} >
            Campaigns
              </button></HashLink>
            <HashLink to='/services/search-engine-optimization#Brand-strategy-and-Positioning'><button className={`btn ${styles.btn}`} >
            Brand strategy and Positioning
              </button></HashLink>
          </div>
        </div>
        <div className={`col-md-6 ${styles.box_bg} col-lg-4`}>
          <div className={`${styles.box}`} data-aos="fade" data-aos-easing="ease-in-out" data-aos-duration="1600" data-aos-delay="200" >
            <div className={styles.icon_bg}>
              <img src={icon5} alt="" className={styles.icon} />
            </div>
            <h5 className={styles.box_title}>Development</h5>
            <Link to='/services/development'><button className={`btn ${styles.btn}`} >
            Website Development
              </button></Link>
            <HashLink to='/services/development#mobile-application-development'><button className={`btn ${styles.btn}`} >
            Mobile Application
              </button></HashLink>
          </div>
        </div>
        <div className={`col-md-6 ${styles.box_bg} col-lg-4`}>
          <div className={`${styles.box}`}  data-aos="fade" data-aos-easing="ease-in-out" data-aos-duration="1800" data-aos-delay="500">
            <div className={styles.icon_bg}>
              <img src={icon9} alt="" className={styles.icon} />
            </div>
            <h5 className={styles.box_title}>Marketing</h5>
            <Link to='/services/Marketing'><button className={`btn ${styles.btn}`} >
            Digital Marketing
              </button></Link>
            <HashLink to='/services/Marketing#social-media-marketing'><button className={`btn ${styles.btn}`} >
            Social Media Marketing
              </button></HashLink>
           
          </div>
        </div>
        <div className={`col-md-6 ${styles.robo_bg} col-lg-4`}>
          <img src={robo} alt="" className={styles.robo} />
        </div>


      </div>
        

    </div>
    </div>
    </>
  )
}
