import NoFuncBtn from "../Reuse/NoFuncBtn";
import Button from "../Reuse/Button";
import testimony from '../../assets/testimony.png'
import digiArt from '../../assets/digi-art.png'
import forward from '../../assets/forward.svg'
import backward from '../../assets/backward.svg'
import rocket from '../../assets/rocket.svg'

function Testimonial(){

    return(
        <section id="testimonial" className="side-padding-72 flex-column gap-80">
            <div className="flex-row gap-64 align-center">
                <div className="width-50 move-out-left">
                    <NoFuncBtn icon="chat2" label="What Our Clients Say"/>
                    <h1 className="bold-45">Real Feedback from Satisfied Customers</h1>
                </div>
                <div className="flex-column gap-16 width-50 move-out-right">
                    <p className="reg-14">Our mission is to deliver innovative, high-quality design solutions that empower businesses to achieve their full potential. We believe in the power of great design to make a lasting impact and are dedicated to providing exceptional service to our clients.</p>
                    <Button label="Shedule a  Call" />
                </div>
            </div>
            <div className="testimony-holder flex-column gap-32">
                <div className="testimony flex-row gap-64 align-center">
                    <div className="testimony-person scale-out">
                        <img className="img-fit" src={testimony} alt="" />
                    </div>
                    <div className="flex-column gap-32 scale-out">
                        <div className="flex-column gap-16">
                            <span className="flex-row gap-24">
                                <img style={{width: "166px", height: "40px",}} src={digiArt} alt="" />
                                <p className="reg-14">( Mr. Noufel Haque, CEO & Founder )</p>
                            </span>
                            <p className="reg-14">Establish a customer advisory board with representatives depending on the client's needs, industry.</p>
                        </div>
                        <div className="testimony-grid-holder">
                            <div className="testimony-block flex-column gap-8">
                                <div className="flex-row gap-16 align-center">
                                    <svg width="24" height="24" viewBox="0 0 12 13" fill="#FF2966" xmlns="http://www.w3.org/2000/svg"><path d="M10.0035 3.90804L1.41153 12.5L0 11.0885L8.59097 2.49651H1.01922V0.5H12V11.4808H10.0035V3.90804Z"/></svg>
                                    <h2 className="bold-30">5X</h2>
                                </div>
                                <p className="reg-14">Growth in 08 months</p>
                            </div>
                            <div className="testimony-block flex-column gap-8">
                                <div className="flex-row gap-16 align-center">
                                    <svg width="24" height="24" viewBox="0 0 12 13" fill="#FF2966" xmlns="http://www.w3.org/2000/svg"><path d="M10.0035 3.90804L1.41153 12.5L0 11.0885L8.59097 2.49651H1.01922V0.5H12V11.4808H10.0035V3.90804Z"/></svg>
                                    <h2 className="bold-30">3.5X</h2>
                                </div>
                                <p className="reg-14">Google & Meta Adds</p>
                            </div>
                            <div className="testimony-block flex-column gap-8">
                                <div className="flex-row gap-16 align-center">
                                    <svg width="24" height="24" viewBox="0 0 12 13" fill="#FF2966" xmlns="http://www.w3.org/2000/svg"><path d="M10.0035 3.90804L1.41153 12.5L0 11.0885L8.59097 2.49651H1.01922V0.5H12V11.4808H10.0035V3.90804Z"/></svg>
                                    <h2 className="bold-30">5.6%</h2>
                                </div>
                                <p className="reg-14">Avg. Conversion Rate</p>
                            </div>
                            <div className="testimony-block flex-column gap-8">
                                <div className="flex-row gap-16 align-center">
                                    <svg width="24" height="24" viewBox="0 0 12 13" fill="#FF2966" xmlns="http://www.w3.org/2000/svg"><path d="M10.0035 3.90804L1.41153 12.5L0 11.0885L8.59097 2.49651H1.01922V0.5H12V11.4808H10.0035V3.90804Z"/></svg>
                                    <h2 className="bold-30">160K+</h2>
                                </div>
                                <p className="reg-14">Active Online Platform</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-row align-center space-between">
                        <h2 className="bold22">1/<span style={{opacity: "0.7",}} className="bold-16">4</span></h2>
                    <div className="flex-row gap-16">
                        <span style={{opacity: "0.7",}} id="backward"><img className="absolute-center" src={backward} alt="" /></span>
                        <span id="forward"><img className="absolute-center" src={forward} alt="" /></span>
                    </div>
                </div>
            </div>
            <div className="bg-filler-testimony"></div>
            <div className="testimonial-circle-left">
                <img className="rocket" src={rocket} alt="" />
            </div>
            <div className="testimonial-circle-right"></div>
        </section>
    );

}

export default Testimonial