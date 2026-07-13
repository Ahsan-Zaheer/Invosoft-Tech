import React from 'react'
import styles from '../../assets/stylesheets/subservices.module.css'
import design2 from '../../assets/services_elements/design2.gif'
import design3 from '../../assets/services_elements/design3.gif'
import content1 from '../../assets/services_elements/content1.gif'
import content2 from '../../assets/services_elements/content2.gif'
import puzzle from '../../assets/services_elements/puzzle.png'
import faq from '../../assets/services_elements/faq.gif'
import divider from '../../assets/services_elements/divider3.svg'
import pseudo from '../../assets/pseudo.svg'
import robo from '../../assets/wwd_elements/robo_wwd.svg'
import wwd2 from '../../assets/wwd_elements/wwd2.svg'
import wwd_one from '../../assets/wwd_elements/1.svg'
import wwd_two from '../../assets/wwd_elements/2.svg'


export default function ContentCreation() {
  return (
    <div className='container-fluid'>
        <div className="container">
        <div className={`${styles.sec1} row`}>
            <div className="col-12">
            <div className={styles.heroImgBg}>
                <img src={content1} alt="" className={styles.heroImgM}/>
            </div>
                <div className="position-relative">
                    <h1 className={styles.title}>Content Creation Services: Crafting Connections in the Digital Age</h1>
                    <img src={pseudo} alt="" className={styles.pseudo}/>

                </div>
                <h2 className={styles.subTitle}>Differentiate yourself from the competition</h2>
            </div>
            <div className="col-lg-8">
                <div className={styles.description}>
                Content guides your audience home in the digital expanse, where every scroll is an opportunity to connect. Rather than playing videos, the future of content is about transport. It's not just motion graphics that move; it's motion graphics that mesmerize. Where social media content engages instead of just posting, it's where copy sings, not just talks. Creating high-quality content turns passive viewers into passionate followers, establishing your brand as a legend. You're ready for the digital renaissance. Explore what makes visuals more than just something you see. We transform the ordinary into the extraordinary with precision, passion, and a touch of magic
                </div>
            </div>
            <div className="col-lg-4">
                <img src={content1} alt="" className={styles.heroImg}/>
            </div>
        </div>
        </div>
        <div className="container">
            <div className={styles.sec4}>
                <div className={`row ${styles.sec4Inner} `}>
                    <div className="col-lg-7">
                        <h2 className={styles.sec4Title} id='video-editing'>Bringing Stories To Life Through Video Editing</h2>
                        <div className={styles.sec4Info}>
                        Capture your imagination, frame by frame. Professional video editing turns raw footage into narrative gold by cutting scenes, blending transitions, and harmonizing audio and visual elements. This is where your message finds its rhythm, engaging audiences and keeping them spellbound. This power enables us to sculpt your ideas into visual journeys that transcend screen boundaries
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className={styles.imgBg}>
                            <img src={design2} alt="" className={styles.sec4Img}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <div className={styles.puzzleBox}>
                        <img src={puzzle} alt="" className={styles.puzzle} />
                        <h3 className={styles.puzzleBoxTitle}>Educational Engagements</h3>
                        Transforming information into captivating educational content. Partner with us and transform your visions intovisuals that vibrate with energy, emotion, and excellence
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className={styles.puzzleBox}>
                        <img src={puzzle} alt="" className={styles.puzzle} />
                        <h3 className={styles.puzzleBoxTitle}>Narrative Enhancement</h3>
                        Crafting stories that resonate, turning sequences into sagas
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className={styles.puzzleBox}>
                        <img src={puzzle} alt="" className={styles.puzzle} />
                        <h3 className={styles.puzzleBoxTitle}>Promotional Precision</h3>
                        Elevating your brand with sleek, compelling commercials and teasers
                    </div>
                </div>
            </div>
            <div className={styles.sec5}>
                <h2 className={styles.sec5Title2} id='motion-graphics'>Motion Graphics Mastery: Crafting Visual Narratives</h2>
                <div className={styles.sec5Info2}>
                <h3 className={styles.sec5InfoTitle}>Animate your ideas and captivate your audience</h3>
                Immerse yourself in a world of motion graphics, where static images become tales told in vibrant color and motion. We serve brands that want to engage and enchant consumers in USA, where digital innovation thrives. Discover a world where your stories soar beyond the sketchpad and into the hearts of your viewers. Motion graphics transcends traditional storytelling, transforming simple narratives into immersive experiences.
                <div className="row">
                    <div className="col-lg-3">
                        <div className={styles.sec2InnerContent}>
                            <div className={styles.counting}>01</div>
                            <h3 className={styles.serviceTitle}>Explainer Videos</h3>
                            <img src={divider} alt="" className={styles.divider} />
                            <div className={styles.info}>
                            Simplify complex ideas into digestible, engaging visuals
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className={styles.sec2InnerContent}>
                            <div className={styles.counting}>02</div>
                            <h3 className={styles.serviceTitle}>Brand Videos</h3>
                            <img src={divider} alt="" className={styles.divider} />
                            <div className={styles.info}>
                            Infuse your brand's ethos with energy, creating memorable brand identities
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className={styles.sec2InnerContent}>
                            <div className={styles.counting}>03</div>
                            <h3 className={styles.serviceTitle}>Social Media Animations</h3>
                            <img src={divider} alt="" className={styles.divider} />
                            <div className={styles.info}>
                            Capture attention in the ever-scrolling world of social media
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className={styles.sec2InnerContent}>
                            <div className={styles.counting}>04</div>
                            <h3 className={styles.serviceTitle}>Product Demos</h3>
                            <img src={divider} alt="" className={styles.divider} />
                            <div className={styles.info}>
                            Showcase your product in action, highlighting features and benefits through dynamic animations
                            </div>

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
                                    <h3 className={styles.infoTitle}>Bring Your Stories to Motion</h3>
                                    <div className={styles.boxInfo}>
                                    Your message will not just be seen; it will be felt, remembered, and cherished. Ready to turn your ideas into animated masterpieces that resonate with everyone? Get in touch and watch your visions come to life. Let's make motion graphics that make your brand the talk of USA and beyond
                                    </div>
                                    <button className={styles.infoBtn}>Contact Us</button>  
                                </div>
                                <div className={styles.flip_card_back}>
                                    <img src={wwd2} alt="" className={styles.wwdIcon}/>
                                    <h3 className={styles.infoTitle}>Bring Your Stories to Motion</h3>
                                    <div className={styles.boxInfo}>
                                    Your message will not just be seen; it will be felt, remembered, and cherished. Ready to turn your ideas into animated masterpieces that resonate with everyone? Get in touch and watch your visions come to life. Let's make motion graphics that make your brand the talk of USA and beyond
                                    </div>
                                    <button className={styles.infoBtn}>Contact Us</button>  
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className={styles.sec5}>
                <h2 className={styles.sec5Title} id='social-media-content'>Mastering Social Media Content: Your Brand's Digital Pulse</h2>
                <img src={design3} alt="" className={styles.sec5Img} />
                <div className={styles.sec5Info}>
                Engage, entertain, and enlighten the triple e approach. It's not just about being seen—you've got to be remembered, talked about, and followed in USA's crowded digital marketplace. Our social media content creation process pierces through the noise, ensuring your brand reaches and resonates with your audience, fostering engagement, entertainment, and enlightenment
                </div>

            </div>
            <div className={styles.sec5}>
                <h2 className={styles.sec5Title2} id='copywriting'>Words That Convert: The Art of Copywriting</h2>
                <img src={content2} alt="" className={styles.sec5Img} />
                <div className={styles.sec5Info2}>
                Crafting messages that resonate. Your digital presence can be transformed with words. With every brand competing for attention in a bustling USA market, our copywriting service stands out as your secret weapon. With seamless elegance, we craft sentences that do more than speak; they act. The art of persuasion at its finest. We tap into your audience's desires and needs, ensuring every word weaves a compelling narrative around your brand's values and offerings
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
                            What services does your company provide in terms of content creation?
                            </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            We provide services in video editing, motion graphics, social media content creation, and copywriting content writing.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            How can I request a video editing service from your company?
                            </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            You can request a video editing service by contacting our customer support team and providing details about your project requirements, including footage, desired edits, and any specific instructions.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Do you offer motion graphics design services?
                            </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            Yes, we offer motion graphics design services, which include creating animated visual elements such as text, logos, and illustrations to enhance your videos or other multimedia content.

                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Can you help with creating content for social media platforms?
                            </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            Absolutely! We specialize in creating engaging content tailored for various social media platforms, helping you reach and connect with your target audience effectively.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            How can I request copywriting content writing services from your company?
                            </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            To request copywriting content writing services, simply reach out to us with details about your project, including the type of content needed, target audience, tone/style preferences, and any specific guidelines or requirements you have.
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
