import React, { useState } from 'react'
import styles from '../../assets/stylesheets/home.module.css'
import pseudo from '../../assets/pseudo.svg'
import robo from '../../assets/robo3.svg'
import tb1 from '../../assets/tb1.svg'
import tb2 from '../../assets/tb2.svg'
import tb3 from '../../assets/tb3.svg'
import tb4 from '../../assets/tb4.svg'
import tb5 from '../../assets/tb5.svg'
import heroImg from '../../assets/heroImg.svg'
import rightIco from '../../assets/rightIco.svg'
import leftIco from '../../assets/leftIco.svg'
import shadow from '../../assets/shadow.svg'
import { HashLink } from 'react-router-hash-link'



const ThirdSection = () => {

    const [services, setServices] = useState({
        hero_img: heroImg,
        title: 'Creative Design',
        info:  <div> 
            <HashLink to='/services/design#brand' ><div className={styles.innerItem}>Brand Identity and collateral</div></HashLink>
            <HashLink to='/services/design#brand' ><div className={styles.innerItem}>Graphics Design</div></HashLink>
            <HashLink to='/services/design' ><div className={styles.innerItem}>Graphics Design</div></HashLink>
            <HashLink to='/services/design#brand' ><div className={styles.innerItem}>UI & UX</div></HashLink>
             </div>
    })

    const sitem1 = document.getElementById('sitem1');
    const sitem2 = document.getElementById('sitem2');
    const sitem3 = document.getElementById('sitem3');
    const sitem4 = document.getElementById('sitem4');
    const sitem5 = document.getElementById('sitem5');
    const sitem6 = document.getElementById('sitem6');



    const handlesitem1 = ()=>{
        setServices({
            hero_img: tb1,
            title: 'Creative Design',
            info: <div> 
            <HashLink to='/services/design#brand' ><div className={styles.innerItem}>Brand Identity and collateral</div></HashLink>
            <HashLink to='/services/design#social' ><div className={styles.innerItem}>Social Media Designs</div></HashLink>
            <HashLink to='/services/design' ><div className={styles.innerItem}>Graphics Design</div></HashLink>
            <HashLink to='/services/design#uiux' ><div className={styles.innerItem}>UI & UX</div></HashLink>
             </div>
        })
        sitem1.style.backgroundColor = '#1FA4E5';
        sitem2.style.backgroundColor = '#5A39EA';
        sitem3.style.backgroundColor = '#5A39EA';
        sitem4.style.backgroundColor = '#5A39EA';
        sitem5.style.backgroundColor = '#5A39EA';
        sitem6.style.backgroundColor = '#5A39EA';
    }
    const handlesitem2 = ()=>{
        setServices({
            hero_img: tb2,
            title: 'Content Creation',
            info: 
            <div> 
            <HashLink to='/services/content-creation#video-editing' ><div className={styles.innerItem}>Video Editing</div></HashLink>
            <HashLink to='/services/content-creation#motion-graphics' ><div className={styles.innerItem}>Motion Graphics</div></HashLink>
            <HashLink to='/services/content-creation#social-media-content' ><div className={styles.innerItem}>Social Media Content</div></HashLink>
            <HashLink to='/services/content-creation#copywriting' ><div className={styles.innerItem}>Copywriting</div></HashLink>
            </div>
        })
        sitem1.style.backgroundColor = '#5A39EA';
        sitem2.style.backgroundColor = '#1FA4E5';
        sitem3.style.backgroundColor = '#5A39EA';
        sitem4.style.backgroundColor = '#5A39EA';
        sitem5.style.backgroundColor = '#5A39EA';
        sitem6.style.backgroundColor = '#5A39EA';
    }
    const handlesitem3 = ()=>{
        setServices({
            hero_img: tb3,
            title: 'Marketing',
            info:  <div> 
            <HashLink to='/services/Marketing' ><div className={styles.innerItem}>Digital Marketing</div></HashLink>
            <HashLink to='/services/Marketing#social-media-marketing' ><div className={styles.innerItem}>Social Media Marketing</div></HashLink>
            </div>
        })
        sitem1.style.backgroundColor = '#5A39EA';
        sitem2.style.backgroundColor = '#5A39EA';
        sitem3.style.backgroundColor = '#1FA4E5';
        sitem4.style.backgroundColor = '#5A39EA';
        sitem5.style.backgroundColor = '#5A39EA';
        sitem6.style.backgroundColor = '#5A39EA';
    }
    const handlesitem4 = ()=>{
        setServices({
            hero_img: tb4,
            title: 'Strategy',
            info: <div> 
            <HashLink to='/services/search-engine-optimization' ><div className={styles.innerItem}>SEO</div></HashLink>
            <HashLink to='/services/search-engine-optimization#smeo' ><div className={styles.innerItem}>SMEO</div></HashLink>
            <HashLink to='/services/search-engine-optimization#compaigns' ><div className={styles.innerItem}>Campaigns</div></HashLink>
            <HashLink to='/services/search-engine-optimization#Brand-strategy-and-Positioning' ><div className={styles.innerItem}>Brand strategy and Positioning</div></HashLink>
            </div>
        })
        sitem1.style.backgroundColor = '#5A39EA';
        sitem2.style.backgroundColor = '#5A39EA';
        sitem3.style.backgroundColor = '#5A39EA';
        sitem4.style.backgroundColor = '#1FA4E5';
        sitem5.style.backgroundColor = '#5A39EA';
        sitem6.style.backgroundColor = '#5A39EA';
    }
    const handlesitem5 = ()=>{
        setServices({
            hero_img: tb5,
            title: 'Development',
            info: 
            <div> 
                <HashLink to='/services/development' ><div className={styles.innerItem}>Website Development</div></HashLink>
                <HashLink to='/services/development#mobile-application-development' ><div className={styles.innerItem}>Mobile Application</div></HashLink>
            </div>
        })
        sitem1.style.backgroundColor = '#5A39EA';
        sitem2.style.backgroundColor = '#5A39EA';
        sitem3.style.backgroundColor = '#5A39EA';
        sitem4.style.backgroundColor = '#5A39EA';
        sitem5.style.backgroundColor = '#1FA4E5';
        sitem6.style.backgroundColor = '#5A39EA';
    }
   
    

  return (
    <div className= 'container t-sec'>
        <div className="row">
        <div className='position-relative col-7 col-sm-12'>
        <h2 className={styles.sec3title} data-aos="fade-left" data-aos-easing="linear"
                    data-aos-duration="800" data-aos-delay="200" >
            <span data-aos="fade" data-aos-easing="linear" data-aos-duration="800" data-aos-delay="300">We </span>
            <span data-aos="fade" data-aos-easing="linear" data-aos-duration="800" data-aos-delay="400">are </span>
            <span data-aos="fade" data-aos-easing="linear" data-aos-duration="800" data-aos-delay="500">expert </span>
            <span data-aos="fade" data-aos-easing="linear" data-aos-duration="800" data-aos-delay="700">in </span>
            
        </h2>
        <img src={pseudo} alt="" className={styles.pseudo2}/>
        </div>
        <div className={`col-lg-5 col-5 ${styles.res_d}`}>
                <div className={` ${styles.tshapes}`}>
                <div className="position-relative">
                <img src={robo} alt="" className={styles.robo3} />
                <img src={shadow} alt="" className={styles.shadow2} />
                </div>
                </div>
            </div>
            <div className={`col-lg-4 ${styles.middle} res-d mt-4`} id='display'>
                
                <div className={`${styles.main_item}`} data-aos="fade-left" data-aos-easing="linear"
                    data-aos-duration="1000" data-aos-delay="300">
                <img src={services.hero_img} alt="" className={styles.heroImg} />
                <h3 className={styles.item_title}>{services.title}</h3>
                <br />
                <span className={styles.item_info}>{services.info}</span>
                <img src={rightIco} alt="" className={styles.midIco} />
                </div>
            </div>
            <div className="col-lg-4">
                <div className={`${styles.items}`}>
                    <a href="#display"><div className={`${styles.sitem} ${styles.sitem1}`} data-aos="fade-down" data-aos-easing="linear"
                    data-aos-duration="800" data-aos-delay="100" id='sitem1' onClick={handlesitem1}>
                        <img src={tb1} alt="" className={styles.tb1} />
                        <h3 className={styles.sitem_title}>Creative Design</h3>
                        <img src={leftIco} alt="" className={styles.rightIco} />
                    </div></a> 
                    <a href="#display"><div className={styles.sitem} data-aos="fade-down" data-aos-easing="linear"
                    data-aos-duration="900" data-aos-delay="200" id='sitem2' onClick={handlesitem2}>
                        <img src={tb2} alt="" className={styles.tb1} />
                        <h3 className={styles.sitem_title}>Content Creation</h3>
                        <img src={leftIco} alt="" className={styles.rightIco} />
                    </div></a>
                    <a href="#display"><div className={styles.sitem} data-aos="fade-down" data-aos-easing="linear"
                    data-aos-duration="1000" data-aos-delay="300" id='sitem3' onClick={handlesitem3}>
                        <img src={tb3} alt="" className={styles.tb1} />
                        <h3 className={styles.sitem_title}>Marketing</h3>
                        <img src={leftIco} alt="" className={styles.rightIco} />
                    </div></a>
                    <a href="#display"><div className={styles.sitem} data-aos="fade-down" data-aos-easing="linear"
                    data-aos-duration="1100" data-aos-delay="400" id='sitem4' onClick={handlesitem4}>
                        <img src={tb4} alt="" className={styles.tb1} />
                        <h3 className={styles.sitem_title}>Strategy</h3>
                        <img src={leftIco} alt="" className={styles.rightIco} />
                    </div></a>
                    <a href="#display"><div className={styles.sitem} data-aos="fade-down" data-aos-easing="linear"
                    data-aos-duration="1200" data-aos-delay="500" id='sitem5' onClick={handlesitem5} >
                        <img src={tb5} alt="" className={styles.tb1} />
                        <h3 className={styles.sitem_title}>Development</h3>
                        <img src={leftIco} alt="" className={styles.rightIco} />
                    </div></a>
                </div>
            </div>
            <div className={`col-lg-4 ${styles.middle} ${styles.res_n}`}>            
                <div className={`${styles.main_item}`} data-aos="fade-left" data-aos-easing="linear"
                    data-aos-duration="800" data-aos-delay="1000">
                <img src={services.hero_img} alt="" className={styles.heroImg} />
                <h3 className={styles.item_title}>{services.title}</h3>
                <br />
                <span className={styles.item_info}>{services.info}</span>
                <img src={rightIco} alt="" className={styles.midIco} />
                </div>
            </div>
            <div className={`col-lg-4 col-6 ${styles.res_n}`}>
                <div className={` ${styles.tshapes}`}>
                <div className="position-relative">
                <img src={robo} alt="" className={styles.robo3} />
                <img src={shadow} alt="" className={styles.shadow2} />
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ThirdSection