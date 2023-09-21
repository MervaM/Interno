import { Link } from 'react-router-dom';
import img from '../assets/welovedes.png';

function WeLoveDesign(){
    return(
        <section className="container we__love-des">
            <img src={img}/>
            <div className='we__love-descr'>
                <h3 className='title'>We love design.That's how we got here.</h3>
                <p className='description'>It is a long established fact that a reader will be distracted by the of readable content .</p>
                <Link to='/project'><button className='main__btn'>Our Portfolio</button></Link>
            </div>
        </section>
    )

}
export {WeLoveDesign};