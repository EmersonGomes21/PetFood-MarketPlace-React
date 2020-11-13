
import './styles.css';

function PetShop({

}) {
  return (
    <li className="petshop d-inline-block" >

      <div className="d-inline-block">

        <img src={'https://www.petlove.com.br/static/uploads/banner_image/image/4304/logo-petlove-push.png'}
          alt="pet love logo"
          className="img-fluid"
        />

      </div>

      <div className="d-inline-block pl-3 align-bottom">

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


    </li>
  );
}

export default PetShop;