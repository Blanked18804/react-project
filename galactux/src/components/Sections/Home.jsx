import Header from "./Header";
import NoFuncBtn from '../Reuse/NoFuncBtn';
import Button from '../Reuse/Button'

function Home(){

    return (
        <section id="home">
            <Header />
            <div className='circle'>
                <div className="inner-circle-1">
                    <div className="inner-circle-2"></div>
                    <div className="inner-circle-3"></div>
                </div>
            </div>
            <div className="hero flex-column gap-32 justify-center text-align scale-out">
                <div className="flex-column gap-8 align-center text-align">
                    <div className="flex-column gap-16 align-center">
                        <NoFuncBtn icon="spark" label="Revolutionize Your Brand!" />
                        <h1 className="bold-60">Unlimited design requests.<br /> Unlimited revisions.</h1>
                    </div >
                    <p className="reg-14 width-70">We've made it simple and believable: No contracts, no hidden fees. Experience frictionless design with our user-friendly process.</p>
                </div>
                <div className="flex-column gap-16 align-center">
                    <Button label="Get Started" />
                    <p className="reg-14">Cancel anytime with our 100% satisfaction guarantee.</p>
                </div>
            </div>
        </section>
    );

}

export default Home;