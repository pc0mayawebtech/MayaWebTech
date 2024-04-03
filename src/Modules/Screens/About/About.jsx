import './About.css';
const About = () => {
  return (
    <>
      <section className='BannerBox mb-5'>
        <div className='InnerBanner'>
          <div className="row">
            <div className="col-lg-12">
              <h1 className='aboutHead'>About Us</h1>
            </div>
          </div>
        </div>
      </section>

      <section className='heroWrapper'>
        <div className="container">
          <div>
            <h2 className='digitalWrapper'>Welcome to Maya Web Tech</h2>
            <p className='WrapperContent'>Your Trusted Partner in Digital World !</p>
          </div>
          <div>
            <p className='abtCompany'>
              Welcome to Digital Molecule, your trusted partner in Delhi, India since 2012 (Earlier Known as VaMedia Box Pvt Ltd). With 13 years of dedication, we empower businesses through services like Digital Marketing, Website Development, Mobile App Development, Website Maintenance, and Graphic Design. Join us on a journey to transform your brands digital presence. Digital Molecule is more than a service; it's an experience, a shared journey towards your goals. Join us as we blend creativity, technology, and strategy to create a unique digital narrative. Welcome to a partnership that exceeds expectations, guiding your brand toward digital success.
            </p>
          </div>
        </div>
      </section>

      <section className='ChooseUs chooseOtherBg'>
        <div className="container"></div>
      </section>
    </>
  )
}

export default About;