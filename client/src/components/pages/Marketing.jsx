import React from 'react'
import styles from '../../assets/stylesheets/subservices.module.css'
import market1 from '../../assets/services_elements/market1.gif'
import market2 from '../../assets/services_elements/market2.gif'
import market3 from '../../assets/services_elements/market3.gif'
import indication from '../../assets/services_elements/Indication.svg'
import puzzle from '../../assets/services_elements/puzzle.png'
import faq from '../../assets/services_elements/faq.gif'
import divider from '../../assets/services_elements/divider3.svg'
import fIco from '../../assets/services_elements/fIco.svg'
import pseudo from '../../assets/pseudo.svg'
import robo from '../../assets/wwd_elements/robo_wwd.svg'
import wwd2 from '../../assets/wwd_elements/wwd2.svg'
import wwd_one from '../../assets/wwd_elements/1.svg'
import wwd_two from '../../assets/wwd_elements/2.svg'




export default function Marketing() {
  return (
    <div className='container-fluid'>
        <div className="container">
        <div className={`${styles.sec1} row`}>
            <div className="col-12">
            <div className={styles.heroImgBg}>
                <img src={market1} alt="" className={styles.heroImgM}/>
            </div>
                <div className="position-relative">
                    <h1 className={styles.title}>Outshine Your Competition With world's Premier Digital Marketing Agency</h1>
                    <img src={pseudo} alt="" className={styles.pseudo5}/>

                </div>
            </div>
            <div className="col-lg-8">
                <div className={styles.description}>
                Marketing is about spreading the right word to people at the right time. When you're competing in a city, it's all about getting your message out there. Make your presence so strong that your audience can't help but notice you. You've got customers out there, navigating the digital world, looking for products and services like yours. They'll find a solution, but will it be yours?
                </div>
            </div>
            <div className="col-lg-4">
                <img src={market1} alt="" className={styles.heroImg}/>
            </div>
        </div>
        </div>
        <div className="container">
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
                        <div className={`${styles.infoBox2} ${styles.flip_card}`}>
                            <div className={styles.flip_card_inner}>
                                <div className={styles.flip_card_front}>
                                    <img src={wwd2} alt="" className={styles.wwdIcon}/>
                                    <h3 className={styles.infoTitle}>Let's help your customers find you</h3>
                                    <div className={styles.boxInfo}>
                                    Make sure your potential customers find you in the digital world. Reach out now, and let's shine a light on your brand. 
                                    </div>
                                    <button className={styles.infoBtn}>Contact Us</button>  
                                </div>
                                <div className={styles.flip_card_back}>
                                    <img src={wwd2} alt="" className={styles.wwdIcon}/>
                                    <h3 className={styles.infoTitle}>Let's help your customers find you</h3>
                                    <div className={styles.boxInfo}>
                                    Make sure your potential customers find you in the digital world. Reach out now, and let's shine a light on your brand. 
                                    </div>
                                    <button className={styles.infoBtn}>Contact Us</button>  
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        <div className={styles.sec5}>
                <h2 className={styles.sec5Title2}>Transformative Impact of Strategic Digital Marketing</h2>
                <div className={styles.sec5Info2}>
                Digital landscapes are vast, and navigating them requires more than presence; they require strategy. A comprehensive digital marketing strategy can help you effectively reach your target audience. It is about increasing your online visibility in a natural, engaging way that boosts views and conversions
                <div className="row">
                    <div className="col-lg-4">
                        <div className={styles.sec2InnerSeo}>
                            <div className={styles.counting}>01</div>
                            <h3 className={styles.serviceTitle}>Target Audience</h3>
                            <img src={divider} alt="" className={styles.divider} />
                            <div className={styles.info}>
                            Find and connect with your ideal customers in the sprawling digital landscape of world
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className={styles.sec2InnerSeo}>
                            <div className={styles.counting}>02</div>
                            <h3 className={styles.serviceTitle}>Online Visibility</h3>
                            <img src={divider} alt="" className={styles.divider} />
                            <div className={styles.info}>
                            Standing out from the competition to ensure the right people see your brand
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className={styles.sec2InnerSeo}>
                            <div className={styles.counting}>03</div>
                            <h3 className={styles.serviceTitle}>Conversion Rates</h3>
                            <img src={divider} alt="" className={styles.divider} />
                            <div className={styles.info}>
                            Converting interest into action, visitors into customers, and browsers into subscribers
                            </div>

                        </div>
                    </div>
                    
                   
                </div>
                </div>

            </div>
            <div className={styles.sec5}>
                <h2 className={`${styles.sec5Title} mb-5`} id='social-media-marketing'>Social Media Marketing: Building Relationships, Making Voices Heard</h2>
                
                <div className={styles.sec5Info}>
                Social media is the pulsating heart of the online community. It's where brands become personalities, engaging directly with their audiences. To truly thrive, you need precision, creativity, and strategy
                </div>
            </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className={styles.fBox2}>
                            <img src={fIco} alt="" className={styles.fIco} />
                            <h3 className={styles.fBoxTitle}>Building Brand Awareness with Precision</h3>
                            Social media marketing is both an art and a science. Across platforms, your brand's voice needs to reach your audience. The goal is to turn passive scrollers into active participants in your brand's story by crafting content that captures attention
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className={styles.fBox2}>
                            <img src={fIco} alt="" className={styles.fIco} />
                            <h3 className={styles.fBoxTitle}>Engaging Audiences, Fostering Community</h3>
                            Social media engagement is currency, and we're rich in creative capital. Our content sparks conversations, encourages shares, and builds a community around your brand. Start dialogues that matter, not just broadcast messages
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className={styles.fBox2}>
                            <img src={fIco} alt="" className={styles.fIco} />
                            <h3 className={styles.fBoxTitle}>Driving Sales Through Social Connections</h3>
                            Likes, comments, and shares lead to conversions. Our targeted social media strategies ease your audience's transition from discovery to decision. Using analytics and insights, we turn social platforms into powerful sales tools
                        </div>
                    </div>
                </div>
            
            <div className="row">

            <h2 className={styles.sec5Title2}>Complete Marketing Services</h2>

                
                <div className="col-lg-4">
                    <div className={styles.puzzleBox2}>
                        <img src={puzzle} alt="" className={styles.puzzle} />
                        <h3 className={styles.puzzleBoxTitle}>SEO Power</h3>
                        Get found by those looking for what you offer by boosting your search engine ranking. Using advanced algorithms and techniques to increase your website's visibility and reach more customers
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className={styles.puzzleBox2}>
                        <img src={puzzle} alt="" className={styles.puzzle} />
                        <h3 className={styles.puzzleBoxTitle}>PPC Advertising</h3>
                        Targeted PPC campaigns allow you to reach the right customers at the right time. They allow you to target specific customers based on their interests, locations, and behaviours
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className={styles.puzzleBox2}>
                        <img src={puzzle} alt="" className={styles.puzzle} />
                        <h3 className={styles.puzzleBoxTitle}>Content Creation involves telling</h3>
                        stories that engage, inform, and inspire your audience. It allows you to build relationships with your audience by providing them with relevant, engaging, and informative content
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className={styles.puzzleBox2}>
                        <img src={puzzle} alt="" className={styles.puzzle} />
                        <h3 className={styles.puzzleBoxTitle}>Content Marketing involves creating</h3>
                        A consistent flow of content that drives traffic and increases conversions. Content is distributed through social media, email, and SEO channels to reach your target audience
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className={styles.puzzleBox2}>
                        <img src={puzzle} alt="" className={styles.puzzle} />
                        <h3 className={styles.puzzleBoxTitle}>Google Ads</h3>
                        Google ads are appropriate for promoting a product or service by targeting the right audience with the relevant message at the right time
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className={styles.puzzleBox2}>
                        <img src={puzzle} alt="" className={styles.puzzle} />
                        <h3 className={styles.puzzleBoxTitle}>Email Marketing</h3>
                        Email marketing targets existing customers with personalized messages, which is appropriate for nurturing relationships with them
                    </div>
                </div>
            </div>
            
            

            
            <div className={styles.sec5}>
                <h2 className={styles.sec5Title} >Take your chance to shine: Kickstart Unparalleled Success</h2>
                <img src={market2} alt="" className={styles.sec5Img} />
                <div className={styles.sec5Info} >
                Put your brand in the spotlight. Bring your marketing strategy to life today with a vision that transcends expectations. Your future in digital brilliance starts now
                </div>
            </div>
            <div className={styles.sec5}>
                <h2 className={styles.sec5Title2}>Brand Strategy and Positioning: Making Brands Unforgettable </h2>
                <img src={market3} alt="" className={styles.sec5Img} />
                <div className="row mt-4">
                    <div className="col-lg-6">
                        <div className={styles.fBox3}>
                            <img src={indication} alt="" className={`${styles.fIco} mt-1`} />
                            <div className='ms-2'>
                            <h3 className={`${styles.fBoxTitle} m-0`}>Discovery and Analysis</h3>
                            <div className='mt-2 mt-lg-5'>We need to know the waters first. This initial phase involves digging deep into your brand's current position, target audience, and competitive landscape to find out where you are, where you want to be, and the challenges and opportunities that lie between them
                            </div>
                            </div>
                        </div>
                        <div className={styles.fBox3}>
                            <img src={indication} alt="" className={`${styles.fIco} mt-1`} />
                            <div className='h-100 ms-2'>
                            <h3 className={`${styles.fBoxTitle} m-0`}>Strategy Development</h3>
                            <div className='mt-2 mt-lg-5'>We craft a strategy based on your insights. From SEO to social media marketing, each element is tailored to align with your goals and resonate with your audience. It's a bespoke plan that outlines the objectives, tactics, channels, and content that will guide us
                            </div>
                            </div>
                        </div>
                        <div className={styles.fBox3}>
                            <img src={indication} alt="" className={`${styles.fIco} mt-1`} />
                            <div className='h-100 ms-2'>
                            <h3 className={`${styles.fBoxTitle} m-0`}>Content Creation and Curation</h3>
                            <div className='mt-2 mt-lg-5'>The content you create carries your message across the digital sea. This step brings your brand's voice to life, whether through engaging blog posts, engaging social media content, or persuasive email campaigns
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className={styles.fBox3}>
                            <img src={indication} alt="" className={`${styles.fIco} mt-1`} />
                            <div className='ms-2'>
                            <h3 className={`${styles.fBoxTitle} m-0`}>Implementation and Execution</h3>
                            <div className='mt-2 mt-lg-5'>The execution phase begins with a strategy and content. During this stage, plans are implemented, campaigns go live, and your brand starts to take off. Each campaign is launched precisely, reaching your audience through the most effective channels
                            </div>
                            </div>
                        </div>
                        <div className={styles.fBox3}>
                            <img src={indication} alt="" className={`${styles.fIco} mt-1`} />
                            <div className='h-100 ms-2'>
                            <h3 className={`${styles.fBoxTitle} m-0`}>Monitoring and Optimization</h3>
                            <div className='mt-2 mt-lg-5'>We live in an ever-changing digital marketing world, so agility is key. Using real-time data, we continuously monitor the performance of our campaigns. The iterative process ensures that we aren't just reacting to digital currents but leveraging them
                            </div>
                            </div>
                        </div>
                        <div className={styles.fBox3}>
                            <img src={indication} alt="" className={`${styles.fIco} mt-1`} />
                            <div className='h-100 ms-2'>
                            <h3 className={`${styles.fBoxTitle} m-0`}>Content Creation and Curation</h3>
                            <div className='mt-2 mt-lg-5'>We're all about transparency. Our regular reporting allows us to highlight successes, learn from challenges, and refine our approach. We celebrate wins and set the course for even greater achievements
                            </div>
                            </div>
                        </div>
                    </div>
                    
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
                            How can I improve my digital marketing strategy?
                            </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            Analyze your target audience, optimize your website for SEO, utilize social media platforms effectively, create engaging content, and track your results to make data-driven decisions. Monitor customer feedback, analyze your competition, and stay up to date with the latest trends in your industry.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            What are the benefits of social media marketing for businesses?
                            </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            Social media marketing can increase brand awareness, drive website traffic, improve customer engagement, generate leads, and foster a loyal customer base. This data can then be used to optimize your campaigns for greater returns. 
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            How can I measure the success of my digital marketing campaigns?
                            </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            Track key performance indicators (KPIs) such as website traffic, conversion rates, engagement metrics, and return on investment (ROI) to evaluate the effectiveness of your digital marketing efforts. By tracking these KPIs, you can gain valuable insights into the effectiveness of your digital marketing campaigns.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            What are some common mistakes to avoid in digital marketing?
                            </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            Avoid neglecting mobile optimization, ignoring analytics, being inconsistent with branding, overlooking the importance of content quality, and failing to engage with your audience authentically.  Monitor the performance of your posts and adjust your strategy accordingly. Experiment with different content types, formats, and lengths to maximize your engagement. Finally, use customer feedback to refine and improve your campaigns.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            Which social media platforms are best for my business?
                            </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            It depends on your target audience and industry. Research where your audience spends their time online and focus on platforms such as Facebook, Instagram, LinkedIn, Twitter, or TikTok accordingly. Make sure to post regularly, engage with your audience, and measure the success of your campaigns using analytics.
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
