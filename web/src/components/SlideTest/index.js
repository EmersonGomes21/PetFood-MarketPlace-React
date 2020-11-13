
import React, {useMemo } from 'react';

import './styles.css';

function SlideTest() {
  useMemo(() => {
    document.querySelector("#items")

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

    <div id="body">
      <div id="items-wrapper">
        <div id="items">
          <div class="item"><img src="https://unsplash.it/1600/400?image=950" /></div>
          <div class="item"><img src="https://unsplash.it/1600/400?image=930" /></div>
          <div class="item"><img src="https://unsplash.it/1600/400?image=990" /></div>
          <div class="item"><img src="https://unsplash.it/1600/400?image=980" /></div>
          <div class="item"><img src="https://unsplash.it/1600/400?image=970" /></div>
          <div class="item"><img src="https://unsplash.it/1600/400?image=976" /></div>
          <div class="item"><img src="https://unsplash.it/1600/400?image=993" /></div>
          <div class="item"><img src="https://unsplash.it/1600/400?image=969" /></div>
        </div>
      </div>


    </div>
  );
}

export default SlideTest;