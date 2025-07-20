import React from 'react';

function Banner() {
  return (
  <div id="carouselExampleRide" className="carousel slide" >
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://img.freepik.com/free-psd/digital-marketing-agency-corporate-facebook-cover-template_106176-2258.jpg?semt=ais_hybrid&w=740" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://img.freepik.com/free-vector/abstract-business-youtube-thumbnail_23-2148921124.jpg?t=st=1752233055~exp=1752236655~hmac=182210a191d8f03c8bc4355a08975432b5f20f8803f737f1a1d441d042113616&w=826" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://img.freepik.com/free-psd/digital-marketing-agency-corporate-facebook-cover-template_106176-2258.jpg?semt=ais_hybrid&w=740" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  );
}

export default Banner;
