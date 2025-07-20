import React from 'react';
function Cards() {
  return (
    <div className='container' style={{marginTop : "30px"}}>
        
   <div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col">
    <div className="card">
      <img src="https://tusslehub.com/cdn/shop/products/image_12dc6bbe-4be8-4fc4-b189-234af98735ea.heic?v=1675592565&width=250" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Watch</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button>Submit</button>        
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://krosskulture.com/cdn/shop/files/06_af5aa285-b886-4cf5-96d1-b2bbbeee5cfc.jpg?v=1751356223&width=500" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Women clothes</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button>Submit</button>      
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://www.gulahmedshop.com/media/catalog/product/n/a/nawab_latha_unstitched_fabric_cotton-bracken_3_.jpg?optimize=low&fit=bounds&height=900&width=600" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Mens clothes</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
  <button>Submit</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://www.gulahmedshop.com/media/catalog/product/4/3/434796-light-brown-peshawari-topview-ideas.jpg?optimize=low&fit=bounds&height=900&width=600" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Shoes</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
         <button>Submit</button>
      </div>
    </div>
  </div>
</div>
</div>
  );
}

export default Cards;
