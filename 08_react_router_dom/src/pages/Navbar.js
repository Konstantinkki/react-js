import { Link } from 'react-router-dom';

export const Navbar = ()=>{
    return (
      <div>
        <Link to="/"> HOME </Link>
        <Link to="/menu"> MENU </Link>
        <Link to="/contact"> CONTACT </Link>
      </div>
    )
}