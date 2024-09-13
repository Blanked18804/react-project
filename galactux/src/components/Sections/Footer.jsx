import logo from '../../assets/logo.svg'
import galactuxBg from '../../assets/galactux-bg.png'
import facebook from '../../assets/facebook-logo.svg'
import xLogo from '../../assets/x-logo.svg'
import linkedin  from '../../assets/linkedin-logo.svg'
import instagram from '../../assets/instagram-logo.svg'

function Footer(){

    return(
        <section style={{paddingBottom: "40px"}} id='footer' className='side-padding-72'>
            <footer className='flex-column gap-24'>
                <div className='flex-row space-between align-center'>
                    <div className='flex-column gap-16 width-50'>
                        <img style={{width: "98px", height: "98px"}} src={galactuxBg} alt="" />
                        <p className='reg-14'>Over the past 10 years, Galactux has worked with over 500 businesses, delivering top-notch design solutions that consistently hit the mark.</p>
                    </div>
                    <div>
                        <ul className='flex-row gap-16'>
                            <li className='social-logo'><img className='absolute-center' style={{width: "12px", height: "12px"}} src={facebook} alt="" /></li>
                            <li className='social-logo'><img className='absolute-center' style={{width: "12px", height: "12px"}} src={xLogo} alt="" /></li>
                            <li className='social-logo'><img className='absolute-center' style={{width: "12px", height: "12px"}} src={linkedin} alt="" /></li>
                            <li className='social-logo'><img className='absolute-center' style={{width: "12px", height: "12px"}} src={instagram} alt="" /></li>
                        </ul>
                    </div> 
                </div>
                <div className='footer-holder flex-row space-between align-center'>
                    <img src={logo} alt="" />
                    <div className='flex-row gap-32'>
                        <span className='flex-column gap-4'>
                            <p style={{opacity: "0.7",}} className='reg-14'>Phone</p>
                            <h2 className='bold-22'>+991 - 763 684 4563</h2>
                        </span>
                        <div className='vr-line'></div>
                        <span className='flex-column gap-4'>
                            <p style={{opacity: "0.7",}} className='reg-14'>Email Now</p>
                            <h2 className='bold-22'>info@examplegmail.com</h2>
                        </span>
                    </div>
                </div>
                <div className='flex-row space-between'>
                    <p className='reg-14'>Copyright 2024 Galactux | Design By Galactux</p>
                    <p className='reg-14'>Our Business <span style={{textDecoration: "underline"}}>Policy, Terms & Condition</span></p>
                </div>
            </footer>
        </section>
    );

}

export default Footer;