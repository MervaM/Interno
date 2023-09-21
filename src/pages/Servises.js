import React from "react";
import {ServicesInfo} from '../components/ServicesInfo';
import {HowWeWork} from '../components/HowWeWork';
import {ClientLogo} from "../components/MainClientLogo";
import {WeLoveDesign} from "../components/WeLoveDesign";
import {MainCounter} from "../components/MainCounter";
import { ScrollButton } from "../components/ScrollButton";


function Services() {
    return(
        <main className="main">
            <section className="services">
                <div className="page__nav">
                    <h2>Services</h2>
                    <p className="description">Home / Services</p>
                </div>
            </section>
            <ServicesInfo/>
            <HowWeWork/>
            <ClientLogo/>
            <WeLoveDesign/>
            <MainCounter/>
            <ScrollButton/>
        </main>
    )
}
export {Services};