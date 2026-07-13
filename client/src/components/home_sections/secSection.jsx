import React, { useState, useEffect } from 'react'
import styles from '../../assets/stylesheets/home.module.css'
import pseudo from '../../assets/pseudo.svg'
import robo2 from '../../assets/robo2.svg'
import bulb from '../../assets/bulb.svg'
import brain from '../../assets/brain.svg'
import PaperPlane from '../../assets/PaperPlan.svg'


const secSection = () => {
  
  return (
    <div className={`${styles.sec_section} container p-0`} >
        <div className={`${styles.innerSec}`}>
            <div className={styles.inner2}>
            <h2 className={styles.sec2title} data-aos="fade-left" data-aos-easing="linear"
                    data-aos-duration="800" data-aos-delay="200" id='sec2'>
                    {/* <span data-aos="fade" data-aos-easing="linear" data-aos-duration="800" data-aos-delay="300">Digital </span> */}
                    <span data-aos="fade" data-aos-easing="linear" data-aos-duration="800" data-aos-delay="400">Creative </span>
                    <span data-aos="fade" data-aos-easing="linear" data-aos-duration="800" data-aos-delay="600">Agency</span>
                    <span data-aos="fade" data-aos-easing="linear" data-aos-duration="800" data-aos-delay="900"> Invosoft</span>     
                    </h2>
            <img src={pseudo} alt="" className={styles.pseudo} />
            </div>
            <div className={`row m-0 px-0 pt-2 ${styles.innerSec2}`}>
                  <div className={`col-lg-4 m-0 p-0 ${styles.sec1}`}>
                    <h1>More than a digital marketing agency—Energise, Engage, Excel With Services That Speak</h1>
                    <p> At Invosoft, we're not just any digital marketing agency; we're your gateway to digital excellence. With a focus on delivering end-to-end online business development services, we ensure your journey from concept to conversion is seamless, impactful, and innovative. We embody the energetic, dynamic, and forward-thinking spirit of the city, infusing it into every strategy, design, and campaign we craft.</p>
                    <p className={`${styles.sec2_info}`}>We believe in the power of digital to transform ideas into profitable realities. At Invosoft, we build and manage digital presences that are as lucrative as they are innovative. We don't just keep up in an ever-changing digital landscape; we lead the way. Our aim is clear: to be the digital marketing agency of the future. We're committed to exceeding your transparency, agility, and value expectations. Our approach is not just about meeting targets; it's about setting new benchmarks in the digital realm. </p>
                  </div>
                  <div className={`col-lg-6 m-0 p-0 ${styles.sec2}`}>
                        <div className="row m-0 p-0">
                          <div className={`col-lg-6 m-0 p-0 ${styles.robot}`}>
                          <img src={robo2} alt="" className={styles.robo2}/>
                          </div>
                          <div className="col-lg-6 m-0 p-0">
                            <div className={styles.box}>
                                <img src={bulb} alt="" className={styles.ico} />
                                <h4 className={styles.box_title}>Innovative Solutions</h4>
                                <div className={styles.box_info}>We pioneer innovative solutions to ensure your digital presence is not only current but also prepared for the future. We listen, understand, and deliver solutions resonating your needs</div>
                            </div>
                          </div>
                          <div className="col-lg-6 m-0 p-0">
                          <div className={`${styles.box} ${styles.box_2}`}>
                                <img src={PaperPlane} alt="" className={styles.plan} />
                                <h4 className={styles.box_title}>Beyond Visible, <br /> Towards Perfection</h4>
                                <div className={styles.box_info}>It's not just about being online; it's about owning the online.</div>
                            </div>
                          </div>
                          <div className="col-lg-6 m-0 p-0">
                          <div className={styles.box2}>
                                <img src={brain} alt="" className={styles.ico} />
                                <h4 className={styles.box_title}>Brilliant Minds</h4>
                                <div className={styles.box_info}>Turning 'what ifs' into 'what is'.Charting new territories in creativity and performance</div>
                            </div>
                          </div>
                        </div>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default secSection;