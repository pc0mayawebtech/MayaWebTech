import { FastForward } from 'lucide-react';
import "./ServicesCard.css"

const ServicesCard = ({ title, content }) => {
    return (
        <div className="col-lg-6 col-md-12 col-sm-12 col-12 mb-4">
            <section className='CardBox'>
                <div className="container">
                    <div>
                        <div className='boxCard'>
                            <h4 className='boxCardHead'><FastForward className='fastIcon' /> {title}</h4>
                            <p className='boxCardCont'>{content}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ServicesCard;