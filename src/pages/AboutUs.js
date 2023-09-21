import React from "react";
import {AboutBaner} from "../components/AbouBaner";
import {AboutWhatWeDo} from "../components/AbouWhatWeDo";
import {AboutLink} from "../components/AbouLink";
import { ScrollButton } from "../components/ScrollButton";

function AboutUs() {
    return(
        <main className="main">
            <section className="about__us">
                <div className="container page__nav">
                    <h2>About Us</h2>
                    <p className="description">Home / About Us</p>
                </div>
            </section>
            <AboutBaner/>
            <AboutWhatWeDo/>
            <AboutLink/>
            <ScrollButton/>
        </main>
    )

}
export {AboutUs};