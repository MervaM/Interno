import React, { useState } from "react";
// import { useState } from "react";
import  Modal  from "react-overlays/Modal";

import img1 from "../assets/wedo1.png";
import img2 from "../assets/wedo2.png";
import {ShowModal} from "../components/Modal";
import { Link } from "react-router-dom";


function AboutWhatWeDo() {
    const [openModal, setOpenModal] = useState(false);

    return(
        <section className="container what__do">
            <div className="do__section">
                <div className="do__s-info">
                    <h3 className="title">What We Do</h3>
                    <p className="description">
                    It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal.
                    </p>
                    <button className="main__btn" onClick={() => setOpenModal(true)}>Our Concept</button>
                    <ShowModal open={openModal} onCLose={() => setOpenModal(false)}/>
                </div>
                <div className="do__s-img">
                    <img src={img1}/>
                </div>
            </div>
            <div className="do__section do__section-rev">
                <div className="do__s-info do__s-inforev">
                    <h3 className="title">The End Result</h3>
                    <p className="description">
                    It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal.
                    </p>
                    <Link to ='/project'><button className="main__btn">Our Portfolio</button></Link>
                </div>
                <div className="do__s-img">
                    <img src={img2}/>
                </div>
            </div>
        </section>
    )

}
export {AboutWhatWeDo};