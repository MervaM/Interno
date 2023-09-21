import React from "react";
import { Link } from "react-router-dom";

import priject1 from "../assets/project1.png";
import priject2 from "../assets/project2.png";
import priject3 from "../assets/project3.png";
import priject4 from "../assets/project4.png";
import arrow from "../assets/arrow.png";


function MainProjects() {
    return(
        <section className="container main__projects">
            <h1 className="project__title section__title">Follow Our Projects</h1>
            <p className="section__descr project__descr">
               It is a long established fact that a reader will be distracted by the of    readable content of page  lookings at its    layouts  points.
            </p>
            <div className="projects__cards row">
                <div className="project__card col l6">
                    <img src={priject1} className="project__img1"/>
                    <div className="project__card-info">
                        <div className="project__card-descr">
                            <h5 className='title'>Modern Kitchan</h5>
                            <p className='description' >Decor / Artchitecture</p>
                        </div>
                        <Link to='project'><img src={arrow}/></Link>
                    </div>
                </div>
                <div className="project__card col l6">
                    <img src={priject2} className="project__img2"/>
                    <div className="project__card-info">
                        <div className="project__card-descr">
                            <h5 className='title'>Modern Kitchan</h5>
                            <p className='description'>Decor / Artchitecture</p>
                        </div>
                        <Link to='project'><img src={arrow}/></Link>
                    </div>
                </div>
                <div className="project__card col l6">
                    <img src={priject3} className="project__img3"/>
                    <div className="project__card-info">
                        <div className="project__card-descr">
                            <h5 className='title'>Modern Kitchan</h5>
                            <p className='description'>Decor / Artchitecture</p>
                        </div>
                        <Link to='project'><img src={arrow}/></Link>
                    </div>
                </div>
                <div className="project__card col l6">
                    <img src={priject4} className="project__img4"/>
                    <div className="project__card-info">
                        <div className="project__card-descr">
                            <h5 className='title'>Modern Kitchan</h5>
                            <p className='description' >Decor / Artchitecture</p>
                        </div>
                        <Link to='project'><img src={arrow}/></Link>
                    </div>
                </div>
                

            </div>


        </section>

    )

}
export {MainProjects};