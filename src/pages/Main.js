import React from "react";

import {MainSection} from "../components/MainSection"
import {MainCreateSection} from "../components/MainCreateSection";
import {MainResponces} from "../components/MainResponces";
import {ClientLogo} from "../components/MainClientLogo";
import {MainProjects} from "../components/MainProjects";
import {MainCounter} from "../components/MainCounter";
import{MainNews} from "../components/MainNews";
import {MainJoin} from "../components/MainJoin";
import { Link } from "react-router-dom";
import { ScrollButton } from "../components/ScrollButton";

function Main() {

    return(
        <main className="main">
            <section className="main__block">
                <div className="container block">
                    <div className="main__info">
                        <h1 className="main__title">
                        Let Your Home Be Unique
                        </h1>
                        <p className="description">
                        There are many variations of the passages of lorem Ipsum fromavailable,variations of the passages.
                        </p>
                        <Link to='/about'>
                        <button className="main__btn">Get Started</button>
                        </Link>
                    </div>
                </div>
            </section>
            <MainSection/>
            <MainCreateSection/>
            <MainResponces/>
            <ClientLogo/>
            <MainProjects/>
            <MainCounter/>
            <MainNews/>
            <MainJoin/>
            <ScrollButton/>
        </main>
    )
}
export{Main};