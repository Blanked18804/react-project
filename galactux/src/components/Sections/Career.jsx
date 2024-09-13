import Button from '../Reuse/Button'
import  career from '../../assets/career.png'

function Career(){

    return(
        <section id="career" className="side-padding-72 flex-column gap-80">
            <div className="flex-row gap-64 align-center">
                <div className="width-50 move-out-left">
                    <h2 className="bold-60">Great design to make a lasting impact</h2>
                </div>
                <div className="flex-column gap-16 width-50 move-out-right">
                    <p className="reg-14">Our mission is to deliver innovative, high-quality design solutions that empower businesses to achieve their full potential. We believe in the power of great design to make a lasting impact and are dedicated to providing exceptional service to our clients.</p>
                    <Button label="Shedule a  Call" />
                </div>
            </div>
            <img className="img-fit rounded-corner-20 scale-out" src={career} alt="" />
            <div className="circle-career"></div>
            <div className='bg-filler'></div>
        </section>
    );
    
}

export default Career;