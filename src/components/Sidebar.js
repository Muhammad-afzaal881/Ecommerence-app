import React from 'react';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <>
<div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabIndex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="staticBackdropLabel">Menubar</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
           <Link className="nav-link active" to="/Home">Home</Link> 
        </li>
         <li className="nav-item">
          <Link  className="nav-link active"to="/about">About us</Link>
        </li>
         <li className="nav-item">
           <Link  className="nav-link active"to="/Contact">Contact us</Link>
        </li>
         <li className="nav-item">
           <Link  className="nav-link active"to="/service">Services</Link>
        </li>
        <Link type="button" to="/Profile" className="btn btn-dark position-relative"> 
  Profile
  <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
    <span className="visually-hidden">New alerts</span>
  </span>
</Link>
      </ul>
  </div>
</div>
    </>
  );
};

export default Sidebar;
