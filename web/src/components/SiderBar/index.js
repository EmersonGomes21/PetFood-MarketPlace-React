
import { useState, useEffect } from 'react';
import './styles.css';
import Dock from 'react-dock';
import Product from '../Product/List'
const SideBar = ({quant}) => {

  const [opened, setopened] = useState(false);
  const [quantItens, setQuantItens] = useState(quant);
 
  useEffect(() =>{

  window.addEventListener('openCart', ()=>{
    setopened(true);
    
  });
  setQuantItens(quant);

 

  }, [quantItens, quant])

  return (
    <Dock
      position="right"
      isVisible={opened}
      onVisibleChange={
        (visible) => {
          setopened(visible)

        }
      }
    >

      <div className="container-fluid h-100 pt-4 sidebar">
        <h5>Minha Sacola ({quantItens.length}) </h5>

        <div className="row h-100 products">

          {quantItens.map(p => <Product  />)}

        </div>

        <div className="row align-items-end footer">

          <div className="col-12 d-flex justify-content-between align-items-center">
            <b>Total</b>
            <h3>R$ {quantItens.length * 30},00</h3>
          </div>
          <button className="btn btn-block btn-lg btn-primary rounded-0 h-50 align-items-center">
              Finalizar Compra
            </button>

        </div>

      </div>

    </Dock>
  )

}
export default SideBar;