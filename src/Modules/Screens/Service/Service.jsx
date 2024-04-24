import { useEffect } from 'react';
import CardBox from './ServiceCardBox/CardBox';
import dataanalysis from '../../../assets/Images/analysisdata.webp';
import UIDesign from '../../../assets/Images/UI-designing.png';
import Seo from '../../../assets/Images/seo-services.png';
import contentWriting from '../../../assets/Images/content-writing.webp';
import WebDev from '../../../assets/Images/web-development.webp';
import FrontDev from '../../../assets/Images/frontend-development.png';
import BackDev from '../../../assets/Images/backend-development.png';
import Integrate from '../../../assets/Images/TP-Integration.png';
import Testing from '../../../assets/Images/Testing.webp';
import Support from '../../../assets/Images/maintain-Support.png';
import techService from '../../../assets/Images/techservice.png';
import './Service.css';
import TechStack from './TechStack/TechStack';
import reactlogo from '../../../assets/Images/reactlogo.png';
import phplogo from '../../../assets/Images/phplogo.png';
import angularlogo from '../../../assets/Images/angularlogo.png';
import htmllogo from '../../../assets/Images/htmllogo.png';
import csslogo from '../../../assets/Images/csslogo.png';
import javascriptlogo from '../../../assets/Images/javascriptlogo.png';
import nodelogo from '../../../assets/Images/nodelogo.png';
import ioslogo from '../../../assets/Images/ioslogo.png';
import androidlogo from '../../../assets/Images/androidlogo.png';
import swiflogo from '../../../assets/Images/swiftlogo.png';
import flutterlogo from '../../../assets/Images/flutterlogo.png';
import objectClogo from '../../../assets/Images/objectClogo.png';
import invisionlogo from '../../../assets/Images/invisiologo.png';
import sketchlogo from '../../../assets/Images/sketchlogo.png';
import figmalogo from '../../../assets/Images/Figmalogo.png';
import Adobelogo from '../../../assets/Images/Adobelogo.png';

const Service = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <section className='ServicetWrapper mb-5'>
        <div className='ServiceBanner'>
          <div className="row">
            <div className="col-lg-12">
              <h1 className='serviceHead animate__animated animate__zoomInDown animate__delay-1s'>Services</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="ServiceProvided mb-5">
        <div className="container">
          <div className="row">
            <CardBox img={dataanalysis} ServiceName={'Business Analysis'} ServiceCont={'Over (50) websites developed with modern design, responsive layouts, and captivating content.'} />
            <CardBox img={UIDesign} ServiceName={'UX And UI Design'} ServiceCont={'We have helped over (100) websites and countless pages reach the pinnacle of top SERPs.'} />
            <CardBox img={Seo} ServiceName={'SEO Consideration'} ServiceCont={'We have helped countless businesses thrive by optimising driving targeted traffic.'} />
            <CardBox img={contentWriting} ServiceName={'Content Writing'} ServiceCont={'We have helped countless businesses thrive by optimising driving targeted traffic.'} />
            <CardBox img={WebDev} ServiceName={'Website Architecture'} ServiceCont={'Achieving an average ROAS of (250%) for over (10,000) campaigns, we know how to make your advertising budget work harder for you.'} />
            <CardBox img={FrontDev} ServiceName={'Front-End Development'} ServiceCont={'We have marketed over (1000) pieces of content in all forms on Google, social media making your brand stand out in the digital landscape.'} />
            <CardBox img={BackDev} ServiceName={'Back-End Development'} ServiceCont={'We have strategized, managed, and grown more than (100) social media profiles, ensuring your brand shines online.'} />
            <CardBox img={Integrate} ServiceName={'Integration'} ServiceCont={'We have strategized, managed, and grown more than (100) social media profiles, ensuring your brand shines online.'} />
            <CardBox img={Testing} ServiceName={'Testing & QA'} ServiceCont={'We have strategized, managed, and grown more than (100) social media profiles, ensuring your brand shines online.'} />
            <CardBox img={Support} ServiceName={'Maintenance And Support'} ServiceCont={'We have strategized, managed, and grown more than (100) social media profiles, ensuring your brand shines online.'} />
          </div>
        </div>
      </section>

      <section className='Technology mb-5'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="techWrapper">
                <h2 className='Techhead'>TOOLS & TECHNOLOGIES OUR SOFTWARE DEVELOPERS USE</h2>
                <p className='TechCont'>Intellectsoft has grown into an international contestant in software engineering with wide-ranging expertise in all the areas needed for reliable software development.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="techWrapper">
                <img src={techService} alt="techService" />
              </div>
            </div>
          </div>
        </div>
        <TechStack head1="Web" head2="Development" img1={reactlogo} img2={phplogo} img3={angularlogo} img4={htmllogo} img5={csslogo} img6={javascriptlogo} img7={nodelogo} lang1="React" lang2="PhP" lang3="Angular" lang4="HTML" lang5="CSS" lang6="JavaScript" lang7="Node" background="back1" />
        <TechStack head1="Mobile" head2="Application" img1={ioslogo} img2={androidlogo} img3={swiflogo} img4={flutterlogo} img5={objectClogo} img6={reactlogo} lang1="iOS" lang2="Android" lang3="Swift" lang4="Flutter" lang5="Objective C" lang6="React Native" background="back2" />
        <TechStack head1="Design" img1={invisionlogo} img2={sketchlogo} img3={figmalogo} img4={Adobelogo} lang1="invison" lang2="Sketch" lang3="Figma" lang4="Adobe XD" background="back3" />
      </section>
    </>
  )
}

export default Service;