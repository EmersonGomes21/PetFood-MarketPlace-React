import  {useMemo} from 'react';
import './styles.css'
import Header from '../../components/Header';
import PetShop from '../../components/PetShop';
import Map from '../../components/Map';
// import { Container } from './styles';

function Home({ quant }) {



  useMemo(() => {
    document.querySelector("#petshops")

    window.addEventListener('wheel', (event)=>{
     
      if (event.deltaY > 0) {
          const sizeScroolX = 300;
          const sizeScroolY = 0;
          event.target.scrollBy(sizeScroolX, sizeScroolY)

      }
      else {
         const sizeScroolY = 0;
         const sizeScroolX = - 300;
        event.target.scrollBy(sizeScroolX, sizeScroolY)
       
      }
      
    })

  
  }, [])
  return (
    <>
      <div className="h-100">
        <Header />

        <div className="container-fluid petshop-list-container">

          <div className="col-12 px-4 text-center">
            <h5>Mais próximos de você (5)</h5>
          </div>

          <ul id="petshops"className="col-12 petshop-list">
            {[1, 2,3,4,5,6,7,8,9,10].map(() => <PetShop />)
            
            }
          </ul>

        </div>

        <Map/>

      </div>

    </>
  );
}

export default Home;