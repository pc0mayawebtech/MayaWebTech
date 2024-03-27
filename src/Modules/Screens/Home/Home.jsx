import './Home.css';
import heroBannerVideo from '../../../assets/Videos/HeroBanner.mp4';
import about from '../../../assets/Images/about.gif';
const Home = () => {
  return (
    <>
      <section className='HomeWrapper'>
        <div className='ElementorVideo'>
          <video autoPlay muted className='elementorSetVideo' style={{ width: "1342px", height: "550px" }}>
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
              <div className="col-lg-7"></div>
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
            <h2>Solutions We Deliver</h2>
            <span className='Textdecorate'></span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;