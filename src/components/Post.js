import React from "react";
import { useState } from "react";
import  Modal  from "react-overlays/Modal";

import img from "../assets/firstimg.png";
import arrow from "../assets/arrow.png";

const ModalPosts = ({open, onClose}) => {
    const [date, setDate] = useState(new Date());
    if(!open) return null

    
    return(
        <section className="overlay">
            <div className="container modal__section modal__servise-block">
            <h3 className="main__title">Latest Post</h3>
            <button className="modal__btn" onClick={onClose}>close</button>
            <div className="posts__info modal__secrv-block">
                <img src={img}/>
                <div className="posts__info_descr">
                    <h5 className="posts__info_descr-title">Low Cost Latest Invented Interior Designing Ideas</h5>
                    <p className="posts__info_description">
                    Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.
                    Lorem Ipsum is not simply random text. It has roots in a piece of classica.
                    </p>
                    <div className="blog__date">
                        <span>{date.toDateString()}</span>
                        {/* <img src={arrow}/> */}
                    </div>
                </div>
            </div>
            </div>
        </section>
    )

}
export {ModalPosts };