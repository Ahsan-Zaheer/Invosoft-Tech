import React from 'react'
import styles from '../../assets/stylesheets/wwd.module.css'
import pseudo from '../../assets/pseudo.svg'
import robo from '../../assets/wwd_elements/robo_wwd.svg'
import wwd1 from '../../assets/wwd_elements/wwd1.svg'
import wwd2 from '../../assets/wwd_elements/wwd2.svg'
import wwd3 from '../../assets/wwd_elements/wwd3.svg'
import wwd_one from '../../assets/wwd_elements/1.svg'
import wwd_two from '../../assets/wwd_elements/2.svg'
import one from '../../assets/10.svg'
import two from '../../assets/8.svg'
import three from '../../assets/3.svg'
import four from '../../assets/4.svg'
import five from '../../assets/5.svg'
import six from '../../assets/6.svg'
import seven from '../../assets/11.svg'
import shadow from '../../assets/shadow.svg'
import {Helmet} from "react-helmet";
import { Link } from 'react-router-dom';



export default function WhatWeDo() {
  return (
    <>
    <Helmet>
        <title>What We Do</title>
        <meta name="description" content="Discover how Digital Energy in Sydney transforms ideas into reality and elevates your digital presence. Expertise to grow your business."/>
        <meta name="robots" content="index, follow"/>
        <link rel="canonical" href="https://digitalenergy.au/what-we-do" />
    </Helmet>
    <div className={styles.top}>
    <div>
    <h1 className={styles.title} data-aos="zoom-in-up" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="200">What We Do</h1>
    <div className="position-relative">
    <h2 className={styles.sub_title} data-aos="zoom-in-up" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="400">This Is What We Do</h2>
    <img src={pseudo} alt="" className={styles.pseudo} data-aos="fade" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="1000" />
    </div>
    </div>
    </div>
    <div className="container mt-5">
        <div className="row">
            <div className="col-lg-3">
                <div className={`position-relative ${styles.wwd_first}`}>
                <img src={robo} alt="" className={styles.robo} />
                <img src={shadow} alt="" className={styles.shadow} />
                <div className={`res-d ${styles.robo_right}`} >
                <img src={wwd_one} alt="" />
                <img src={wwd_two} alt="" />
                </div>
                </div>
            </div>
            <div className="col-lg-3">
                
                <Link to='/bring-idea-to-life'> <div className={`${styles.box} ${styles.flip_card}`}>
                    <div className={styles.flip_card_inner}>
                        <div className={styles.flip_card_front}>
                            <img src={wwd1} alt="" className={styles.box_ico}/>
                            <h3 className={styles.box_info}>Bring Your Idea To Life</h3>
                        </div>
                        <div className={styles.flip_card_back}>
                            <img src={wwd1} alt="" className={styles.box_ico}/>
                            <h3 className={styles.box_info}>Bring Your Idea To Life</h3>
                        </div>
                    </div>
                </div></Link>
                
            </div>
            <div className="col-lg-3">
            <Link to='/increase-digital-energy'> <div className={`${styles.box} ${styles.flip_card}`}>
                    <div className={styles.flip_card_inner}>
                        <div className={styles.flip_card_front}>
                            <img src={wwd2} alt="" className={styles.box_ico}/>
                            <h3 className={styles.box_info}>Increase Your Digital Energy</h3>
                        </div>
                        <div className={styles.flip_card_back}>
                            <img src={wwd2} alt="" className={styles.box_ico}/>
                            <h3 className={styles.box_info}>Increase Your Digital Energy</h3>
                        </div>
                    </div>
                </div></Link>
            </div>
            <div className="col-lg-3">
            <Link to='/services'> <div className={`${styles.box} ${styles.flip_card} ${styles.last_box}`}>
                    <div className={styles.flip_card_inner}>
                        <div className={styles.flip_card_front}>
                            <img src={wwd3} alt="" className={styles.box_ico}/>
                            <h3 className={styles.box_info}>Provide Expert Services</h3>
                        </div>
                        <div className={styles.flip_card_back}>
                            <img src={wwd3} alt="" className={styles.box_ico}/>
                            <h3 className={styles.box_info}>Provide Expert Services</h3>
                        </div>
                    </div>
                </div></Link>
            </div>
            <div className="col-3"></div>
            <div className="col-9">
            <Link to='/get-in-touch'><button className={styles.btn}>Get In Touch</button></Link>
            </div>
            <div className={styles.shape}>



                <div className={styles.layer1}>
                <img src={one} alt=""  data-aos="fade-up" data-aos-easing="linear"
                data-aos-duration="800" data-aos-delay="2000" />
                    <img src={six} alt=""  className={styles.shapes}  data-aos="fade-up" data-aos-easing="linear"
                data-aos-duration="800" data-aos-delay="1800" />
                </div>



                <div className={styles.layer2}>
                <img src={five} alt=""  className={styles.shapes}  data-aos="fade-up" data-aos-easing="linear"
                data-aos-duration="800" data-aos-delay="1550" />
                <div className='d-flex'>
                <img src={three} alt=""  className={styles.shapes}  data-aos="fade-right" data-aos-easing="linear"
            data-aos-duration="800" data-aos-delay="1300" />
                <img src={four} alt=""  className={styles.shapes}  data-aos="fade-right" data-aos-easing="linear"
            data-aos-duration="800" data-aos-delay="1200" />
                </div>
                </div>

                
        <div className={styles.layer3}>
            <img src={two} alt=""  className={styles.shapes}  data-aos="fade-left" data-aos-easing="linear"
        data-aos-duration="800" data-aos-delay="1000" />
                <img src={seven} alt=""  className={`${styles.shapes} ${styles.shape_rotate}`}  data-aos="fade-right" data-aos-easing="linear"
            data-aos-duration="800" data-aos-delay="500" />
        </div>
        </div>
        </div>
    </div>
    </>
  )
}
