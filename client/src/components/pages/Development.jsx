import React from "react";
import styles from "../../assets/stylesheets/subservices.module.css";
import web1 from "../../assets/services_elements/web1.gif";
import web2 from "../../assets/services_elements/web2.gif";
import web3 from "../../assets/services_elements/web3.gif";
import web4 from "../../assets/services_elements/web4.gif";
import node from "../../assets/services_elements/node.png";
import flutter from "../../assets/services_elements/flutter.png";
import webflow from "../../assets/services_elements/webflow.png";
import spline from "../../assets/services_elements/spline.png";
import wordpress from "../../assets/services_elements/wordpress.png";
import react from "../../assets/services_elements/react.png";
import mongodb from "../../assets/services_elements/mongodb.png";
import firebase from "../../assets/services_elements/Firebase.png";
import faq from "../../assets/services_elements/faq.gif";
import divider from "../../assets/services_elements/divider2.svg";
import pseudo from "../../assets/pseudo.svg";
import robo from "../../assets/wwd_elements/robo_wwd.svg";
import wwd2 from "../../assets/wwd_elements/wwd2.svg";
import wwd_one from "../../assets/wwd_elements/1.svg";
import wwd_two from "../../assets/wwd_elements/2.svg";

export default function Development() {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className={`${styles.sec1} row`}>
          <div className="col-12">
            <div className={styles.heroImgBg}>
              <img src={web1} alt="" className={styles.heroImgM} />
            </div>
            <div className="position-relative">
              <h1 className={styles.title}>Shape Tomorrow with Every Click</h1>
              <img src={pseudo} alt="" className={styles.pseudo} />
            </div>
            <h2 className={styles.subTitle}>Developing Digital Frontiers</h2>
          </div>
          <div className="col-lg-8">
            <div className={styles.description}>
              Let's build not just websites and apps but gateways to
              unforgettable and transformative experiences. This is where your
              journey to digital excellence begins. This is Invosoft - where
              every click shapes tomorrow. Our expertise in web development and
              mobile app creation sets the stage for unparalleled digital
              experiences. Each project is a stepping stone towards your
              unmatched digital presence. We are sculpting your digital future.
              Let's redefine what's possible.
            </div>
          </div>
          <div className="col-lg-4">
            <img src={web1} alt="" className={styles.heroImg} />
          </div>
        </div>
      </div>
      <div className="container">
        <div className={styles.sec6}>
          <div className="row">
            <div className="col-lg-4">
              <div className={styles.web2Bg}>
                <img src={web2} alt="" className={styles.web2} />
                <button className={styles.infoBtn2}>Contact Us</button>
              </div>
            </div>
            <div className="col-lg-8 p-0 m-0">
              <div className={styles.web2Right}>
                <h2 className={styles.sec6Title}>A Web Development Agency</h2>
                <h3 className={styles.sec6SubTitle}>
                  Making a lasting impression starts here.
                </h3>
                We make bespoke solutions that captivate and convert. Let's
                merge code and creativity. Having an edge in world's competitive
                marketplace is nothing short of crucial. It is an absolute
                necessity. We design your website strategically and incorporate
                cutting-edge technology to ensure it performs seamlessly. An
                Anchor for Your Digital Presence: The Power of a Website
                <h3 className={styles.sec6SubTitle}>
                  An Anchor for Your Digital Presence: The Power of a Website
                </h3>
                The power of digital presence cannot be underestimated. The
                website is the cornerstone of your brand, a testament to your
                mission and potential. We transform your website into an
                unforgettable experience that marks the beginning of something
                extraordinary. Think of a world where first impressions are not
                just lasting but transformative. Websites serve as the digital
                anchors where businesses meet opportunities. It is your website
                that facilitates discovery, connections, and engagement for your
                audience
              </div>
            </div>
          </div>
        </div>

        <div className={styles.sec5}>
          <h2 className={styles.sec5Title}>
            Crafting Intuitive Digital Experiences
          </h2>
          <img src={web3} alt="" className={styles.sec5Img} />
          <div className={styles.sec5Info}>
            The foundations of back-end development are complemented by
            front-end development expertise, resulting in full-stack
            development's robust flexibility. Our service is designed to meet
            your diverse needs, powering your digital presence.
            <div className="row">
              <div className="col-lg-4">
                <div className={styles.sec2InnerWeb}>
                  <div className={styles.counting}>01</div>
                  <h3 className={styles.serviceTitle}>Front-End Development</h3>
                  <img src={divider} alt="" className={styles.divider} />
                  <div className={styles.info}>
                    Where aesthetics meet functionality. Our front-end solutions
                    breathe life into your website. The interfaces we create are
                    not only visually stunning but also seamlessly functional
                    across all devices.
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className={styles.sec2InnerWeb}>
                  <div className={styles.counting}>02</div>
                  <h3 className={styles.serviceTitle}>Back-End Development</h3>
                  <img src={divider} alt="" className={styles.divider} />
                  <div className={styles.info}>
                    The backbone of your digital operations. We ensure your
                    website's engine runs smoothly, efficiently, and securely.
                    Simplifying and maintaining the unseen infrastructure that
                    supports your site's scalability and functionality.
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className={styles.sec2InnerWeb}>
                  <div className={styles.counting}>03</div>
                  <h3 className={styles.serviceTitle}>
                    Full Stack Development
                  </h3>
                  <img src={divider} alt="" className={styles.divider} />
                  <div className={styles.info}>
                    The ultimate blend of front and back-end technologies. We
                    offer complete solutions for projects requiring
                    comprehensive expertise. Using this holistic approach
                    ensures functionality and cohesion.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sec5}>
          <h2 className={styles.sec5Title2} id="mobile-application-development">
            Mobile App Development
          </h2>
          <img src={web4} alt="" className={styles.sec5Img} />
          <div className={styles.sec5Info2}>
            <h3 className={styles.sec5InfoTitle}>
              Crafting Connections, Navigating the Future
            </h3>
            Leap from the digital sidelines into the hands of your audience.
            Become a part of their daily lives. It's about making every tap,
            swipe, and scroll a step towards something greater. Unlock a world
            where your services meet your clients wherever they are. A mobile
            app ensures you're just a touch away, ready to offer solutions,
            smiles, and satisfaction. It's not just convenience; it's connection
            <h3 className={styles.sec5InfoTitle}>
              Cultivate Loyalty in Every Interaction
            </h3>
            Imagine giving your audience the power to choose, buy, or learn with
            just a flick on their screens. Mobile apps place control in their
            hands, making every interaction an empowering decision towards their
            needs and desires. With each use, your app reinforces why they chose
            you. Tailored experiences, rewards, and ease of access turn casual
            users into loyal advocates. It's about crafting relationships that
            last, one interaction at a time
          </div>
        </div>
        <div className={styles.sec2}>
          <div className="position-relative">
            <h2 className={styles.sec2Title}>
              Crafting Tomorrow's Solutions Today With Innovation
            </h2>
            <img src={pseudo} alt="" className={styles.pseudo3} />
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className={styles.techIcoBg}>
                <img src={node} alt="" className={styles.techIco} />
              </div>
            </div>
            <div className="col-lg-3">
              <div className={styles.techIcoBg}>
                <img src={react} alt="" className={styles.techIco} />
              </div>
            </div>

            <div className="col-lg-3">
              <div className={styles.techIcoBg}>
                <img src={flutter} alt="" className={styles.techIco} />
              </div>
            </div>
            <div className="col-lg-3">
              <div className={styles.techIcoBg}>
                <img src={webflow} alt="" className={styles.techIco} />
              </div>
            </div>
            <div className="col-lg-3">
              <div className={styles.techIcoBg}>
                <img src={spline} alt="" className={styles.techIco} />
              </div>
            </div>
            <div className="col-lg-3">
              <div className={styles.techIcoBg}>
                <img src={wordpress} alt="" className={styles.techIco} />
              </div>
            </div>
            <div className="col-lg-3">
              <div className={styles.techIcoBg}>
                <img src={firebase} alt="" className={styles.techIco} />
              </div>
            </div>
            <div className="col-lg-3">
              <div className={styles.techIcoBg}>
                <img src={mongodb} alt="" className={styles.techIco} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sec3}>
          <div className="row">
            <div className="col-lg-6">
              <div className={styles.roboBg}>
                <img src={robo} alt="" className={styles.robo} />
                <div className={`res-d ${styles.robo_right}`}>
                  <img src={wwd_one} alt="" />
                  <img src={wwd_two} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={`${styles.infoBox} ${styles.flip_card}`}>
                <div className={styles.flip_card_inner}>
                  <div className={styles.flip_card_front}>
                    <img src={wwd2} alt="" className={styles.wwdIcon} />
                    <h3 className={styles.infoTitle}>
                      Get Started with Invosoft
                    </h3>
                    <div className={styles.boxInfo}>
                      Ready to turn the digital dreamscape into your playground?
                      It's time. We're not just about emails and calls but
                      conversations and collaborations. Discuss your web and app
                      development needs with us, and let's map out a strategy
                      that puts you on the path to digital dominance
                    </div>
                    <button className={styles.infoBtn}>Contact Us</button>
                  </div>
                  <div className={styles.flip_card_back}>
                    <img src={wwd2} alt="" className={styles.wwdIcon} />
                    <h3 className={styles.infoTitle}>
                      Get Started with Invosoft
                    </h3>
                    <div className={styles.boxInfo}>
                      Ready to turn the digital dreamscape into your playground?
                      It's time. We're not just about emails and calls but
                      conversations and collaborations. Discuss your web and app
                      development needs with us, and let's map out a strategy
                      that puts you on the path to digital dominance
                    </div>
                    <button className={styles.infoBtn}>Contact Us</button>
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
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      What sets Invosoft apart from other design agencies?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      At Invosoft, we're not just designers; we're digital
                      architects, weaving innovation and creativity into every
                      project. Our approach is future-focused, our designs are
                      daring, and our results speak for themselves
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Can you accommodate specific branding guidelines or
                      preferences?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Absolutely! We understand the importance of brand
                      consistency and will ensure that our designs align
                      seamlessly with your existing branding guidelines or
                      preferences.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      How involved will I be in the design process?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      We believe in collaboration. Your input is invaluable to
                      us, and we'll work closely with you every step of the way
                      to ensure your vision is brought to life in the most
                      impactful way possible.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      What is your turnaround time for design projects?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Turnaround times can vary depending on the complexity and
                      scope of the project. However, we strive to deliver
                      high-quality designs promptly without compromising on
                      creativity or attention to detail.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      Do you offer revisions if I'm not satisfied with the
                      initial designs?
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Yes, we do! Client satisfaction is our top priority, and
                      we're happy to make revisions until you're completely
                      satisfied with the outcome.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSix"
                      aria-expanded="false"
                      aria-controls="collapseSix"
                    >
                      How do you stay updated with the latest design trends and
                      technologies?
                    </button>
                  </h2>
                  <div
                    id="collapseSix"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Continuous learning and innovation are at the core of what
                      we do. Our team regularly participates in training
                      programs, attends industry conferences, and stays abreast
                      of the latest design trends and technologies to ensure we
                      deliver cutting-edge solutions to our clients.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSeven"
                      aria-expanded="false"
                      aria-controls="collapseSeven"
                    >
                      What types of businesses do you typically work with?
                    </button>
                  </h2>
                  <div
                    id="collapseSeven"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      We work with businesses of all sizes and industries, from
                      startups to established brands. Whether you're a small
                      local business or a multinational corporation, we have the
                      expertise and creativity to elevate your brand's digital
                      presence.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseEight"
                      aria-expanded="false"
                      aria-controls="collapseEight"
                    >
                      How do I get started with Invosoft's design services?
                    </button>
                  </h2>
                  <div
                    id="collapseEight"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Getting started is easy! Simply reach out to us through
                      our website or the contact information provided, and one
                      of our friendly team members will be in touch to discuss
                      your project and how we can help bring your vision to
                      life.
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
  );
}
