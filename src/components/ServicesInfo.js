import React from "react"
import  Modal  from "react-overlays/Modal";
import { useState } from "react";
import { Link } from "react-router-dom"
import { ModalService } from "./ModalServices";

function ServicesInfo() {
    const [openModal, setOpenModal] = useState(false);

    return(
        <section className="container services__cards">
            <div onClick={() => setOpenModal(true)}  className="service__card">
                <h5 className="title">Project Plan</h5>
                <p className="description">There are many variations of the passages of lorem Ipsum from available, majority.</p>
                <Link className="services__link">Read More</Link>
            </div>
            <div onClick={() => setOpenModal(true)} className="service__card">
                <h5 className="title">Interior Work</h5>
                <p className="description">There are many variations of the passages of lorem Ipsum from available, majority.</p>
                <Link className="services__link">Read More</Link>
            </div>
            <div onClick={() => setOpenModal(true)}  className="service__card">
                <h5 className="title">Retail Design</h5>
                <p className="description">There are many variations of the passages of lorem Ipsum from available, majority.</p>
                <Link className="services__link">Read More</Link>
            </div>
            <div onClick={() => setOpenModal(true)}  className="service__card">
                <h5 className="title">2d/3d Art Work</h5>
                <p className="description">There are many variations of the passages of lorem Ipsum from available, majority.</p>
                <Link className="services__link">Read More</Link>
            </div>
            <div onClick={() => setOpenModal(true)}  className="service__card">
                <h5 className="title">Interior Work</h5>
                <p className="description">There are many variations of the passages of lorem Ipsum from available, majority.</p>
                <Link className="services__link">Read More</Link>
            </div>
            <div onClick={() => setOpenModal(true)}  className="service__card">
                <h5 className="title">Decoration Work</h5>
                <p className="description">There are many variations of the passages of lorem Ipsum from available, majority.</p>
                <Link className="services__link">Read More</Link>
            </div>
            <ModalService open={openModal} onCLose={() => setOpenModal(false)}/>
        </section>
    )

}
export {ServicesInfo}