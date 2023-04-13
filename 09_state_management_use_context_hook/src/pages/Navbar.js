import { Link } from 'react-router-dom';

export const Navbar = ()=>{
    return (
      <div>
        <Link to="/"> HOME </Link>
        <Link to="/contact"> CONTACT </Link>
        <Link to="/profile"> PROFILE </Link>
      </div>
    )
}