import React from "react";
import { Link } from "react-router-dom";

function MainJoin() {
    return (
        <section className="container main__join">
            <h2 className="section__title main__join-title">Wanna join the interno?</h2>
            <p className="section__descr">It is a long established fact will be distracted.</p>
            <Link to='/contact'><button className="main__btn main__btn_join">Contact With Us</button></Link>

        </section>
    )

}
export {MainJoin};