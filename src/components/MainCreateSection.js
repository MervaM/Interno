import { Link } from "react-router-dom";
import phoneIcon from "../assets/call_Icon.png" 
import interier from "../assets/interier.png";
import { Contact } from "../pages/Contacts";

function MainCreateSection() {
    return(
        <section className="container create__section row">
            <div className="create__s-descr col m6">
                <h2 className="create__s-title">
                We Create The Art Of Stylish Living Stylishly
                </h2>
                <p className="description">
                It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal.
                </p>
                <div className="create__s-infoblock">
                    <img src={phoneIcon} />
                    <div className="sreate__s-info">
                        <p className="sreate__s-phone">012345678</p>
                        <p className="sreate__s-call description">Call Us Anytime</p>
                    </div>
                </div>
                <Link to='contact'>
                    <button className="main__btn">Get Free Estimate</button>
                </Link>
                
            </div>
            <div className="create__s-pic col m6" style={{width: '100%'}}>
               <img src={interier} className="create__s-img"/>
            </div>
           

        </section>
    )
}
export {MainCreateSection};