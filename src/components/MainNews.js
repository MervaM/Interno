import React from "react";
import { useState } from "react"; 

import firstImg from "../assets/firstimg.png";
import secondImg from "../assets/secondimg.png";
import thirsImg from "../assets/thirdimg.png";
import arrow from "../assets/arrow.png";


function MainNews() {
    const [date, setDate] = useState(new Date());

    return(
        <section className="container main__news main__projects">
            <h2 className="project__title section__title"> Articles & News </h2>
            <p className="project__descr section__descr">
                It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.
            </p>
            <div className="news__cards">
                <div className="news__card">
                    <img src={firstImg}/>
                    <h5 className="title">
                    Let’s Get Solution For Building Construction Work
                    </h5>
                    <div className="news__card-sup">
                        <p className="description">{date.toDateString()}</p>
                        <img src={arrow}/>
                    </div>
                </div>
                <div className="news__card">
                    <img src={secondImg}/>
                    <h5 className="title">
                    Low Cost Latest Invented Interior Designing Ideas.
                    </h5>
                    <div className="news__card-sup">
                        <p className="description">{date.toDateString()}</p>
                        <img src={arrow}/>
                    </div>
                </div>
                <div className="news__card">
                    <img src={thirsImg}/>
                    <h5 className="title">
                    Best For Any Office & Business Interior Solution
                    </h5>
                    <div className="news__card-sup">
                        <p className="description">{date.toDateString()}</p>
                        <img src={arrow}/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export {MainNews};