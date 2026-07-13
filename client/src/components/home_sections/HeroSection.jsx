import styles from '../../assets/stylesheets/home.module.css'
import robo from '../../assets/robo.svg'
import arrow from '../../assets/arrow.svg'
import one from '../../assets/1.svg'
import two from '../../assets/2.svg'
import three from '../../assets/3.svg'
import four from '../../assets/4.svg'
import five from '../../assets/5.svg'
import six from '../../assets/6.svg'
import seven from '../../assets/7.svg'
import shadow from '../../assets/shadow.svg'
import shapes from '../../assets/shapes_mobile.svg';





export default function HeroSection(props) {


   
    return(
        <>
            <div className={`container ${styles.inner_hero_sec}`}>
                    <div className='row mt-lg-5 mt-md-0'>
                    <div className={`col-12 col-md-6 col-lg-5 mt-3  ${styles.hero_left}`}>
                    <div className={styles.innerSec1}>                         
                   
                    <h1 className={styles.title} data-aos="fade-left" data-aos-easing="linear"
                    data-aos-duration="800" data-aos-delay="100"  >
                        <span>Energize Your </span>
                        <span>Digital Presence</span>
                    </h1>

                    <img src={robo} alt="Invosoft | Digital Marketing Agency" className={` ${styles.roboHero}`} id="robo" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="800" data-aos-delay="1500" />
                   
                    <div className={styles.sec1Info} data-aos="fade-left" data-aos-easing="linear"
                    data-aos-duration="800" data-aos-delay="200" >
                        <span data-aos="fade" data-aos-easing="linear" data-aos-duration="800" data-aos-delay="300">Grow </span>
                        <span data-aos="fade" data-aos-easing="linear" data-aos-duration="800" data-aos-delay="400">your </span>
                        <span data-aos="fade" data-aos-easing="linear" data-aos-duration="800" data-aos-delay="500">business </span>
                        <span data-aos="fade" data-aos-easing="linear" data-aos-duration="800" data-aos-delay="600">online, </span>
                        <br /> 
                        <span data-aos="fade" data-aos-easing="linear" data-aos-duration="800" data-aos-delay="800">be </span>
                        <span data-aos="fade" data-aos-easing="linear" data-aos-duration="800" data-aos-delay="900">influential, </span>
                        <span data-aos="fade" data-aos-easing="linear" data-aos-duration="800" data-aos-delay="1000">be </span>
                        <span data-aos="fade" data-aos-easing="linear" data-aos-duration="800" data-aos-delay="1100">unforgettable.</span>
                    </div>
                    <a href='#sec2' data-aos="fade-right" data-aos-easing="linear" data-aos-duration="800" data-aos-delay="950"><button className={`btn rounded-pill btn-1`} >START NOW <img src={arrow} alt="arrow-up-right" className={styles.arrow} /></button></a>

                    </div>
                    </div>
                    <div className={`col-5 col-md-6 col-lg-3 position-relative ${styles.hero_middle}`}>
                    <img src={robo} alt="Invosoft | Digital Marketing Agency" className={` ${styles.robo}`} id="robo" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="800" data-aos-delay="1500" />
                    <img src={shadow} alt=""className={styles.shadow} />
                    </div>
                    
                    <div className={`${styles.shape} col-4 col-md-4 `}>
                    <div className={styles.shapesWrapper}>
                        <div className={styles.layers}>
                        <img src={one} alt=""  className={`${styles.shapes} ${styles.shape1}`}  data-aos="fade-right" data-aos-easing="linear"
                    data-aos-duration="800" data-aos-delay="100" />
                        <img src={two} alt=""  className={styles.shapes}  data-aos="fade-left" data-aos-easing="linear"
                    data-aos-duration="800" data-aos-delay="200" />
                        </div>
                        <div className={styles.layers}>
                        <img src={three} alt=""  className={styles.shapes}  data-aos="fade-right" data-aos-easing="linear"
                    data-aos-duration="800" data-aos-delay="350" />
                        <img src={four} alt=""  className={styles.shapes}  data-aos="fade-right" data-aos-easing="linear"
                    data-aos-duration="800" data-aos-delay="450" />
                        <img src={five} alt=""  className={`${styles.shapes} ${styles.shape5}`}   data-aos="fade-up" data-aos-easing="linear"
                    data-aos-duration="800" data-aos-delay="550" />
                        </div>
                        <div className={styles.layers}>
                        <img src={six} alt=""  className={styles.shapes}  data-aos="fade-up" data-aos-easing="linear"
                    data-aos-duration="800" data-aos-delay="700" />
                        <img src={seven} alt="" className={styles.shapes}  data-aos="fade-up" data-aos-easing="linear"
                    data-aos-duration="800" data-aos-delay="800" />
                        </div>

                    </div>
                    
                       
                    </div>
                    <div className="col-12">
                        <img src={shapes} alt="" className={`mt-3 ${styles.shapes_mobile} ${styles.res_d}`}/>
                      
                    </div>
                    </div>
            </div>    
        </>
    );
}