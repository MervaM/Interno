import React from "react";
import  Modal  from "react-overlays/Modal";
import img from "../assets/mod_bact2.png";
import {ClientLogo} from "../components/MainClientLogo";
import img2 from "../assets/mod_2img2.png";

const ModalService = ({open, onCLose}) => {
    if(!open) return null
    return(
        <section className="overlay">
            <div className="container modal__section">
                <img className="modal__img" src={img}/>
                <button className="modal__btn" onClick={onCLose}>close</button>
                <div className="modal__servise-block">
                    <div className="modal__secrv-block">
                        <div className="mod__serv-list">
                            <div className="mod__serv-item">
                                <p className="description"><b>Client </b></p>
                                <p className="description">Your client name</p>
                            </div>
                            <div className="mod__serv-item" >
                                <p className="description"><b>Category</b></p>
                                <p className="description">Interiors</p>
                            </div>
                            <div className="mod__serv-item">
                                <p className="description"><b>Tags</b></p>
                                <p className="description">interior, Home</p>
                            </div>
                            <div className="mod__serv-item">
                                <p className="description"><b>Date</b></p>
                                <p className="description">Date 23,02, 2022</p>
                            </div>
                            <div className="mod__serv-item">
                                <p className="description"><b>Link</b></p>
                                <p className="description"> Link example.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="modal__serv-text">
                        <h3 className="title">Minimal Look</h3>
                        <p className="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.
                        </p>
                        <p className="description">
                            In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.
                        </p>
                    </div>
                </div>
                <img className="sec__img" src={img2}/>      
                <ClientLogo/>   
            </div> 
        </section>
    )
}

    
export {ModalService};