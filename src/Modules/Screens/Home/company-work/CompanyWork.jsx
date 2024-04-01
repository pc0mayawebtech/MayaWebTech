import './CompanyWork.css';
const CompanyWork = ({count,increment,img,worksucess}) => {
    return (
        <div className="col-lg-3 col-md-12 col-sm-12 col-12 mb-4">
            <section className='BoxBlock'>
                <div className="container">
                    <div className='OuterCont'>
                        <div className='InnerboxCard'>
                            <span className='boxCardHead'>{count}</span>
                            <span className='boxCardHead'>{increment}</span>
                        </div>
                        <img src={img} alt="client" />
                    </div>
                    <h2 className='clientInfo'>{worksucess}</h2>
                </div>
            </section>
        </div>
    )
}

export default CompanyWork