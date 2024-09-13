import ToggleBtn from '../Reuse/ToggleBtn';
import ticked from '../../assets/ticked.png'
import Button from '../Reuse/Button';

function Plan(){


    return(
        <section id="plan" style={{padding: "0px 144px",}} className='flex-column gap-80'>
            <div className="flex-column gap-16 align-center text-align scale-out">
                <h1 className="bold-60 width-70">Simple, Flexible, and Effective</h1>
                <p className="reg-14 width-70">Get your designs done effortlessly.. Enjoy excellent designs that elevate your brand, without the complexity.</p>
            </div>
            <div className='flex-column gap-24'>
                <div className="plan-holder flex-column gap-24">
                    <div className="flex-row space-between align-center">
                        <h2 className="bold-30 move-out-left">One Plan,<br />Endless Possibilities</h2>
                        <span className="flex-row gap-16 align-center move-out-right">
                            <h2 className="bold-16">Monthly</h2>
                            <ToggleBtn active={true} />
                            <h2 className="bold-16">Yearly (-20% Save)</h2>
                        </span>
                    </div>
                    <div className="hr-line scale-out"></div>
                    <div className='flex-row space-between'>
                        <div className="flex-column gap-16 move-out-left">
                            <h2 className="bold-16">What’s Included :</h2>
                            <ul className="reg-14">
                                <li className="flex-row gap-8 align-center"><img style={{width: "12px", height: "12px"}} src={ticked} alt="" />Unlimited brands</li>
                                <li className="flex-row gap-8 align-center"><img src={ticked} alt="" />One request at a time</li>
                                <li className="flex-row gap-8 align-center"><img src={ticked} alt="" />Average 48-hour delivery</li>
                                <li className="flex-row gap-8 align-center"><img src={ticked} alt="" />Pause or cancel anytime</li>
                            </ul>
                        </div>
                        <div className='vr-line scale-out'></div>
                        <div className='flex-column gap-16 move-out-right'>
                            <h2 className="bold-16">Add-ons :</h2>
                            <ul className="reg-14">
                                <li className="flex-row gap-8 align-center"><ToggleBtn active={true} />Wordpress Development ($500)</li>
                                <li className="flex-row gap-8 align-center"><ToggleBtn active={false} />Framer Development ($500)</li>
                                <li className="flex-row gap-8 align-center"><ToggleBtn active={false} />Webflow Development ($500)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="hr-line scale-out"></div>
                    <div className='flex-row space-between align-center'>
                        <h2 className='bold-45 move-out-left'>$2500<span style={{opacity: "0.7",}} className='bold-16'>/per month</span></h2>
                        <span className='move-out-right'><Button label="Subscribe" /></span>
                    </div>
                </div>
                <div className='plan-holder flex-row space-between align-center'>
                    <h2 className='bold-30 move-out-left'>Have any question?</h2>
                    <span className='move-out-right'><Button label="Shedule a call" /></span>
                </div>
            </div>
        </section>
    );

}

export default Plan