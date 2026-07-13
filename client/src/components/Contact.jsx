import React, {useState, useRef} from 'react'
import emailjs from '@emailjs/browser';
import pseudo from '../assets/pseudo.svg'
import robo4 from '../assets/robo4.svg'
import robo from '../assets/wwd_elements/robo_wwd.svg'
import logo_light from '../assets/logo_light.png'
import twitter from '../assets/twitter.svg'
import fb from '../assets/fb.svg'
import medium from '../assets/medium.svg'
import github from '../assets/github.svg'
import one from '../assets/10.svg'
import two from '../assets/8.svg'
import three from '../assets/3.svg'
import four from '../assets/4.svg'
import five from '../assets/5.svg'
import six from '../assets/6.svg'
import tick from '../assets/tick.gif'
import seven from '../assets/9.svg'
import emailIco from '../assets/emailIco.svg'
import phoneIco from '../assets/phoneIco.svg'
import locIco from '../assets/locationIco.svg'
import styles from '.././assets/stylesheets/home.module.css'
import { Link } from 'react-router-dom';




export default function Contact() {
    const form = useRef();

    const [thanksVisible, setThanksVisible] = useState(false);

    const [contact, setContact] = useState(
        {
            name: "",
            email: "",
            message: ""
        }
    )
    
    const handleInp = (e)=>{
        const name = e.target.name; 
        const value = e.target.value;

        setContact({
            ...contact,
            [name]: value
        });
        
    }

    const handleSubmit = async  (e) =>{
        e.preventDefault();
        console.log(contact);

        try {
            const response = await fetch('https://de.ahsanzaheer.online/api/form/contact',{
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(contact)
            }
            )
            console.log(response);
        }
        catch (error) {
            console.log("contact", error);
        }
        emailjs.sendForm('service_6qvtjgi', 'template_uivsts7', form.current, '0hD_OyXZtaoZE6RFc')
        .then((result) => {
            console.log(result.text);
            console.log('message sent');
        }, (error) => {
            console.log(error.text);
        });
        setThanksVisible(true);

    }

  return (
    <>
    <div className={`row contact-sec mx-0 p-0 `}>
        <div className="col-lg-3 contact-first">
            <div>
                <div className={styles.layers}>
                    <img src={seven} alt="" className={`${styles.shapes} ${styles.shape_rotate2}`}  data-aos="fade-up" data-aos-easing="linear"
                data-aos-duration="800" data-aos-delay="2000" />
                <img src={six} alt=""  className={styles.shapes}  data-aos="fade-up" data-aos-easing="linear"
            data-aos-duration="800" data-aos-delay="1800" />
                </div>
                <div className={styles.layers}>
                    <img src={five} alt=""  className={styles.shapes}  data-aos="fade-up" data-aos-easing="linear"
                data-aos-duration="800" data-aos-delay="1550" />
                <div className={`shapeBg`} >
                <img src={three} alt=""  className={styles.shapes}  data-aos="fade-right" data-aos-easing="linear"
            data-aos-duration="800" data-aos-delay="1300" />
                <img src={four} alt=""  className={styles.shapes}  data-aos="fade-right" data-aos-easing="linear"
            data-aos-duration="800" data-aos-delay="1200" />
            </div>
                </div>
        <div className={styles.layers}>
            <img src={two} alt=""  className={styles.shapes}  data-aos="fade-left" data-aos-easing="linear"
        data-aos-duration="800" data-aos-delay="1000" />
                <img src={one} alt=""  className={`${styles.shapes} ${styles.shape_rotate}`}  data-aos="fade-right" data-aos-easing="linear"
            data-aos-duration="800" data-aos-delay="500" />
                </div>
        </div>
        </div>
        <div className="col-lg-6 contact-right">
            <h2 className='robo-up'>Ready to electrify your digital presence?</h2>
            <img src={robo4} alt="" className='contact-robo' style={{display: !thanksVisible ? 'block' : 'none'}}/>
            <img src={robo} alt="" className='contact-robo2' style={{display: !thanksVisible ? 'none' : 'block'}}/>
        </div>
        <div className="col-lg-3">
            <div className="contact-left" style={{display: !thanksVisible ? 'flex' : 'none'}}>
            <h2 className='contact-title'>
            Let's connect
            <img src={pseudo} alt="" className='contact-pseudo' />
            </h2>
            <form onSubmit={handleSubmit} ref={form} className='contact-form'>
            <input type="text" name="name" id="name" placeholder='Your Name*' required value={contact.name} onChange={handleInp} className='contact-items'/>
            <input type="email" name="email" id="email" placeholder='Your Email*' value={contact.email} onChange={handleInp} required className='contact-items'/>
            <textarea name="message" id="message" placeholder='Your Message*'  value={contact.message} onChange={handleInp} required className='message'></textarea>
            <button className='btn-last mt-3'>Send Message</button>
            </form>
            </div>
            <div className="thanks" style={{display: !thanksVisible ? 'none' : 'flex'}}>
                <img src={tick} alt="" className='tick' />
                <div className='position-relative'>
                   <h2 className='thanks-title'>Your message has been sent.</h2> 
                   <img src={pseudo} alt="" className='thanks-pseudo' />
                </div>
                <h3 className='thanks-subtitle'>Thanks for contacting! We will get back to you soon</h3>
                <div className='cool'>Cool!</div>

            </div>
        </div>

    </div>
    <footer className="contact-sec2">
        <div className="row mx-0 px-0 pt-sm-4  footer">
            <div className="col-8 col-lg-4  p-0 m-0 ">
                <div className="footer-left">
                    <h3 className='footerTitle'>Reach Us</h3>
                    <div className="f-item">
                        <img src={emailIco} alt="" className='f-ico' /> 
                        <a href="mailto:team@invosoft.tech">team@invosoft.tech</a> 
                    </div>
                    {/* <div className="f-item">
                        <img src={phoneIco} alt="" className='f-ico' /> 
                        <a href="tel:+61 435 379 657">+92 349 410 8497</a> 
                    </div> */}
                    <div className="f-item">
                        <img src={locIco} alt="" className='f-ico' /> 
                        New York, USA
                    </div>
                </div>

            </div>
            <div className="col-lg-4 footer-items res-n">
                <div className='d-flex flex-column justify-content-center align-items-center'>
                <img src={logo_light} alt="" className={` logo-light`} />
                <div className="icons">
                    <a href="https://api.whatsapp.com/send?phone=%2B923494108497&data=ARDzdTvWL3sqCOPGlIRskS6mtr8EJUOuFaTT__Z_nzA6823KOC8DXQ0XrwD1PpREWW6Wy_DI3h4kBcXgjDSIFvMC29k-TtKBzFMCqw3H5LjKuAmJIQrKLL7b9w_8G6K9yNPZBTsoNl45fol92VPw0pTEuA&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR0oPK7nH5iOMb2plmNOA3lQ7UT2Gga5BGPgnRVlOEQxZtVqLmYg_rfJRZA"> <img src={twitter} alt="" className="footer-icons" /></a>
                    <a href="https://www.facebook.com/profile.php?id=61565185349358"><img src={fb} alt="" className="footer-icons" /></a>
                    <a href="https://www.instagram.com/invosoft.tech/"><img src={medium} alt="" className="footer-icons" /></a>
                    <a href="https://www.linkedin.com/company/invosoft-tech/about/?viewAsMember=true"><img src={github} alt="" className="footer-icons" /></a> 
                </div>

                <div className='copyright'>@Copyright All Rights Reserved</div> 
                </div>
            </div>
            <div className="col-4  p-0 m-0">
            <div className="footer-right">
                    <h3 className='footerTitle'>Quick Links</h3>
                    <div>
                        <Link to='/services'>
                            <div className="f-link">
                                Services
                            </div>
                        </Link>
                        <Link to='/about'>
                        <div className="f-link">
                            About Us
                        </div>
                        </Link>
                        <Link to='/get-in-touch'>
                        <div className="f-link">
                            Contact Us
                        </div>
                        </Link>
                    </div>
                </div>

            </div>
            <div className="col-lg-4 footer-items res-d ">
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <img src={logo_light} alt="" className={` logo-light`} />
                <div className="icons">
                    <a href="https://api.whatsapp.com/send?phone=%2B923494108497&data=ARDzdTvWL3sqCOPGlIRskS6mtr8EJUOuFaTT__Z_nzA6823KOC8DXQ0XrwD1PpREWW6Wy_DI3h4kBcXgjDSIFvMC29k-TtKBzFMCqw3H5LjKuAmJIQrKLL7b9w_8G6K9yNPZBTsoNl45fol92VPw0pTEuA&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR0oPK7nH5iOMb2plmNOA3lQ7UT2Gga5BGPgnRVlOEQxZtVqLmYg_rfJRZA"><img src={twitter} alt="" className="footer-icons" /></a> 
                    <a href="https://www.facebook.com/profile.php?id=61565185349358"><img src={fb} alt="" className="footer-icons" /></a>
                    <a href="https://www.instagram.com/invosoft.tech/"><img src={medium} alt="" className="footer-icons" /></a>
                    <a href="https://www.linkedin.com/company/invosoft-tech/about/?viewAsMember=true"><img src={github} alt="" className="footer-icons" /></a> 
                </div>

                <div className='copyright'>@Copyright All Rights Reserved</div> 
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}
