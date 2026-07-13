import React, { Suspense } from 'react';
import styles from '../../assets/stylesheets/home.module.css';
import pseudo from '../../assets/pseudo.svg';
import wwo1 from '../../assets/WWO1.gif'
import wwo2 from '../../assets/WWO2.gif'
import wwo3 from '../../assets/WWO3.gif'



const ForthSection = () => {
  return (
    <div className={`${styles.services} container`}>
        <div className='position-relative d-inline'>
        <h2 className={styles.services_title} data-aos="fade-left" data-aos-easing="linear"
                    data-aos-duration="800" data-aos-delay="200">
        <span data-aos="fade" data-aos-easing="linear" data-aos-duration="800" data-aos-delay="300">What </span>
            <span data-aos="fade" data-aos-easing="linear" data-aos-duration="800" data-aos-delay="400">we </span>
            <span data-aos="fade" data-aos-easing="linear" data-aos-duration="800" data-aos-delay="500">offer </span>
            <span data-aos="fade" data-aos-easing="linear" data-aos-duration="800" data-aos-delay="700">you </span>
        </h2>
        <img src={pseudo} alt="" className={styles.service_pseudo}/>
        </div>
        <div className={`row ${styles.menu}`}>
            <div  className={`col-lg-4`}>
              <div className={styles.menu_item} >
                <h2 className={`${styles.menu_title}`}>Your Online Identity</h2>
                <div className={styles.menuItemBg}>
                  <img src={wwo1} alt="" className={styles.wwo} />
                </div>
              </div>
            </div>
            <div  className={`col-lg-4`}>
              <div className={styles.menu_item} >
                <h2 className={`${styles.menu_title}`}>Marketing Strategies That Scale</h2>
                <div className={styles.menuItemBg}>
                  <img src={wwo2} alt="" className={styles.wwo} />
                </div>
              </div>
            </div>
            <div  className={`col-lg-4`}>
              <div className={styles.menu_item} >
                <h2 className={`${styles.menu_title}`}>Content That Converts</h2>
                <div className={styles.menuItemBg}>
                  <img src={wwo3} alt="" className={styles.wwo} />
                </div>
              </div>
            </div>
        </div>
    </div>
  );
};

export default ForthSection;
