import React from 'react'
import styles from '../../../assets/stylesheets/bitl.module.css'
import one from '../../../assets/1.svg'
import two from '../../../assets/2.svg'
import three from '../../../assets/3.svg'
import four from '../../../assets/4.svg'
import five from '../../../assets/5.svg'
import six from '../../../assets/6.svg'
import seven from '../../../assets/7.svg'
import robo from '../../../assets/wwd_elements/robo2.svg'
import mob_shapes from '../../../assets/wwd_elements/mobile_shapes.svg'
import up from '../../../assets/wwd_elements/up.svg'
import right from '../../../assets/wwd_elements/right.svg'
import left from '../../../assets/wwd_elements/left.svg'
import {Helmet} from "react-helmet";
import { Link } from 'react-router-dom';


export default function BringIdeaToLife() {
  return (
    <>
    <Helmet>
        <title>Turn Your Business Idea into Reality with Invosoft | Comprehensive Digital Solutions</title>
        <meta name="description" content="Transform your idea into success with Invosoft. Specializing in branding, SEO websites, apps, and more. Start now!"/>
        <link rel="canonical" href="https://Invosoft.tech/bring-idea-to-life" />

    </Helmet>
    <div className="container">
        <div className="row mt-5">
            <div className={`col-0 col-md-3 position-relative res-n`}>
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
                   
                </div>
            </div>
            <div className="col-12 col-sm-6">
                <h1 className={styles.title} data-aos="zoom-in-up" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="200">
                    Bring your ideas to life
                </h1>
                <div className={styles.sub_title} data-aos="zoom-in-up" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="400">
                    We provide you the Digital Energy and guidance to turn that idea into a reality. 
                </div>
            </div>
            <div className="col-6 res-d">
                <div className='position-relative'>
                    <img src={mob_shapes} alt="" className={styles.mob_shapes}/>
                </div>
            </div>
            <div className="col-6 col-sm-3">
                <div className='position-relative'>
                    <img src={robo} alt="" className={styles.robo}/>
                    <img src={up} alt="" className={styles.up}/>
                    <img src={right} alt="" className={styles.right}/>
                    <img src={left} alt="" className={styles.left}/>
                </div>
            </div>
        </div>
        <div className={`row ${styles.sec2}`}>
            <div className="col-0 col-sm-4"></div>
            <div className="col-12 col-sm-8">
                <div className={styles.sec2_info}>
                    <div className={styles.info1} data-aos="fade-up" data-aos-easing="linear"
                    data-aos-duration="800" data-aos-delay="150">
                    Perhaps you always daydream about that perfect business, but then the next step forward seems daunting.
                    </div>
                    <div className={styles.info2} >
                        <div data-aos="fade-up" data-aos-easing="linear"
                    data-aos-duration="800" data-aos-delay="250">It's too confusing</div> 
                        <div data-aos="fade-up" data-aos-easing="linear"
                    data-aos-duration="800" data-aos-delay="350">It's too costly</div>
                        <div data-aos="fade-up" data-aos-easing="linear"
                    data-aos-duration="800" data-aos-delay="450">It's takes too much time</div>
                        <div data-aos="fade-up" data-aos-easing="linear"
                    data-aos-duration="800" data-aos-delay="550">You don't even know what to do or where to start</div>
                    </div>
                    <div className={styles.info3} data-aos="fade-up" data-aos-easing="linear"
                    data-aos-duration="800" data-aos-delay="700">
                    <div>What you need is one place where all the magic can happen.</div>
                    <div>We provide you the Digital Energy and guidance to turn the idea into a reality.</div>
                    </div>
                </div>
            </div>
            <h2 className={styles.sec2_title} data-aos="fade-up" data-aos-easing="linear"
                    data-aos-duration="800" data-aos-delay="200">This is how it goes</h2>
            <div className={styles.items}>
                <div className={styles.counting}>1</div>
                <div className={styles.item_info} data-aos="fade-right" data-aos-easing="linear"
                    data-aos-duration="800" data-aos-delay="300">You holla at us and tell us what you want to do</div>
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
                    data-aos-duration="800" data-aos-delay="500">We develop your branding</div>
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
                    data-aos-duration="800" data-aos-delay="600">We design intuitive SEO enabled websites</div>
            </div>
            <div className={styles.border}>
                <div className={styles.dash}></div>
                <div className={`${styles.dash} ${styles.dash2}`}></div>
                <div className={`${styles.dash} `}></div>
                <div className={`${styles.dash} ${styles.dash2}`}></div>
                <div className={styles.dash}></div>
            </div>
            <div className={styles.items}>
                <div className={styles.counting}>4</div>
                <div className={`${styles.item_info2} ${styles.item_info3}`} data-aos="fade-left" data-aos-easing="linear"
                    data-aos-duration="800" data-aos-delay="700">We create any applications you may need</div>
            </div>
            <div className={styles.border}>
                <div className={styles.dash}></div>
                <div className={`${styles.dash} ${styles.dash2} `}></div>
                <div className={`${styles.dash} `}></div>
                <div className={`${styles.dash} ${styles.dash2}`}></div>
                <div className={styles.dash}></div>
            </div>
            <div className={styles.items}>
                <div className={styles.counting}>5</div>
                <div className={styles.item_info} data-aos="fade-right" data-aos-easing="linear"
                    data-aos-duration="800" data-aos-delay="800">We get the socials going</div>
            </div>
            <div className={styles.border}>
                <div className={styles.dash}></div>
                <div className={`${styles.dash} ${styles.dash2}`}></div>
                <div className={`${styles.dash} `}></div>
                <div className={`${styles.dash} ${styles.dash2}`}></div>
                <div className={styles.dash}></div>
            </div>
            <div className={styles.items}>
                <div className={styles.counting}>6</div>
                <div className={`${styles.item_info2} ${styles.item_info3}`} data-aos="fade-left" data-aos-easing="linear"
                    data-aos-duration="800" data-aos-delay="900">We manage your ads across chosen platforms</div>
            </div>
            <div className={styles.border}>
                <div className={styles.dash}></div>
                <div className={`${styles.dash} ${styles.dash2}`}></div>
                <div className={`${styles.dash} `}></div>
                <div className={`${styles.dash} ${styles.dash2}`}></div>
                <div className={styles.dash}></div>
            </div>
            <div className={styles.items}>
                <div className={styles.counting}>7</div>
                <div className={styles.item_info} data-aos="fade-right" data-aos-easing="linear"
                    data-aos-duration="800" data-aos-delay="1000">We manage the whole digital presence</div>
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
