import { createApi } from "unsplash-js";
import {ProjectApi} from "../components/ProjectList";
import { render } from "@testing-library/react";
import { ScrollButton } from "../components/ScrollButton";


function Project() {   

    return(
        <main className="main">
            <section className="project">
                <div className="projects">
                    <div className="projects__info">
                        <div className="page__nav">
                            <h2>Our Project</h2>
                            <p className="description">Home / Project</p>
                        </div>
                    </div>     
                </div>
            </section>
            <ProjectApi/>
            <ScrollButton/>
        </main>
        
    )
}
export {Project};