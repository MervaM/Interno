import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";
import client5 from "../assets/client5.png";

function ClientLogo() {
    return(
        <section className="container client__section">
            <img src={client1}/>
            <img src={client2}/>
            <img src={client3}/>
            <img src={client4}/>
            <img src={client5}/>
        </section>
    )
}
export {ClientLogo};