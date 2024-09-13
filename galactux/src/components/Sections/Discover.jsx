import NoFuncBtn from "../Reuse/NoFuncBtn";
import requests from '../../assets/requests.png'
import speedLimit from '../../assets/speed-limit.png'
import chats from '../../assets/chats.png'
import unlimitedBrands from '../../assets/unlimited-brands.png'
import gridBg from '../../assets/grid-bg.png'
import galactuxWhite from '../../assets/galactux-white.svg'
import consistantQuality from '../../assets/consistant-quality.png'
import galactuxTextShadow from '../../assets/galactux-text-shadow.png'

function Discover(){
    
    return(
        <section id="discover" className="side-padding-72 flex-column gap-80">
            <div className="circle-discover"></div>
            <div className="scale-out flex-column gap-8 align-center text-align">
                <NoFuncBtn icon="galactuxG" label="Why Choose Galactix?"/>
                <h1 className="bold-60">Discover the Benefits of Our Design Service</h1>
            </div>
            <div className="flex-column gap-24">
                <div className="discover-grid-1">
                    <div className="discover-grid-1-box-1 scale-out discover-box flex-column gap-24">
                        <img className="img-fit" src={requests} alt="" />
                        <div className="flex-column gap-8 padding-16">
                            <h2 className="bold-16">Unlimited Design Requests</h2>
                            <p className="reg-14">You're wondering if you'll ever run out of ideas. With us, you won't.</p>
                        </div>
                    </div>
                    <div className="discover-grid-1-box-3 scale-out discover-box flex-column gap-24">
                        <img className="img-fit" src={chats} alt="" />
                        <div className="flex-column gap-8 padding-16">
                            <h2 className="bold-16">1 on 1 Communication</h2>
                            <p className="reg-14">Enjoy seamless communication and quick responses.</p>
                        </div>
                    </div>
                    <div className="discover-grid-1-box-2 scale-out discover-box">
                        <div className="grid-circle grid-circle-1"></div>
                        <img className="bg" src={gridBg} alt="" />
                        <img className="absolute-center" src={galactuxWhite} alt="" />
                        <div className="grid-circle  grid-circle-2"></div>
                    </div>
                    <div className="discover-grid-1-box-4 scale-out discover-box flex-column gap-24">
                        <img className="img-fit" src={speedLimit} alt="" />
                        <div className="flex-column gap-8 padding-16">
                            <h2 className="bold-16">Fast Turnaround Time</h2>
                            <p className="reg-14">Our average 48-hour delivery means you’ll never be left waiting.</p>
                        </div>
                    </div>
                    <div className="discover-grid-1-box-5 scale-out discover-box flex-column gap-24">
                        <img className="img-fit" src={unlimitedBrands} alt="" />
                        <div className="flex-column gap-8 padding-16">
                            <h2 className="bold-16">Unlimited Brands</h2>
                            <p className="reg-14">Submit requests for any number of brands without any extra cost.</p>
                        </div>
                    </div>
                </div>
                <div className="discover-grid-2 flex-row gap-24">
                    <div className="discover-grid-2-box-1 scale-out discover-box flex-column gap-24 width-50">
                        <img className="img-fit" src={consistantQuality} alt="" />
                        <div className="flex-column gap-8 padding-16">
                            <h2 className="bold-16">Pause or Cancel Anytime</h2>
                            <p className="reg-14">Your needs change, and we get that. Pause or cancel your subscription at any time.</p>
                        </div>
                    </div>
                    <div className="discover-grid-2-box-2 scale-out discover-box flex-column gap-24 width-50">
                        <img src={galactuxTextShadow} alt="" />
                        <div className="flex-column gap-8 padding-16">
                            <h2 className="bold-16">Pause or Cancel Anytime</h2>
                            <p className="reg-14">Your needs change, and we get that. Pause or cancel your subscription at any time.</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );

}

export default Discover