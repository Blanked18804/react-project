import spark from '../../assets/spark.svg'
import chat from '../../assets/chat.svg'
import galactuxG from '../../assets/galactux-g.svg'
import hat from '../../assets/hat.svg'
import chat2 from '../../assets/chat-2.svg'

function NoFuncBtn({icon, label}){

    const imageSrc = {
        spark: spark,
        chat: chat,
        galactuxG: galactuxG,
        hat: hat,
        chat2: chat2,
    }[icon];

    return(
        <div className="no-func-btn">
            <img src={imageSrc} alt="spark"/>
            <p className="reg-14">{label}</p>
        </div>
    );

}

export default NoFuncBtn