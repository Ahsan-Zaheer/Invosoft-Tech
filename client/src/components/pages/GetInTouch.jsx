import { useRef , useState} from 'react';  
import styles from '../../assets/stylesheets/git.module.css'
import pseudo from '../../assets/pseudo.svg'
import robo from '../../assets/git_elements/robo_wwd.svg'
import wwd1 from '../../assets/git_elements/insta.svg'
import wwd2 from '../../assets/git_elements/whatsapp.svg'
import wwd3 from '../../assets/git_elements/facebook.svg'
import wwd_one from '../../assets/git_elements/1.svg'
import wwd_two from '../../assets/git_elements/2.svg'
import one from '../../assets/10.svg'
import two from '../../assets/8.svg'
import five from '../../assets/5.svg'
import six from '../../assets/6.svg'
import shadow from '../../assets/shadow.svg'
import robo2 from '../../assets/abt_elements/robo2.svg'
import tick from '../../assets/tick.gif'
import uploadIco from '../../assets/upload.svg'
import emailjs from '@emailjs/browser';
import {Helmet} from "react-helmet";





export default function GetInTouch() {
    const [thanksVisible, setThanksVisible] = useState(false);

    const hiddenFileInput = useRef(null);
    const form = useRef();

    const handleClick = event => {
        hiddenFileInput.current.click();   
      };
    
      const handleChange = event => {
        const fileUploaded = event.target.files[0];
        handleFile(fileUploaded);                   // ADDED
      };
      const handleSubmit = async  (e) =>{
        e.preventDefault();
        emailjs.sendForm('service_5xrfwii', 'template_tmjq2n8', form.current, 'CUQ8MP6Fv4w7u6gRm')
        .then((result) => {
            console.log(result.text);
            console.log('message sent');
            setThanksVisible(true);

        }, (error) => {
            console.log(error.text);
        });
      }
  return (
    <>
    
    <Helmet>
        <title>Get In Touch | Invosoft</title>
        <meta name="description" content="Connect with Invosoft, your experts in digital marketing, SEO, and web design. Let's create success together!"/>
        <link rel="canonical" href="https://invosoft/get-in-touch" />
        <meta name="robots" content="index, follow"/> 
      </Helmet>

    <div className={styles.top}>
    <div className={styles.layer2} id='getInTouch'>
        <div className="position-relative">
            <img src={robo2} alt="" className={styles.robo2} data-aos="zoom-in-down" data-aos-easing="ease"
            data-aos-duration="800" data-aos-delay="1550" />
            <img src={five} alt=""  className={styles.shape1}  data-aos="fade-up" data-aos-easing="linear"
            data-aos-duration="800" data-aos-delay="1250" />
            <img src={two} alt=""  className={styles.shape1}  data-aos="fade-left" data-aos-easing="linear"
             data-aos-duration="800" data-aos-delay="1000" />
         </div>
     </div>
    <div>
    <h1 className={styles.title} data-aos="zoom-in-up" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="200">GET IN TOUCH</h1>
    <div className="position-relative">
    <h2 className={styles.sub_title} data-aos="zoom-in-up" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="400">We’re so in right now</h2>
    <img src={pseudo} alt="" className={styles.pseudo} data-aos="fade" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="1000" />
    </div>
    <div className={styles.info} data-aos="zoom-in-up" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="600">It's a little hard to give the right budget when we know so little about you  <div className={styles.inner_info} data-aos="zoom-in-up" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="700"> To get you the right quote, we need to know what you need us to help you with!</div>
    <form className={styles.form} onSubmit={handleSubmit} ref={form} style={{display: !thanksVisible ? 'flex' : 'none'}}>
        <label htmlFor="name">
            Name
        </label>
        <input type="text" name="name" id="" className={styles.inp} placeholder='Your Name*' required/>
        <label htmlFor="email">
            Email
        </label>
        <input type='email' name="email" id="" className={styles.inp} placeholder='Your Email*' required/>
        <label htmlFor="phone">
            Phone Number
        </label>
        <input type="tel" name="phone" id="" className={styles.inp} placeholder='Your Phone Number'/>
        <label htmlFor="loc">
            Location
        </label>
        <input type="text" name="loc" id="" className={styles.inp} placeholder='Your Location/Country*' required/>
        <label htmlFor="message">
            Message
        </label>
        <textarea name="message" id="" className={styles.inpMsg} placeholder='Tell Us About Your Project... ' cols="30" rows="10" required></textarea>
        {/* <button 
        className={styles.uploadBtn}
        onClick={handleClick}
        >
            <img src={uploadIco} alt="" className={styles.formIco} />
            Upload Project Details
        </button>
        <input 
            type="file"
            onChange={handleChange}
            ref={hiddenFileInput}
            style={{display:'none'}}
            name='file'
        /> */}
        <button type="submit" className={styles.formBtn}>Submit</button>
    </form>
    <div className={styles.thanks} style={{display: !thanksVisible ? 'none' : 'flex'}}>
                <img src={tick} alt="" className='tick' />
                <div className='position-relative'>
                   <h2 className='thanks-title'>Your message has been sent.</h2> 
                   <img src={pseudo} alt="" className='thanks-pseudo' />
                </div>
                <h3 className='thanks-subtitle'>Thanks for contacting! We will get back to you soon</h3>
    </div>

    <div className={styles.inner_info2} data-aos="zoom-in-up" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="900">Contact us through the following mediums, to start on this awesome journey!</div></div>
    </div>
    </div>
    <div className="container mt-5">
        <div className="row">
            <div className="col-lg-3 ">
                <div className={`position-relative ${styles.wwd_first}`}>
                <img src={robo} alt="" className={styles.robo} />
                <img src={shadow} alt="" className={styles.shadow} />
                <div className={`res-d ${styles.robo_right}`} >
                <img src={wwd_one} alt="" />
                <img src={wwd_two} alt="" />
                </div>
                </div>
            </div>
            <div className="col-lg-3 d-flex justify-content-center align-items-end">
                
                <a href='https://www.instagram.com/invosoft.tech/'> <div className={`${styles.box} ${styles.flip_card}`}>
                    <div className={styles.flip_card_inner}>
                        <div className={styles.flip_card_front}>
                            <img src={wwd1} alt="" className={styles.box_ico}/>
                            <h3 className={styles.box_info}>Instagram</h3>
                        </div>
                        <div className={styles.flip_card_back}>
                            <img src={wwd1} alt="" className={styles.box_ico}/>
                            <h3 className={styles.box_info}>Instagram</h3>
                        </div>
                    </div>
                </div></a>
                
            </div>
            <div className="col-lg-3 d-flex justify-content-center my-lg-0 my-3 align-items-end">
            <a href='https://api.whatsapp.com/send?phone=%2B923494108497&data=ARDzdTvWL3sqCOPGlIRskS6mtr8EJUOuFaTT__Z_nzA6823KOC8DXQ0XrwD1PpREWW6Wy_DI3h4kBcXgjDSIFvMC29k-TtKBzFMCqw3H5LjKuAmJIQrKLL7b9w_8G6K9yNPZBTsoNl45fol92VPw0pTEuA&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR0oPK7nH5iOMb2plmNOA3lQ7UT2Gga5BGPgnRVlOEQxZtVqLmYg_rfJRZA'> <div className={`${styles.box} ${styles.flip_card}`}>
                    <div className={styles.flip_card_inner}>
                        <div className={styles.flip_card_front}>
                            <img src={wwd2} alt="" className={styles.box_ico}/>
                            <h3 className={styles.box_info}>WhatsApp</h3>
                        </div>
                        <div className={styles.flip_card_back}>
                            <img src={wwd2} alt="" className={styles.box_ico}/>
                            <h3 className={styles.box_info}>WhatsApp</h3>
                        </div>
                    </div>
                </div></a>
            </div>
            <div className="col-lg-3 d-flex justify-content-center align-items-end">
            <a href='https://www.facebook.com/profile.php?id=61565185349358'> <div className={`${styles.box} ${styles.flip_card} ${styles.last_box}`}>
                    <div className={styles.flip_card_inner}>
                        <div className={styles.flip_card_front}>
                            <img src={wwd3} alt="" className={styles.box_ico}/>
                            <h3 className={styles.box_info}>Facebook</h3>
                        </div>
                        <div className={styles.flip_card_back}>
                            <img src={wwd3} alt="" className={styles.box_ico}/>
                            <h3 className={styles.box_info}>Facebook</h3>
                        </div>
                    </div>
                </div></a>
            </div>
        </div>
    </div>
            <div className={styles.shape}>

                <div className={styles.layer1}>
                <img src={one} alt="" className={styles.shapes}  data-aos="fade-up" data-aos-easing="linear"
                data-aos-duration="800" data-aos-delay="1000" />
                    <img src={six} alt=""  className={styles.shapes}  data-aos="fade-up" data-aos-easing="linear"
                data-aos-duration="800" data-aos-delay="600" />
                </div>
        </div>
    </>
  )
}
