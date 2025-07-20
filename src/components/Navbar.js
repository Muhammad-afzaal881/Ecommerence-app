import { Link } from 'react-router-dom';

function App() {
  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button type="button" className="btn btn-light" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
 menu
</button>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
           <Link  className="nav-link active"to="/Service
           ">Services</Link>
        </li>
       <Link type="button" to="/Profile" className="btn btn-dark position-relative"> 
  Profile
  <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
    <span className="visually-hidden">New alerts</span>
  </span>
</Link>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  );
}

export default App;
