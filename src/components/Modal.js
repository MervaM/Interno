import React from "react";
import  Modal  from "react-overlays/Modal";
import img from "../assets/mod_back1.png";
import {ClientLogo} from "../components/MainClientLogo";


const ShowModal = ({open, onCLose}) => {
    if(!open) return null
    return(
        <section className="overlay">
            <div className="container modal__section">
                <img className="modal__img" src={img}/>
                <button className="modal__btn" onClick={onCLose}>close</button>
                <div className="modal__sec">
                    <div className="modal__sec-block">
                        <h3 className="title">Use of Interior</h3>
                        <ul className="modal__list">
                            <li><span className="mod__list-numb">1</span> We provide high quality design services.</li>
                            <li><span className="mod__list-numb">2</span> Project on time and Latest Design.</li>
                            <li><span className="mod__list-numb">3</span> Scientific Skills For getting a better result.</li>
                            <li><span className="mod__list-numb">4</span> Renovations Benefit of Service.</li>
                            <li><span className="mod__list-numb">5</span> We are confident about our projects.</li>
                        </ul>
                    </div>
                    <div className="modal__sec-block">
                        <h3 className="title">Make An Art</h3>
                        <ul className="modal__list">
                            <li><span className="mod__list-numb">1</span> We provide high quality design services.</li>
                            <li><span className="mod__list-numb">2</span> Project on time and Latest Design.</li>
                            <li><span className="mod__list-numb">3</span> Scientific Skills For getting a better result.</li>
                            <li><span className="mod__list-numb">4</span> Renovations Benefit of Service.</li>
                            <li><span className="mod__list-numb">5</span> We are confident about our projects.</li>
                        </ul>
                    </div>
                </div>
                <ClientLogo/>            
            </div> 
        </section>
    )
}

    
export {ShowModal};