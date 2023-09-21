import {BlogForm} from "../components/BlogForm";

function Contact() {
    return(
        <main>
            <section className="contact">
                <div className="container">
                    <div className="page__nav">
                        <h2>Contact Us</h2>
                        <p className="description">Home / Contact</p>
                    </div>
                </div>
            </section>
            <BlogForm/>
        </main>
    )

}
export {Contact};