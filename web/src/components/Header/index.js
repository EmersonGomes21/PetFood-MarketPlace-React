import {Link} from 'react-router-dom';
import Logo from '../../assets/logo.png';
import LogoWhite from '../../assets/logo-white.png';
import './styles.css';
const Header = (
  {
    whiteVersion
  }
) =>{


  const openDrawer = ()=>{
   const event = new CustomEvent('openCart');
   window.dispatchEvent(event);
  }

  return (
    <div className="coluna">
   <header >

   <Link to="/"><img src={ whiteVersion ? LogoWhite : Logo} alt="logo"  className="img-fluid"/></Link>
   </header>
   
    </div>
  );
}

export default Header;