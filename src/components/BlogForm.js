function BlogForm() {
    return(
        <section className="container contact__form">
            <h2 className="section__title">We love meeting new people and helping them.</h2>
            <div className="contact__form-content">
                <div className="contact__form-contacts">
                    <p>info@yourdomain.com</p>
                    <p>+1 (378) 400-1234</p>
                    <p>www.yourdomain.com</p>
                </div>
                <form className='contacts__form'>
                    <div className="form__info">
                        <label className="form__label">
                            <input className="form__input" placeholder="Name"></input>
                        </label>
                        <label className="form__label">
                            <input className="gorm__input" placeholder="Email"></input>
                        </label>
                    </div>
                    <div className="form__info">
                        <label className="form__label">
                            <input className="form__input" placeholder="Subject"></input>
                        </label>
                        <label className="form__label">
                            <input className="gorm__input" placeholder="Phone"></input>
                        </label>
                    </div>
                    <textarea className="text__area validate" rows='4' placeholder="Hello Iam Intrested in.."></textarea>
                    <button className="main__btn">Send Now</button>
                </form>
            </div>
        </section>
    )

}
export {BlogForm}