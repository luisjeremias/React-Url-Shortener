import './menu.css'
import {BsInstagram,BsGithub} from 'react-icons/bs'
import { Link } from 'react-router-dom';
export default function Menu (){
  return (
    <div className="menu">
      <a className="social" href="https://www.instagram.com/luis_geremias">
        <BsInstagram size={24} color="#FFF" />
      </a>
      <a className="social" href="https://github.com/luisjeremias">
        <BsGithub size={24} color="#FFF" />
      </a>
      <Link className="menu-item" to='/links'>My Links</Link>
    </div>
  );
}