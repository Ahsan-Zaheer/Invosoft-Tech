import React from 'react'
import styles from '../../assets/stylesheets/subservices.module.css'
import design2 from '../../assets/services_elements/design2.gif'
import design3 from '../../assets/services_elements/design3.gif'
import UiUx from '../../assets/services_elements/digital.gif'
import faq from '../../assets/services_elements/faq.gif'
import brand from '../../assets/services_elements/brand.gif'
import divider from '../../assets/services_elements/divider.svg'
import pseudo from '../../assets/pseudo.svg'
import robo from '../../assets/wwd_elements/robo_wwd.svg'
import wwd2 from '../../assets/wwd_elements/wwd2.svg'
import wwd_one from '../../assets/wwd_elements/1.svg'
import wwd_two from '../../assets/wwd_elements/2.svg'
import design from '../../assets/services_elements/design.gif'






export default function Design() {
  return (
    <div className='container-fluid'>
        <div className="container">
        <div className={`${styles.sec1} row`}>
            <div className="col-12">
            <div className={styles.heroImgBg}>
                    <img src={design} alt="" className={styles.heroImgM} />
            </div>
                <div className="position-relative">
                    <h1 className={styles.title}>A Creative Design Agency</h1>
                    <img src={pseudo} alt="" className={styles.pseudo}/>

                </div>
                <h2 className={styles.subTitle}>Helping Visualising Bold Visions</h2>
            </div>
            <div className="col-lg-7">
            <div className={styles.description}>
                We're the alchemists of the digital age, transforming the ordinary into the extraordinary. Our design services are a vibrant blend of art and strategy, meticulously crafted to invigorate your digital presence and make a lasting impression. Let's transcend colours and shapes; let's shun the ordinary. We're here to disrupt the digital norm. Design, to us, is a powerful conversation between brand and audience, an opportunity to weave stories that resonate and endure.
                </div>
            </div>
            <div className="col-lg-5">
            <div className={styles.heroImg}>
                    <img src={design} alt="" className={styles.heroImg} />
                </div>
            </div>
        </div>
        </div>
        <div className="container">
            <div className={styles.sec2}>

                <div className="position-relative">
                    <h2 className={styles.sec2Title}>Shape Your Brand Visuals</h2>
                    <img src={pseudo} alt="" className={styles.pseudo2}/>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <div className={styles.sec2Inner}>
                            <div className={styles.counting}>01</div>
                            <h3 className={styles.serviceTitle}>Graphic Design</h3>
                            <img src={divider} alt="" className={styles.divider} />
                            <div className={styles.info}>
                            Amidst a sea of visuals, our Graphic Design services carve out your unique identity. We harmonize colour, form, and function to narrate your story in ways that captivate, engage, and linger in the minds of your audience
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className={styles.sec2Inner}>
                            <div className={styles.counting}>02</div>
                            <h3 className={styles.serviceTitle}>UI/UX Design</h3>
                            <img src={divider} alt="" className={styles.divider} />
                            <div className={styles.info}>
                            Your brand's silent ambassador is its UI/UX design. Prioritizing user experience, we craft seamless, intuitive digital landscapes that look stunning and feel instinctively right, enhancing user satisfaction and loyalty. We ensure making every click is a step closer to conversion and connection
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className={styles.sec2Inner}>
                            <div className={styles.counting}>03</div>
                            <h3 className={styles.serviceTitle}>Brand Identity and Collateral</h3>
                            <img src={divider} alt="" className={styles.divider} />
                            <div className={styles.info}>
                            Brand identity is your handshake, first impression, and pledge. We sculpt your Brand Identity and Collateral precisely to ensure your brand stands out, speaks loud, and remains influential and unforgettable. We blend innovation with intuition to create packaging that speaks volumes before opening the box
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className={styles.sec2Inner}>
                            <div className={styles.counting}>04</div>
                            <h3 className={styles.serviceTitle}>Social Media Designs</h3>
                            <img src={divider} alt="" className={styles.divider} />
                            <div className={styles.info}>
                            In the vibrant social media landscape, standout designs are your voice. Crafted to echo your brand's essence, our Social Media Designs drive engagement and carve a niche in the digital social realm
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <div className={styles.sec3}>
                <div className="row">
                    <div className="col-lg-6">
                        <div className={styles.roboBg}>
                            <img src={robo} alt="" className={styles.robo}/>
                            <div className={`res-d ${styles.robo_right}`} >
                            <img src={wwd_one} alt="" />
                            <img src={wwd_two} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className={`${styles.infoBox} ${styles.flip_card}`}>
                            <div className={styles.flip_card_inner}>
                                <div className={styles.flip_card_front}>
                                    <img src={wwd2} alt="" className={styles.wwdIcon}/>
                                    <h3 className={styles.infoTitle}>Your Next Chapter Begins Now Let’s Electrify Your Brand</h3>
                                    <div className={styles.boxInfo}>
                                    Leap with a partner ready to catapult your brand into a realm of undeniable presence and authority. It’s time for bold action, audacious moves, and unmatched innovation. Ignite the journey with a spark. Contact us today to initiate your onboarding process. Let’s ignite your brand's ascent to the forefront of innovation together
                                    </div>
                                    <button className={styles.infoBtn}>Contact Us</button>  
                                </div>
                                <div className={styles.flip_card_back}>
                                    <img src={wwd2} alt="" className={styles.wwdIcon}/>
                                    <h3 className={styles.infoTitle}>Your Next Chapter Begins Now Let’s Electrify Your Brand</h3>
                                    <div className={styles.boxInfo}>
                                    Leap with a partner ready to catapult your brand into a realm of undeniable presence and authority. It’s time for bold action, audacious moves, and unmatched innovation. Ignite the journey with a spark. Contact us today to initiate your onboarding process. Let’s ignite your brand's ascent to the forefront of innovation together
                                    </div>
                                    <button className={styles.infoBtn}>Contact Us</button>  
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className={styles.sec4}>
                <div className={`row ${styles.sec4Inner} `}>
                    <div className="col-lg-7">
                        <h2 className={styles.sec4Title}>Forge Connections through Artistry</h2>
                        <div className={styles.sec4Info}>
                        Visuals that speak volumes and designs that dance to the rhythm of your brand’s heart – that’s our promise at Invosoft. With Graphic Design, we craft visuals that are not only stunning but also speak the language of your audience. From the subtle nuances in a logo to the bold statements in marketing collateral, we ensure every pixel serves a purpose, making your brand unforgettable
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className={styles.imgBg}>
                            <img src={design2} alt="" className={styles.sec4Img}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.sec5}>
                <h2 className={styles.sec5Title} id='uiux'>Crafting Intuitive Digital Experiences</h2>
                <img src={UiUx} alt="" className={styles.sec5Img} />
                <div className={styles.sec5Info}>
                In the digital realm, the first impression is often the last, and at Invosoft, we make it count. Specialising in UI/UX Design, we sculpt digital experiences that are intuitive, engaging, and tailored to usher your users on a journey of discovery. Our designs are a gateway, inviting your audience into a world where every click enriches their connection with your brand.
                <h3 className={styles.sec5InfoTitle}>Websites That Win Hearts and Minds</h3>
                Your website serves as your digital storefront, and with Invosoft’s Web Designs, it's primed to dazzle. We seamlessly fuse aesthetics with functionality, crafting websites that not only boast striking appearances but also operate seamlessly. Whether your goal is to inform, entertain, or sell, our web designs serve as the foundation of a digital presence that's both impactful and unforgettable
                </div>

            </div>
            <div className={styles.sec4}>
                <div className="row">
                <div className="col-lg-5">
                        <div className={styles.imgBg}>
                            <img src={design3} alt="" className={styles.sec4Img}/>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <h2 className={styles.sec4Title} id='social'>Captivate the Social Sphere</h2>
                        <div className={styles.sec4Info}>
                        In the dynamic realm of social media, seizing attention is paramount, and with Invosoft’s Social Media Designs, you're perpetually ahead of the curve. Our designs encapsulate the essence of your brand, metamorphosing your social media presence into a vibrant platform for interaction. Allow us to assist you in converting scrolls into halts and likes into genuine affection
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className={styles.sec5}>
                <h2 className={styles.sec5Title} id='brand'>Your Brand, Redefined and Remembered</h2>
                <img src={brand} alt="" className={styles.sec5Img} />
                <div className={styles.sec5Info}>
                Your brand is a tale longing to be shared; we are the narrators. Brand Identity Design at Invosoft transcends mere logos and colour schemes; it encompasses the creation of an identity that resonates, establishes connections, and withstands the test of time. We delve into the core of your brand, breathing life into a visual language as distinctive as your vision, ensuring your distinction amidst a sea of uniformity
                <h3 className={styles.sec5InfoTitle}>Packaging That Tells a Story</h3>
                First impressions matter, and with our Packaging Design, your products won’t merely occupy shelf space; they’ll command attention. We view packaging as an extension of your brand’s narrative, and we strive to create designs that engage, and ultimately convert. Allow Invosoft to craft a packaging experience as memorable as the product it contains
                </div>

            </div>
            <div className={styles.faq}>
                <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
                <div className={styles.faqImgBg}>
                    <img src={faq} alt="" className={styles.faqImgM} />
                </div>

                <div className="row">
                    <div className="col-lg-6">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            What sets Invosoft apart from other design agencies?
                            </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            At Invosoft, we're not just designers; we're digital architects, weaving innovation and creativity into every project. Our approach is future-focused, our designs are daring, and our results speak for themselves
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Can you accommodate specific branding guidelines or preferences?
                            </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            Absolutely! We understand the importance of brand consistency and will ensure that our designs align seamlessly with your existing branding guidelines or preferences.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            How involved will I be in the design process?
                            </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            We believe in collaboration. Your input is invaluable to us, and we'll work closely with you every step of the way to ensure your vision is brought to life in the most impactful way possible.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            What is your turnaround time for design projects?
                            </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            Turnaround times can vary depending on the complexity and scope of the project. However, we strive to deliver high-quality designs promptly without compromising on creativity or attention to detail.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            Do you offer revisions if I'm not satisfied with the initial designs?
                            </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            Yes, we do! Client satisfaction is our top priority, and we're happy to make revisions until you're completely satisfied with the outcome.
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                            How do you stay updated with the latest design trends and technologies?
                            </button>
                            </h2>
                            <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            Continuous learning and innovation are at the core of what we do. Our team regularly participates in training programs, attends industry conferences, and stays abreast of the latest design trends and technologies to ensure we deliver cutting-edge solutions to our clients.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                            What types of businesses do you typically work with?
                            </button>
                            </h2>
                            <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            We work with businesses of all sizes and industries, from startups to established brands. Whether you're a small local business or a multinational corporation, we have the expertise and creativity to elevate your brand's digital presence.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                            How do I get started with Invosoft's design services?
                            </button>
                            </h2>
                            <div id="collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            Getting started is easy! Simply reach out to us through our website or the contact information provided, and one of our friendly team members will be in touch to discuss your project and how we can help bring your vision to life.
                            </div>
                            </div>
                        </div>
                    </div>

                    <img src={faq} alt="" className={styles.faqImg} />


                    </div>
                </div>

            </div>
        </div>

    </div>
  )
}
