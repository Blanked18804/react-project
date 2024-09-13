import negotiatus from '../../assets/Negotiatus.png'
import sibuDigital from '../../assets/Sibu-Digital.png'
import insightsoftware from '../../assets/Insightsoftware.png'
import catalyzeai from '../../assets/Catalyzeai.png'
import imgur from '../../assets/Imgur-new.png'
import kinemaster from '../../assets/Kinemaster.png'
import leedsUnited from '../../assets/Leeds-United.png'
import creativeMarket from '../../assets/Creative-market.png'

function Clients(){
    
    return(
        <section id="clients" className="side-padding-72">
            <div className="flex-column gap-32 align-center">
                <h2 className="bold-30 scale-out">Old clients, new friends.</h2>
                <div className="clients-name flex-row gap-64">
                    <img className='scale-out' src={negotiatus} alt="" />
                    <img className='scale-out' src={sibuDigital} alt="" />
                    <img className='scale-out' src={insightsoftware} alt="" />
                    <img className='scale-out' src={catalyzeai} alt="" />
                    <img className='scale-out' src={imgur} alt="" />
                    <img className='scale-out' src={kinemaster} alt="" />
                    <img className='scale-out' src={leedsUnited} alt="" />
                    <img className='scale-out' src={creativeMarket} alt="" />
                </div>
            </div>
        </section>
    );

}

export default Clients