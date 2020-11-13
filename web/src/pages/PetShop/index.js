import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import SiderBar from '../../components/SiderBar';
import Product from '../../components/Product/Card';
import './styles.css';

const PetShop = ({ quant }) => {
  const [quantItens, setQuantItens] = useState(quant);

  const openDrawer = () => {
    const event = new CustomEvent('openCart');
    window.dispatchEvent(event);
  };

  useEffect(() =>{

    setQuantItens(quant);
  
  
    }, [quant]);
  

  
  return (
  
    <div className="h-100">
      <Header showCart />

      <button className="btn btn-secondary cart-button"
        onClick={() => openDrawer()}
      >
        <span className="mdi mdi-cart" />
        {quantItens.length}
   </button>

      <div className="container">

        <div className="row">

          <div className="col-2">
            <img src={'https://www.petlove.com.br/static/uploads/banner_image/image/4304/logo-petlove-push.png'}
              alt="pet love logo"
              className="img-fluid petshop-image"
            />
            <b>Petlove</b>
            <div className="petshop-infos">
              <span className="mdi mdi-star" />
              <text className="mr-1">
                <b>2,8</b>
              </text>

              <span className="mdi mdi-cash-usd-outline mr-1" />
              <text className="mr-1">$$$</text>

              <span className="mdi mdi-crosshairs-gps mr-0" />
              <text className="ml-1">2,9km</text>
            </div>
            <label className="badge badge-primary">Frete Grátis</label>
          </div>

          <div className="col-10 ">
            <h5>Produtos</h5>

            <div className="row mt-4">
              {quantItens.map(p => <Product />)}

            </div>
          </div>


        </div>
      </div>
      <SiderBar quant={quantItens}/>
    </div>
  );
}

export default PetShop;