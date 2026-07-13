import React from 'react'
import styles from '../../assets/stylesheets/subservices.module.css'
import design3 from '../../assets/services_elements/design3.gif'
import seo1 from '../../assets/services_elements/seo1.gif'
import seo2 from '../../assets/services_elements/seo2.gif'
import seo3 from '../../assets/services_elements/seo3.gif'
import puzzle from '../../assets/services_elements/puzzle.png'
import faq from '../../assets/services_elements/faq.gif'
import divider from '../../assets/services_elements/divider3.svg'
import fIco from '../../assets/services_elements/fIco.svg'
import pseudo from '../../assets/pseudo.svg'
import robo from '../../assets/wwd_elements/robo_wwd.svg'
import wwd2 from '../../assets/wwd_elements/wwd2.svg'
import wwd_one from '../../assets/wwd_elements/1.svg'
import wwd_two from '../../assets/wwd_elements/2.svg'




export default function SEO() {
  return (
    <div className='container-fluid'>
        <div className="container">
        <div className={`${styles.sec1} row`}>
            <div className="col-12">
            <div className={styles.heroImgBg}>
                <img src={seo1} alt="" className={styles.heroImgM}/>
            </div>
                <div className="position-relative">
                    <h1 className={styles.title}>The Next Digital Strategy in world Starts Here</h1>
                    <img src={pseudo} alt="" className={styles.pseudo4}/>

                </div>
            </div>
            <div className="col-lg-8">
                <div className={styles.description}>
                The space where strategy transforms into action. Get into SEO, SMEO, bespoke campaigns, and unparalleled brand positioning. Our clients aren't just seen; they're remembered, making an impact and setting trends. You need a visionary strategy to win in world's digital landscape that goes beyond growth. Ready to Shape Your Digital Future? We're ready to turn your vision into reality. Contact us today, and let's start crafting your path to digital excellence.
                </div>
            </div>
            <div className="col-lg-4">
                <img src={seo1} alt="" className={styles.heroImg}/>
            </div>
        </div>
        </div>
        <div className="container">
        <div className={styles.sec5}>
                <h2 className={styles.sec5Title2}>Boost Your Online Presence With a premier SEO agency</h2>
                <div className={styles.sec5Info2}>
                Visibility is the currency of digital success. A well-crafted SEO strategy is key to navigating and conquering the complex world of search engine rankings. We're bespoke, targeted, and relentlessly innovative, ensuring your brand shines above everything else
                <div className="row">
                    <div className="col-lg-4">
                        <div className={styles.sec2InnerSeo}>
                            <div className={styles.counting}>01</div>
                            <h3 className={styles.serviceTitle}>Boost Your Visibility</h3>
                            <img src={divider} alt="" className={styles.divider} />
                            <div className={styles.info}>
                            Be seen. SEO strategies increase your website's visibility, pushing you to the top of search engine results where your audience can't help but find you
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className={styles.sec2InnerSeo}>
                            <div className={styles.counting}>02</div>
                            <h3 className={styles.serviceTitle}>Drive Targeted Traffic</h3>
                            <img src={divider} alt="" className={styles.divider} />
                            <div className={styles.info}>
                            It's not just about attracting crowds; it's about attracting the right crowd. Your website will attract visitors who are genuinely interested in what you offer, converting clicks into customers
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className={styles.sec2InnerSeo}>
                            <div className={styles.counting}>03</div>
                            <h3 className={styles.serviceTitle}>Increase conversions</h3>
                            <img src={divider} alt="" className={styles.divider} />
                            <div className={styles.info}>
                            Turn visitors into winners. We optimize every aspect of your site according to SEO strategies, ensuring traffic translates into revenue
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
                        <div className={`${styles.infoBox2} ${styles.flip_card}`}>
                            <div className={styles.flip_card_inner}>
                                <div className={styles.flip_card_front}>
                                    <img src={wwd2} alt="" className={styles.wwdIcon}/>
                                    <h3 className={styles.infoTitle}>Is your business ready to lead in the digital era?</h3>
                                    <div className={styles.boxInfo}>
                                    The journey to the top begins with a click. Get in touch now and start crafting your SEO strategy
                                    </div>
                                    <button className={styles.infoBtn}>Contact Us</button>  
                                </div>
                                <div className={styles.flip_card_back}>
                                    <img src={wwd2} alt="" className={styles.wwdIcon}/>
                                    <h3 className={styles.infoTitle}>BIs your business ready to lead in the digital era?</h3>
                                    <div className={styles.boxInfo}>
                                    The journey to the top begins with a click. Get in touch now and start crafting your SEO strategy
                                    </div>
                                    <button className={styles.infoBtn}>Contact Us</button>  
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="row">

            <h2 className={styles.sec5Title2}>Personalized SEO Services</h2>

                
                <div className="col-lg-4">
                    <div className={styles.puzzleBox2}>
                        <img src={puzzle} alt="" className={styles.puzzle} />
                        <h3 className={styles.puzzleBoxTitle}>SEO Content Creation</h3>
                        Our team creates compelling, keyword-rich content that engages and drives traffic for your business
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className={styles.puzzleBox2}>
                        <img src={puzzle} alt="" className={styles.puzzle} />
                        <h3 className={styles.puzzleBoxTitle}>Technical SEO</h3>
                        We ensure your website has a strong foundation, from site speed optimization to secure connections
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className={styles.puzzleBox2}>
                        <img src={puzzle} alt="" className={styles.puzzle} />
                        <h3 className={styles.puzzleBoxTitle}>On-Page Optimization</h3>
                        We optimize every element of your site, including titles, meta descriptions, and headers, to make them user-friendly and search engine-friendly
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className={styles.puzzleBox2}>
                        <img src={puzzle} alt="" className={styles.puzzle} />
                        <h3 className={styles.puzzleBoxTitle}>Local SEO</h3>
                        Dominate the local market with optimized local listings, ensuring you stand out in local searches and maps
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className={styles.puzzleBox2}>
                        <img src={puzzle} alt="" className={styles.puzzle} />
                        <h3 className={styles.puzzleBoxTitle}>Analytics and Reporting</h3>
                        EOur data-driven insights guide our SEO strategies, ensuring sustained success and continuous improvement
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className={styles.puzzleBox2}>
                        <img src={puzzle} alt="" className={styles.puzzle} />
                        <h3 className={styles.puzzleBoxTitle}>Off-Page Strategies</h3>
                        EWe build your online authority through strategic backlinks, boosting your site's credibility and reach
                    </div>
                </div>
            </div>
            
            
            <div className={styles.sec5}>
                <h2 className={styles.sec5Title} id='smeo'>Social Media Optimization: The Game-Changer</h2>
                <img src={design3} alt="" className={styles.sec5Img} />
                <div className={styles.sec5Info}>
                Getting noticed on social media isn't just an option anymore—every click, like, comment, and share counts. We help brands amplify their voices across platforms to be heard, followed, and remembered. There's more to SMEO than just posting; it's strategically positioning your content to maximize visibility and engagement. Make your brand the centre of conversations, leverage algorithms, and turn your social media platforms into engagement stations
                </div>
            </div>
                <div className="row">
                    <div className="col-lg-3">
                        <div className={styles.fBox2}>
                            <img src={fIco} alt="" className={styles.fIco} />
                            <h3 className={styles.fBoxTitle}>SEO Content Creation</h3>
                            Our team creates compelling, keyword-rich content that engages and drives traffic for your business
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className={styles.fBox2}>
                            <img src={fIco} alt="" className={styles.fIco} />
                            <h3 className={styles.fBoxTitle}>Profile Enhancement</h3>
                            Make your social media profiles more noticeable and discoverable
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className={styles.fBox2}>
                            <img src={fIco} alt="" className={styles.fIco} />
                            <h3 className={styles.fBoxTitle}>Engagement Optimization</h3>
                            Create a vibrant community around your brand by implementing engagement strategies
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className={styles.fBox2}>
                            <img src={fIco} alt="" className={styles.fIco} />
                            <h3 className={styles.fBoxTitle}>Analytical Insights</h3>
                            Utilize data-driven insights to stay on top of social media
                        </div>
                    </div>
                </div>
            
            <div className={styles.sec5}>
                <h2 className={styles.sec5Title2} id='compaigns' >Creative Campaigns: Where Ideas Become Action</h2>
                <img src={seo2} alt="" className={styles.sec5Img} />
                <div className={styles.sec5Info2} >
                Imaginative campaigns are at the core of everything we do. Our creative team brings ideas to life, crafting campaigns that engage, inspire, and motivate. We understand our clients' goals and ensure our campaigns are effective and results-driven. Our campaigns resonate, engage, and inspire action in the dynamic digital world. You can count on our creative campaigns to connect, convert, and cultivate lasting relationships with your audience
                </div>
            </div>
            <div className="row">
                    <div className="col-lg-3">
                        <div className={styles.fBox2}>
                            <img src={fIco} alt="" className={styles.fIco} />
                            <h3 className={styles.fBoxTitle}>Idea generation</h3>
                            Every great campaign starts with an idea. Our creative team researches your brand's ethos, market trends, and consumer insights
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className={styles.fBox2}>
                            <img src={fIco} alt="" className={styles.fIco} />
                            <h3 className={styles.fBoxTitle}>Content Creation</h3>
                            Our team of storytellers, designers, and digital artisans creates compelling content that speaks directly to your audience
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className={styles.fBox2}>
                            <img src={fIco} alt="" className={styles.fIco} />
                            <h3 className={styles.fBoxTitle}>Digital Omni-Channel Execution</h3>
                            We ensure your campaign goes viral across all channels. Our cohesive campaign includes social media, email marketing, SEO, and paid advertising
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className={styles.fBox2}>
                            <img src={fIco} alt="" className={styles.fIco} />
                            <h3 className={styles.fBoxTitle}>Analytics and Optimization</h3>
                            Access is in the details. Real-time monitoring, analysis, and refinement boosts performance and ROI for your campaign
                        </div>
                    </div>
                </div>
            
            

            
            <div className={styles.sec5}>
                <h2 className={styles.sec5Title2} id='Brand-strategy-and-Positioning'>Brand Strategy and Positioning: Making Brands Unforgettable </h2>
                <img src={seo3} alt="" className={styles.sec5Img} />
                <div className={styles.sec5Info2}>
                Command your space in world's dynamic market. Our branding experts understand the importance of a powerful brand strategy and smart positioning. The first step in our approach is understanding your brand's core values, vision, and unique proposition. With your business goals in mind, we craft a strategy that resonates with your target audience and sets you apart
                </div>
                <h2 className={`${styles.sec5Title2} mt-5`}>Personalized Branding Services</h2>
                <div className="row mt-4">
                    <div className="col-lg-3">
                        <div className={styles.fBox2}>
                            <img src={fIco} alt="" className={styles.fIco} />
                            <h3 className={styles.fBoxTitle}>Brand Audit</h3>
                            The first step is an analysis of your current brand positioning, audience perceptions, and competitive landscape. The insight lays the foundation for all strategic development
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className={styles.fBox2}>
                            <img src={fIco} alt="" className={styles.fIco} />
                            <h3 className={styles.fBoxTitle}>Identity and Voice Development</h3>
                            Telling your brand's story requires an identity and voice. These elements are refined across all touchpoints to ensure they are powerful and consistent
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className={styles.fBox2}>
                            <img src={fIco} alt="" className={styles.fIco} />
                            <h3 className={styles.fBoxTitle}>Positioning Strategy</h3>
                            We tailor a positioning strategy for your brand so you're always in the mind of your target audience
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className={styles.fBox2}>
                            <img src={fIco} alt="" className={styles.fIco} />
                            <h3 className={styles.fBoxTitle}>Brand Messaging and Storytelling</h3>
                            We build loyalty and advocacy by crafting compelling messages that connect with your audience emotionally
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
                            What is SEO?
                            </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            SEO stands for Search Engine Optimization. It is the process of optimizing your website to increase its visibility and ranking on search engine results pages (SERPs), thereby driving organic (non-paid) traffic to your site.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Why is SEO important for my website?
                            </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            SEO is crucial for your website because it helps drive organic traffic from search engines. When your website ranks higher in search results, it increases visibility and attracts more potential customers. Additionally, SEO improves user experience, credibility, and helps establish your brand online.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            What does SMEO stand for?
                            </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            SMEO stands for Social Media Engine Optimization. It involves optimizing your social media profiles and content to improve visibility and engagement on social media platforms.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            How do SMEO campaigns differ from traditional SEO?
                            </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            SMEO campaigns focus specifically on leveraging social media platforms such as Facebook, Instagram, Twitter, and LinkedIn to improve a brand's online presence, while traditional SEO primarily concentrates on optimizing websites for search engines like Google.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            What are some key components of successful SMEO campaigns?
                            </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            Successful SMEO campaigns typically involve creating engaging content tailored to each social media platform, utilizing relevant hashtags, fostering meaningful interactions with followers, analyzing metrics to refine strategies, and collaborating with influencers or partners for wider reach.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                            What are SEO campaigns?
                            </button>
                            </h2>
                            <div id="collapseNine" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            SEO campaigns refer to strategic efforts aimed at improving a website's search engine rankings and increasing organic traffic. These campaigns often involve keyword research, content optimization, link building, and technical optimization.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                            What is brand strategy?
                            </button>
                            </h2>
                            <div id="collapseTen" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            Brand strategy involves creating a plan to establish and communicate the unique value proposition of a brand to its target audience. It encompasses brand positioning, messaging, visual identity, and customer experience.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                            How does positioning impact branding?
                            </button>
                            </h2>
                            <div id="collapseEleven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            Positioning refers to how a brand is perceived in the minds of consumers relative to its competitors. Effective positioning helps differentiate a brand and influence consumer preferences, ultimately shaping its overall branding and market perception.
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
                            How can SMEO campaigns benefit businesses?
                            </button>
                            </h2>
                            <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            SMEO campaigns can benefit businesses by increasing brand awareness, fostering customer loyalty and trust, driving website traffic, generating leads, boosting sales, and providing valuable insights into consumer behavior and preferences.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                            What metrics should I track to measure the effectiveness of my SMEO campaigns?
                            </button>
                            </h2>
                            <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            Key metrics to track for SMEO campaigns include reach, engagement (likes, comments, shares), click-through rate (CTR), conversion rate, follower growth, post frequency, and return on investment (ROI) from social media efforts.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                            How long does it take to see results from SEO efforts?
                            </button>
                            </h2>
                            <div id="collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            The timeline for seeing results from SEO efforts can vary based on various factors such as competition, industry, and the current state of your website. Generally, it can take anywhere from a few weeks to several months to notice significant improvements in rankings and organic traffic. Consistent and strategic SEO efforts yield long-term benefits for your website's visibility and performance.
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
