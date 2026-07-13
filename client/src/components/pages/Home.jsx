import React from 'react'
import SecSection from '../home_sections/secSection'
import HeroSection from '../home_sections/HeroSection'
import ThirdSection from '../home_sections/ThirdSection'
import ForthSection from '../home_sections/ForthSection'
import FithSection from '../home_sections/FithSection'
import featureImg from '../../assets/logo.png'
import {Helmet} from "react-helmet";
import SixthSection from '../home_sections/SixthSection'


export default function Home() {
  const schema = {
    "@context": "http://schema.org",
    "@type": "Organization",
    "name": "Invosoft",
    "url": "https://invosoft.tech/",
    "logo": {featureImg},
    "description": "Recognized as one of the best Creative agencies in United States. Invosoft offers comprehensive online marketing solutions. Specializing in SEO, social media marketing, and innovative digital strategies, we empower businesses to maximize their online prese nce and achieve measurable results.",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "areaServed": "United States"
    },
    "sameAs": [
      "https://www.facebook.com/digitalenergy",
      "https://www.instagram.com/digitalenergyau/"
    ]
  };

  
  return (
    <>
    <Helmet>
    <title> Creative Agency | Invosoft </title>
    <meta name="description" content="Premier Creative agency specializing in web development, SEO, SMM, UI/UX, graphic designing, and video animations. We deliver innovative solutions to elevate your brand's online presence." />
    <link rel="canonical" href="https://invosoft.tech/" />
    <meta name="twitter:card" content="Invosoft"/>
    <meta name="twitter:title" content="Creative Agency in United State of America | Invosoft"/>
    <meta name="twitter:description" content="The top Creative agency in US. Our expertise lies in web development, SEO, SMM, UI/UX, graphic designing and Video Animations."/>
    <meta name="twitter:image" content={featureImg}/>
    <meta name="twitter:image:alt" content="Creative Agency in US | Invosoft"/>
    <meta name="robots" content="index, follow"/>
    <meta property="og:type" content="Invosoft"/>
    <meta property="og:title" content="Creative Agency in US | Invosoft"/>
    <meta property="og:image" content={featureImg}/>
    <meta property="og:image:secure_url" content={featureImg}/>
    <meta property="og:image:width" content="3000"/>
    <meta property="og:image:height" content="1802"/>
    <meta property="og:description" content="The top Creative agency in US. Our expertise lies in web development, SEO, SMM, UI/UX, graphic designing and Video Animations."/>
    <meta property="og:url" content="https://invosoft.tech/"/>
    <meta property="og:site_name" content="invoosft.tech"/>
    </Helmet>
      <HeroSection/>
      <SecSection />
      <ForthSection/>
      <ThirdSection/>
      <FithSection/> 
      <SixthSection/>
      <script type="application/ld+json">
          {JSON.stringify(schema)}
      </script>
    </>
  )
}