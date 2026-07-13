import React from 'react'
import styles from '../../../assets/stylesheets/ide.module.css'
import one from '../../../assets/1.svg'
import two from '../../../assets/2.svg'
import three from '../../../assets/3.svg'
import four from '../../../assets/4.svg'
import five from '../../../assets/5.svg'
import six from '../../../assets/6.svg'
import seven from '../../../assets/7.svg'
import robo from '../../../assets/wwd_elements/robo3.gif'
import mob_shapes from '../../../assets/wwd_elements/mobile_shape2.svg'
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";




export default function IncreaseDigitalEnergy() {
  return (
    <>
     <Helmet>
        <title>Revitalize Your Business with Invosoft | Strategy & Online Management</title>
        <meta name="description" content="Boost your business with Invosoft! We review operations, strategize profile enhancement, and manage your online presence. Elevate now!"/>
        <link rel="canonical" href="https://invosoft.tech/increase-digital-energy" />

    </Helmet>
    <div className="container">
        <div className="row mt-5">
        <div className="col-12">
                <h1 className={styles.title} data-aos="zoom-in-up" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="200">
                    Increase Your Digital Energy
                </h1>
                <div className={styles.sub_title} data-aos="zoom-in-up" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="400">
                    Have a mildly successful operation going, but reached a roadblock?
                </div>
            </div>
            <div className={`col-6 position-relative res-n`}>
            <div className={`${styles.shape}`}>
                <div className={styles.layers}>
                    <img src={one} alt=""  className={styles.shapes}  data-aos="fade-right" data-aos-easing="linear"
                data-aos-duration="800" data-aos-delay="200" />
                    <img src={two} alt=""  className={styles.shapes}  data-aos="fade-left" data-aos-easing="linear"
                data-aos-duration="800" data-aos-delay="300" />
                    </div>
                    <div className={styles.layers}>
                    <img src={three} alt=""  className={styles.shapes}  data-aos="fade-right" data-aos-easing="linear"
                data-aos-duration="800" data-aos-delay="550" />
                    <img src={four} alt=""  className={styles.shapes}  data-aos="fade-right" data-aos-easing="linear"
                data-aos-duration="800" data-aos-delay="450" />
                    <img src={five} alt=""  className={styles.shapes}  data-aos="fade-up" data-aos-easing="linear"
                data-aos-duration="800" data-aos-delay="550" />
                    </div>
                    <div className={styles.layers}>
                    <img src={six} alt=""  className={styles.shapes}  data-aos="fade-up" data-aos-easing="linear"
                data-aos-duration="800" data-aos-delay="700" />
                    <img src={seven} alt="" className={styles.shapes}  data-aos="fade-up" data-aos-easing="linear"
                data-aos-duration="800" data-aos-delay="900" />
                    </div>
                    {/* <div className='splineBg3'>
                        <Spline scene="https://prod.spline.design/R-4gazHTq4rtdW2k/scene.splinecode" />
                    </div>  */}
                </div>
            </div>
            
            <div className="col-6 res-d">
                <div className='position-relative'>
                    <img src={mob_shapes} alt="" className={styles.mob_shapes}/>
                </div>
            </div>
            <div className="col-6 ">
                <div className={`${styles.robot} position-relative`}>
                    <img src={robo} alt="" className={styles.robo} data-aos="fade-up" data-aos-easing="linear"
                data-aos-duration="3800" data-aos-delay="200" />
                </div>
            </div>
        </div>
        <div className={`row ${styles.sec2}`}>
            <div className="col-0 col-sm-4"></div>
            <div className="col-12 col-sm-8">
                <div className={styles.sec2_info}>
                    <div className={styles.info1} data-aos="fade-up" data-aos-easing="linear"
                    data-aos-duration="800" data-aos-delay="250">
                    Don't know how to advertise and what to advertise?
                    </div>
                    <div className={styles.info2} data-aos="fade-up" data-aos-easing="linear"
                    data-aos-duration="800" data-aos-delay="400">
                    Managing the whole business is costing you more time and effort than it's worth?
                    </div>
                </div>
            </div>
            <h2 className={styles.sec2_title} data-aos="fade-up" data-aos-easing="linear"
                    data-aos-duration="800" data-aos-delay="200">This is how it goes</h2>
            <div className={styles.items}>
                <div className={styles.counting}>1</div>
                <div className={styles.item_info} data-aos="fade-right" data-aos-easing="linear"
                    data-aos-duration="800" data-aos-delay="300">Review the whole operation</div>
            </div>
            <div className={styles.border}>
                <div className={styles.dash}></div>
                <div className={`${styles.dash} ${styles.dash2}`}></div>
                <div className={`${styles.dash} `}></div>
                <div className={`${styles.dash} ${styles.dash2}`}></div>
                <div className={styles.dash}></div>
            </div>
            <div className={styles.items}>
                <div className={styles.counting}>2</div>
                <div className={styles.item_info2} data-aos="fade-left" data-aos-easing="linear"
                    data-aos-duration="800" data-aos-delay="500">Provide a strategy to enhance your profile and manage your online presence</div>
            </div>
            <div className={styles.border}>
                <div className={styles.dash}></div>
                <div className={`${styles.dash} ${styles.dash2}`}></div>
                <div className={`${styles.dash} `}></div>
                <div className={`${styles.dash} ${styles.dash2}`}></div>
                <div className={styles.dash}></div>
            </div>
            <div className={styles.items}>
                <div className={styles.counting}>3</div>
                <div className={styles.item_info} data-aos="fade-right" data-aos-easing="linear"
                    data-aos-duration="800" data-aos-delay="700">Implement what you want, leave what you don’t</div>
            </div>
            <div className={`${styles.button}`}>
                <Link to='/what-we-do'><button className={`${styles.btn1} `}>Go Back</button></Link> 
                <Link to='/get-in-touch'><button className={`${styles.btn} `}>Get In Touch</button></Link>
            </div>
            
            
        </div>
    </div>
    </>
  )
}
