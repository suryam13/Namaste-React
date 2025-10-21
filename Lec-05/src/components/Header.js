import {LOGO_LINK} from '../utils/constants'
// named import

const Header = () => {

    return(

        <div className="header"> 

            <div className="logo-container">
                <img src= {LOGO_LINK} className='logo'/>
            </div>

            <div className="navItems">
                <ul>
                    <li> <a href='https://www.google.com' target='blank' > Home </a> </li>
                    <li><a href='.'> About US </a></li>
                    <li><a href='.'> Contact US </a></li>
                    <li><a href='.'>  CART </a></li>
                </ul>
            </div>

        </div>

    );
}


export default Header;