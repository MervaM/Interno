import logo from "../assets/logo.png"
import gitIcon from '../assets/github_icon.png'
import { Link } from "react-router-dom";

function Footer() {
  return(
    <div className="container footer">
      <div className="footer__info">
        <img src={logo}/>
      </div>
      <div>
        <Link to='https://github.com/MervaM/Interno' target="_blank"><img src={gitIcon}/></Link>
      </div>
    </div>
  )
}

export { Footer };