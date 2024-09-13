import Button from '../Reuse/Button';
import NoFuncBtn from "../Reuse/NoFuncBtn";
import container from '../../assets/Container.png'
import container1 from '../../assets/Container-1.png'
import container2 from '../../assets/Container-2.png'
import container3 from '../../assets/Container-3.png'
import container4 from '../../assets/Container-4.png'
import container5 from '../../assets/Container-5.png'
import container6 from '../../assets/Container-6.png'
import container7 from '../../assets/Container-7.png'
import container8 from '../../assets/Container-8.png'


function OurWork(){

    return(
        <section id="OurWork" className="side-padding-72 flex-column gap-80">
            <div className="flex-column gap-16 align-center text-align scale-out">
                <div className="flex-column gap-8 align-center">
                    <NoFuncBtn icon="hat" label="Our Work"/>
                    <h1 className="bold-60">See Our Designs in Action</h1>
                </div>
                <p className="reg-14 width-70">Explore a selection of our best projects and witness how Galactux hits the mark every time. Our portfolio showcases a diverse range of creative solutions tailored to meet the unique needs of our clients.</p>
            </div>
            <div className="flex-column gap-16 align-center">
                <div className="tag-holder flex-row gap-8 scale-out">
                    <span className="tag active">All</span>
                    <span className="tag">Branding</span>
                    <span className="tag">UI/UX</span>
                    <span className="tag">Web</span>
                    <span className="tag">Graphics</span>
                </div>
                <div className="our-work-cards-holder">
                    <div className="our-work-card scale-out">
                        <img className="img-fit" src={container} alt="" />
                        <Button label="Check Now" />
                    </div>
                    <div className="our-work-card scale-out">
                        <img className="img-fit" src={container1} alt="" />
                        <Button label="Check Now" />
                    </div>
                    <div className="our-work-card scale-out">
                        <img className="img-fit" src={container2} alt="" />
                        <Button label="Check Now" />
                    </div>
                    <div className="our-work-card scale-out">
                        <img className="img-fit" src={container3} alt="" />
                        <Button label="Check Now" />
                    </div>
                    <div className="our-work-card scale-out">
                        <img className="img-fit" src={container4} alt="" />
                        <Button label="Check Now" />
                    </div>
                    <div className="our-work-card scale-out">
                        <img className="img-fit" src={container5} alt="" />
                        <Button label="Check Now" />
                    </div>
                    <div className="our-work-card scale-out">
                        <img className="img-fit" src={container6} alt="" />
                        <Button label="Check Now" />
                    </div>
                    <div className="our-work-card scale-out">
                        <img className="img-fit" src={container7} alt="" />
                        <Button label="Check Now" />
                    </div>
                    <div className="our-work-card scale-out">
                        <img className="img-fit" src={container8} alt="" />
                        <Button label="Check Now" />
                    </div>
                </div>
            </div>
        </section>
    );

}

export default OurWork;