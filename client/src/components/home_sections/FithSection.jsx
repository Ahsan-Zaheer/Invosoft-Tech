import React, { useEffect, useState } from 'react'; 
import styles from '../../assets/stylesheets/home.module.css';
import pseudo from '../../assets/pseudo.svg';
import icon1 from '../../assets/box_icon1.svg'
import icon2 from '../../assets/box_icon2.svg'
import icon3 from '../../assets/box_icon3.svg'
import icon4 from '../../assets/box_icon4.svg'
import icon5 from '../../assets/box_icon5.svg'
import icon6 from '../../assets/box_icon6.svg'

const FithSection = () => {
    const [box1InfoVisible, setBox1InfoVisible] = useState(false);
    const [box2InfoVisible, setBox2InfoVisible] = useState(false);
    const [box3InfoVisible, setBox3InfoVisible] = useState(false);

    useEffect(() => {
        const box1 = document.getElementById('box1');
        const box2 = document.getElementById('box2');
        const box3 = document.getElementById('box3');

        const handleMouseOver = (setInfoVisible) => () => {
            setInfoVisible(true);
        };

        const handleMouseOut = (setInfoVisible) => () => {
            setInfoVisible(false);
        };

        if (box1) {
            box1.addEventListener('mouseover', handleMouseOver(setBox1InfoVisible));
            box1.addEventListener('mouseout', handleMouseOut(setBox1InfoVisible));
        }
        if (box2) {
            box2.addEventListener('mouseover', handleMouseOver(setBox2InfoVisible));
            box2.addEventListener('mouseout', handleMouseOut(setBox2InfoVisible));
        }
        if (box3) {
            box3.addEventListener('mouseover', handleMouseOver(setBox3InfoVisible));
            box3.addEventListener('mouseout', handleMouseOut(setBox3InfoVisible));
        }

        return () => {
            // Cleanup: Remove the event listeners when the component is unmounted
            if (box1) {
                box1.removeEventListener('mouseover', handleMouseOver(setBox1InfoVisible));
                box1.removeEventListener('mouseout', handleMouseOut(setBox1InfoVisible));
            }
            if (box2) {
                box2.removeEventListener('mouseover', handleMouseOver(setBox2InfoVisible));
                box2.removeEventListener('mouseout', handleMouseOut(setBox2InfoVisible));
            }
            if (box3) {
                box3.removeEventListener('mouseover', handleMouseOver(setBox3InfoVisible));
                box3.removeEventListener('mouseout', handleMouseOut(setBox3InfoVisible));
            }
        };
    }, []); // The empty dependency array ensures that this effect runs once after the initial render

    return (
        <div className={`container ${styles.sec_5}`}>
            <div className='position-relative d-inline'>
                <h2 className={styles.sec_5_title} data-aos="fade-left" data-aos-easing="linear"
                    data-aos-duration="800" data-aos-delay="200" >
                    <span data-aos="fade" data-aos-easing="linear" data-aos-duration="800" data-aos-delay="300">This </span>
                    <span data-aos="fade" data-aos-easing="linear" data-aos-duration="800" data-aos-delay="400">is </span>
                    <span data-aos="fade" data-aos-easing="linear" data-aos-duration="800" data-aos-delay="500">how </span>
                    <span data-aos="fade" data-aos-easing="linear" data-aos-duration="800" data-aos-delay="600">to </span>
                    <span data-aos="fade" data-aos-easing="linear" data-aos-duration="800" data-aos-delay="700">get </span>
                    <span data-aos="fade" data-aos-easing="linear" data-aos-duration="800" data-aos-delay="800">the </span>
                    <span data-aos="fade" data-aos-easing="linear" data-aos-duration="800" data-aos-delay="900">ball </span>
                    <span data-aos="fade" data-aos-easing="linear" data-aos-duration="800" data-aos-delay="1000">rolling</span>
                </h2>
                <img src={pseudo} alt="" className={styles.sec_5_pseudo} />
            </div>

            <div className="row">
                <div className={`col-lg-4`}>
                    <div className={`${styles.box_5}`} id='box1' >
                        <div className={styles.sec5_box}>
                        <h3 className={styles.counting}>
                            1.
                        </h3>
                        <img src={icon2} alt="" className={styles.sec5_icons} style={{ display: box1InfoVisible ? 'none' : 'block' }} />
                        <img src={icon3} alt="" className={styles.sec5_icons} style={{ display: box1InfoVisible ? 'block' : 'none' }} />
                        </div>
                        <h3 className={styles.box_5_title}>Take Your Digital Leap.</h3>
                        <ul
                            className={styles.box_5_info}
                            style={{ display: box1InfoVisible ? 'block' : 'none' }}
                        >
                            <li>Contact us, and we'll sketch the blueprint for your digital ascent, mapping out a clear and strategic path forward.</li>

                            
                        </ul>
                    </div>
                </div>
                <div className={`col-lg-4`}>
                    <div className={`${styles.box_5}`} id='box2'>
                        <div className={styles.sec5_box}>
                        <h3 className={styles.counting}>
                            2.
                        </h3>

                        <img src={icon6} alt="" className={styles.sec5_icons} style={{ display: box2InfoVisible ? 'none' : 'block' }} />
                        <img src={icon1} alt="" className={styles.sec5_icons} style={{ display: box2InfoVisible ? 'block' : 'none' }} />
                        
                        </div>
                        <h3 className={styles.box_5_title}>Collaborative Creation.</h3>
                        <ul
                            className={styles.box_5_info}
                            style={{ display: box2InfoVisible ? 'block' : 'none' }}
                        >
                            <li>Together, we bring your vision to life, meticulously crafting and fine-tuning your digital presence.</li>
                            
                        </ul>
                    </div>
                </div>
                <div className={`col-lg-4`}>
                    <div className={`${styles.box_5}`} id='box3'>
                        <div className={styles.sec5_box}>
                        <h3 className={styles.counting}>
                            3.
                        </h3>
                        
                        <img src={icon5} alt="" className={styles.sec5_icons} style={{ display: box3InfoVisible ? 'none' : 'block' }}   />
                        <img src={icon4} alt="" className={styles.sec5_icons} style={{ display: box3InfoVisible ? 'block' : 'none' }}   />
                        
                        </div>

                        <h3 className={styles.box_5_title}>Optimize and Launch.</h3>
                        <ul
                            className={styles.box_5_info}
                            style={{ display: box3InfoVisible ? 'block' : 'none' }}
                        >
                            <li>Our iterative approach fine-tunes your project for peak performance before unveiling it to the digital world</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FithSection;
