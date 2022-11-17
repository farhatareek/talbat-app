import React from 'react'
import'./carosol.css'
import MainHome from './MainHome';

 function Carosol() {
  return (
    <>
    
    <div id="carouselExampleIndicators" className="carousel mt-5  container-fulid slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={require('../assets/landing-bg-dishes-min.jpg')} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={require('../assets/top-view-circular-food-frame.jpg')} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={require('../assets/delicious-marble-halva-with-sunflower-seeds-cocoa-powder-honey-top-view.jpg')} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </>
  )
 
}

<MainHome/>
export default Carosol;
