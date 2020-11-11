import Logo from '../../assets/logo.png';
import LogoWhite from '../../assets/logo-white.png';
import './styles.css';
const Header = (
  {
    whiteVersion
  }
) =>{
  return (
    <div className="coluna">
   <header >

   <img src={ whiteVersion ? LogoWhite : Logo} alt="logo"  className="img-fluid"/>
   </header>
   
    
    </div>
  );
}

export default Header;