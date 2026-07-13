import { useRef , useState} from 'react';  
import styles from '../../assets/stylesheets/home.module.css';
import one from '../../assets/sec6_1.gif'
import two from '../../assets/sec6_2.gif'
import three from '../../assets/sec6_3.gif'
import middle from '../../assets/middle.svg'
import pseudo from '../../assets/pseudo.svg';
import emailjs from '@emailjs/browser';




export default function SixthSection() {
    const [thanksVisible, setThanksVisible] = useState(false);
    const form = useRef();

    const handleSubmit = async  (e) =>{
        e.preventDefault();
        emailjs.sendForm('service_5xrfwii', 'template_aqp73kq', form.current, 'CUQ8MP6Fv4w7u6gRm')
        .then((result) => {
            console.log(result.text);
            console.log('message sent');
            setThanksVisible(true);
        }, (error) => {
            console.log(error.text);
        });
      }

  return (
    <div className="container sec6wrapper">
    <div className='position-relative d-inline'>
                <h2 className={styles.sec_5_title} data-aos="fade-left" data-aos-easing="linear"
                    data-aos-duration="800" data-aos-delay="200" >
                    <span data-aos="fade" data-aos-easing="linear" data-aos-duration="800" data-aos-delay="100">Dream  </span>
                    <span data-aos="fade" data-aos-easing="linear" data-aos-duration="800" data-aos-delay="250">Big, </span>
                    <span data-aos="fade" data-aos-easing="linear" data-aos-duration="800" data-aos-delay="350">Plan </span>
                    <span data-aos="fade" data-aos-easing="linear" data-aos-duration="800" data-aos-delay="450">Bigger. </span>
                </h2>
                <img src={pseudo} alt="" className={styles.sec_5_pseudo} />
            </div>
    <form  className={styles.sec6} onSubmit={handleSubmit} ref={form}>
        <div className={styles.sec6_left}>
            <div className={styles.sec6One}>
                <img src={one} alt="" className={styles.img1} />
                <div className="d-flex">
                    <input type="text" name="name" id="" className={styles.inpHalf} required  placeholder='Your Name'/><input type="text" name="company" id="" className={styles.inpHalf} required placeholder='Your Company '/>
                </div>
                <input type="text" placeholder='Industry' required className={styles.inpFull}/>
            </div>
            <div className={`${styles.step1} ${styles.step2}`}>
                <div className='d-flex align-items-center'>
                    <h2 className={styles.sec6Title3}>Define Your Vision</h2>
                    <h2 className={styles.sec6Title}>2.</h2>
                </div>
                Every great achievement starts with a clear vision. What do you need to bring your digital dream to life? Outline your needs, your grand plans, and yes, even your budget. Lay down the path towards your success.
            </div>
            <div className={styles.sec6One}>
                <img src={three} alt="" className={styles.img1} />
                <div className="d-flex">
                    <input type="email" name="email" id="" required className={styles.inpHalf} placeholder='Email' /><input type="number" name="phoneNo" id="" className={styles.inpHalf} required placeholder='Phone no'/>
                </div>
                <button className={styles.sec6Btn} style={{display: !thanksVisible ? 'block' : 'none'}}>Get a Quote</button>
                <div style={{display: !thanksVisible ? 'none' : 'flex'}} className={styles.thnku}>Submitted!</div>
            </div>
        </div>
        <div className={styles.sec6Middle}>
            <img src={middle} alt="" className={styles.middleSvg}/>
        </div>
        <div className={styles.sec6_left}>
            <div className={styles.step1}>
                <div className='d-flex align-items-center'>
                    <h2 className={styles.sec6Title}>1.</h2>
                    <h2 className={styles.sec6Title2}>Unveil Your Story</h2>
                </div>
                We are curious, delving into the ethos of your business. Let's start with the basics. Tell us about the heartbeat of your business and the industry landscape it's set to conquer. It’s your story—let's make it heard.
            </div>
            <div className={styles.sec6One}>
                <img src={two} alt="" className={styles.img1} />
                <div className="d-flex align-items-center">
                    <input type="text" name="customPkg" id="" required className={styles.inpHalf} placeholder='Custom Packages' />
                    
                    <select  className={`${styles.inpHalf}`} style={{borderRight: '15px solid #FAF9F9'}} required name="service" id="cars">
                    <option value="" disabled selected>Services</option>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="Web Development">Web Development</option>
                    <option value="App Development">App Development</option>
                    <option value="SEO">SEO</option>
                    <option value="Video Editing">Video Editing</option>
                    <option value="Motion Graphics">Motion Graphics</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Content Writing  ">Content Writing </option>
                    </select>
            
                </div>
                <input type="text" className={styles.inpFull} required name='budget' placeholder='Estimated Budget'/>
            </div>
            <div className={`${styles.step1} ${styles.step3}`}>
                <div className='d-flex align-items-center'>
                    <h2 className={styles.sec6Title}>3.</h2>
                    <h2 className={styles.sec6Title2}>Connect and Create</h2>
                </div>
                How do we turn your digital dreams into reality? It starts with a simple hello. Leave your contact details. The bridge from dreams to reality is built on communication. We're here, ready to move mountains for you.
            </div>
        </div>
    </form>
    </div>
  )
}
