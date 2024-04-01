import './Home.css';
import { useRef } from 'react';
import heroBannerVideo from '../../../assets/Videos/HeroBanner2.mp4';
import about from '../../../assets/Images/about.gif';
import ServicesCard from './services-card/ServicesCard';
import CompanyWork from './company-work/CompanyWork';
import client from '../../../assets/Images/clients1.png';
import project from '../../../assets/Images/projects.png';
import support from '../../../assets/Images/support.png';
import hardWork from '../../../assets/Images/team-member.png';
const Home = () => {
  const videoRef = useRef();

  const setPlayBack = () => {
    videoRef.current.playbackRate = 0.75;
  }
  return (
    <>
      <section className='HomeWrapper'>
        <div className='ElementorVideo'>
          <video ref={videoRef} onCanPlay={() => setPlayBack()} autoPlay muted className='elementorSetVideo' style={{ width: "1342px", height: "550px" }}>
            <source src={heroBannerVideo} type='video/mp4' />
          </video>
          <div className="container">
            <div className='row'>
              <div className="col-lg-5">
                <div className='bannerLeftSide'>
                  <h1 className='bannerHead'>Global Market Intelligence Consultancy</h1>
                  <p className='bannerPara'>We can research any market, any company, any topic, anywhere.</p>
                </div>
              </div>
              <div className="col-lg-7">
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='AboutUS'>
        <div className="container">
          <div>
            <div className="row">
              <div className="col-lg-6">
                <div className='aboutHeadWrapper'>
                  <h2 className='IntroCompany'>About Us</h2>
                  <span className='Textdecorate'></span>
                  <h2>India Best Web Designing Company</h2>
                  <p className='CompanyDescript'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed impedit sint, atque, quaerat perferendis in expedita non dolores labore distinctio eius quibusdam ea obcaecati et quod cupiditate hic iste quae!</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed impedit sint, atque, quaerat perferendis in expedita non dolores labore distinctio eius quibusdam ea obcaecati et quod cupiditate hic iste quae!</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed impedit sint, atque, quaerat perferendis in expedita non dolores labore distinctio eius quibusdam ea obcaecati et quod cupiditate hic iste quae!</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed impedit sint, atque, quaerat perferendis in expedita non dolores labore distinctio eius quibusdam ea obcaecati et quod cupiditate hic iste quae!</p>
                </div>
              </div>
              <div className="col-lg-6">
                <label className='ABoutLogo'>
                  <img src={about} alt="about" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='SolutionDelivered'>
        <div className="container">
          <div className='SolDelievreHead'>
            <h2>Services We Deliver</h2>
            <span className='Textdecorate'></span>
            <div className="row mt-5">
              <ServicesCard title="Website Design & Hosting" content="Devise and implement business strategies that drive success—for an entire business or division, technology, or asset." />
              <ServicesCard title="Google Adwords" content="By balancing and optimizing the many competing assets and initiatives achieve deep & lasting improvements." />
              <ServicesCard title="Search Engine Optimization" content="Organizations are designed to be effective and an efficient. The processes require cross-functional teaming." />
              <ServicesCard title="Social Media Optimization" content="Our decision risk analytics empower clients to develop rational decision-making models and development." />
              <ServicesCard title="Mobile Web Designing" content="The venues where savings and investments are channeled between the suppliers who have capital and those." />
              <ServicesCard title="Content Optimization" content="Redefine your workplace value equation that encourage staff to work more attentively and gracefully." />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row mt-5">
            <CompanyWork count="2000" increment="+" img={client} worksucess="Clients" />
            <CompanyWork count="1400" increment="+" img={project} worksucess="Projects" />
            <CompanyWork count="24" img={support} worksucess="Hours Of Support" />
            <CompanyWork count="70" increment="+" img={hardWork} worksucess="Hard Workers" />
          </div>
        </div>
      </section>

      <section className='Testinomials mt-5'>
        <div className="container">
          <div className='row'>
            <div className="col-lg-6 pt-5">
              <div>
                <h2 className='text-white'>Read What Our Clients Say
                  About Us!
                </h2>
                <p className='text-white'>Client feedback motivates us to do more, be more, and accomplish more. We are able to perform even better thanks to our clients, their complimentary comments, and our desire for shared success.</p>
              </div>
            </div>
            <div className="col-lg-6"></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;