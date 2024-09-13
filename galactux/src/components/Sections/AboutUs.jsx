import NoFuncBtn from '../Reuse/NoFuncBtn';
import  businessGrowth from '../../assets/business-growth.png'
import  onlineRevenue from '../../assets/online-revenue.png'
import  organicTraffic from '../../assets/organic-traffic.png'
import  setUp from '../../assets/set-up.png'
import  oldWay from '../../assets/old-way.png'
import  newWay from '../../assets/new-way.png'

function AboutUs(){

    return(
        <section id="about-us" className="side-padding-72 flex-column gap-80">
            <div className="flex-column gap-16 align-center scale-out">
                <div className="flex-column gap-8 align-center">
                    <NoFuncBtn icon="chat" label="Innovative Design Solutions for Modern Businesses" />
                    <h1 className="bold-60">Who We Are</h1>
                </div>
                <p className="reg-14">Innovative Design Solutions for Modern Businesses</p>
            </div>
            <div className="about-us-grid">
                <div className="about-box-1 scale-out about-box flex-column gap-80">
                    <h2 className="bold-30 width-50">Committed to helping businesses thrive with creative solutions for their unique needs.</h2>
                    <div className="flex-row gap-64">
                        <div className="flex-column gap-16 ">
                            <img className="size-80px animate-rotate" src={businessGrowth} alt="" />
                            <h2 className="bold-30">2X</h2>
                            <p className="reg-14">Business Growth</p>
                        </div>
                        <div className="flex-column gap-16 ">
                            <img className="size-80px animate-rotate" src={onlineRevenue} alt="" />
                            <h2 className="bold-30">1.6X</h2>
                            <p className="reg-14">Online Revenue</p>
                        </div>
                        <div className="flex-column gap-16 ">
                            <img className="size-80px animate-rotate" src={organicTraffic} alt="" />
                            <h2 className="bold-30">3X</h2>
                            <p className="reg-14">Organic Traffic</p>
                        </div>
                    </div>
                    <div className="inner-shadow-circle"></div>
                </div>
                <div className="about-box-2 scale-out about-box flex-column gap-16">
                    <img className="size-80px animate-rotate" src={setUp} alt="" />
                    <h2 className="bold-22">Set-up</h2>
                    <p className="reg-14">Why do we need innovative design solutions? In today's fast-paced digital landscape, standing out requires more than just good design. It demands creativity, agility, and a deep understanding of your brand's unique voice.</p>
                </div>
                <div className="about-box-3 scale-out about-box flex-column gap-16">
                    <img className="size-80px animate-rotate" src={oldWay} alt="" />
                    <h2 className="bold-22">Old way</h2>
                    <p className="reg-14">For years, our teams have witnessed businesses struggle with traditional design agencies. The process was often slow, expensive, and filled with endless back-and-forths, leaving clients frustrated and delaying their growth.</p>
                </div>
                <div className="about-box-4 scale-out about-box flex-column gap-16">
                    <img className="size-80px animate-rotate" src={newWay} alt="" />
                    <h2 className="bold-22">New way</h2>
                    <p className="reg-14">Why do we need innovative design solutions? In today's fast-paced digital landscape, standing out requires more than just good design. It demands creativity, agility, and a deep understanding of your brand's unique voice.</p>
                </div>
            </div>
        </section>
    );

}

export default AboutUs;