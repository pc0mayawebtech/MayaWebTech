import './Header.css';
import logo from '../../assets/Images/mayaweblogo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header className='NavBar'>
                <div className="container">
                    <nav className='NavItems'>
                        <label className='logo'>
                            <img src={logo} alt="logo" />
                        </label>
                        <ul className='NavMenu'>
                            <li><Link to="/" className='NavMenuList'>Home</Link></li>
                            <li><Link to="service" className='NavMenuList'>Services</Link></li>
                            <li><Link to="about" className='NavMenuList'>About</Link></li>
                            <li><Link to="work" className='NavMenuList'>Work</Link></li>
                            <li><Link to="contact" className='NavMenuList'>Contact</Link></li>
                            <li><Link to="tel:+918373976489" className='NavMenuLists'>
                                <span className='ReachUs'>Talk To Us</span></Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;