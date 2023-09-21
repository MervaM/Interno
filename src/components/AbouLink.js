import img1 from "../assets/p1.png";

function AboutLink() {
    return(
        <section className="about__l">
            <div className="container about__link">
                <h2 className="section__title">Creative project? Let's have a productive talk.</h2>
                <form className="about__form">
                    <div className="form__info">
                        <label className="form__label">
                            <input className="form__input" placeholder="Name"></input>
                        </label>
                        <label className="form__label">
                            <input className="gorm__input" placeholder="Email"></input>
                        </label>
                    </div>
                    <textarea className="text__area validate" rows='4' placeholder="Hello Iam Intrested in.."></textarea>
                    <button className="main__btn">Send Now</button>
                </form>
            </div>


            


        </section>
    )

}
export {AboutLink};