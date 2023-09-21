import avatar1 from "../assets/girl1.png";
import avatar2 from "../assets/girl2.png";
import avatar3 from "../assets/man1.png";

function MainResponces() {
    return(
        <section className="container main__responces">
            <h2 className="responce__title section__title">What the People Thinks About Us</h2>
            <div className="responce__cards row">
                <div className="responce__card col l4" style={{padding: '30px'}}>
                    <div className="card__info">
                        <div className="card__avtor">
                            <img src={avatar1} className="card__img"/>
                            <div className="card__avtor-descr">
                               <p className="card__avtor-name title">Nattasha Mith</p>
                               <p className="card__avtor-city">Sydney, USA</p>
                            </div>
                        </div>
                        <p className="description">
                        Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.
                        </p>
                    </div>
                </div>
                <div className="responce__card col l4" style={{padding: '30px'}}>
                    <div className="card__info">
                        <div className="card__avtor">
                            <img src={avatar2} className="card__img"/>
                            <div className="card__avtor-descr">
                               <p className="card__avtor-name title">Raymond Galario</p>
                               <p className="card__avtor-city">Sydney, Australia</p>
                            </div>
                        </div>
                        <p className="description">
                        Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled it to make a type book.
                        </p>
                    </div>
                </div>
                <div className="responce__card col l4" style={{padding: '30px'}}>
                    <div className="card__info">
                        <div className="card__avtor">
                            <img src={avatar3} className="card__img"/>
                            <div className="card__avtor-descr">
                               <p className="card__avtor-name title">Benny Roll</p>
                               <p className="card__avtor-city">Sydney, New York</p>
                            </div>
                        </div>
                        <p className="description">
                        Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled.
                        </p>
                    </div>
                </div>
            </div>


        </section>
    )
}
export {MainResponces};