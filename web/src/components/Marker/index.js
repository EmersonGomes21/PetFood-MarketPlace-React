import MarkerIcon from '../../assets/marker.png';

import MarkerIconSelected from '../../assets/marker-selected.png';

import  './styles.css';

function Marker() {
  return(
    <div>
      <img className="img-marker" src={MarkerIconSelected} alt="marker icon"/>

      <img src={'https://www.petlove.com.br/static/uploads/banner_image/image/4304/logo-petlove-push.png'}
              alt="pet love logo"
              className="img-marker2"
            />
    </div>
  );
}

export default Marker; 