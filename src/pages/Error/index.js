import './error.css'
import { Link } from 'react-router-dom'

export default function Error(){
  return(
  <div className='container-error'>
    <img src='notfound.png' alt="Not found page"/>
    <h1>Page not exist!</h1>
    <Link to="/">
      Go back to home
    </Link>
  </div>
)
}