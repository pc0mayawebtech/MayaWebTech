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
import './Service.css';
const Service = () => {
  return (
    <>
      <section className='ServicetWrapper mb-5'>
        <div className='ServiceBanner'>
          <div className="row">
            <div className="col-lg-12">
              <h1 className='serviceHead'>Services</h1>
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
        <div className='container'>
          <div className='TechWrapper mb-5'>
            <h2 className='Techhead'>TOOLS & TECHNOLOGIES OUR SOFTWARE DEVELOPERS USE</h2>
            <p className='TechCont'>Intellectsoft has grown into an international contestant in software engineering with wide-ranging expertise in all the areas needed for reliable software development.</p>
          </div>

          <div className='tools_list'>
            <div className='tools_list-top'>
              <div className='tools_list-item item-1 mb-2'>
                <h3 className='Language'>Languages</h3>
                <ul className='list'>
                  <li>Html</li>
                  <li>Css</li>
                  <li>Javscript</li>
                  <li>React</li>
                  <li>Php</li>
                  <li>Node</li>
                </ul>
              </div>

              <div className='tools_list-item item-1 mb-2'>
                <h3 className='Language'>FrameWorks</h3>
                <ul className='list'>
                  <li>Tailwind</li>
                  <li>Bootstrap</li>
                  <li>React</li>
                  <li>Laravel</li>
                  <li>Codeigniter</li>
                </ul>
              </div>
            </div>

            <div className='tools_list-bottom'>
              <div className='tools_list-item item-5 mb-2'>
                <h3 className='Language'>MOBILE</h3>
                <ul className='list'>
                  <li>iOS</li>
                  <li>Android</li>
                  <li>Javscript</li>
                </ul>
              </div>
              <div className='tools_list-item item-2 mb-2'>
                <h3 className='Language'>WEB</h3>
                <ul className='list'>
                  <li>Html</li>
                  <li>Css</li>
                  <li>Javscript</li>
                </ul>
              </div>
              <div className='tools_list-item item-3 mb-2'>
                <h3 className='Language'>DATABASE</h3>
                <ul className='list'>
                  <li>MySQL</li>
                  <li>NOSQL</li>
                </ul>
              </div>
              <div className='tools_list-item item-4 mb-2'>
                <h3 className='Language'>CLOUD</h3>
                <ul className='list'>
                  <li>AWS</li>
                  <li>Microsoft Azure</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Service;