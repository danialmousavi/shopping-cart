import {NavLink } from "react-router-dom"
const Header=()=>{
return(
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink className="navbar-brand" href="#">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className={(navdata)=>navdata.isActive?'nav-link active':'nav-link'} aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={(navdata)=>navdata.isActive?'nav-link active':'nav-link'} to="/products">products</NavLink>
        </li>
      </ul>
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
            <NavLink className="nav-link p-1 me-3" >
                <span className="badge rounded-pill bg-primary me-1">0</span>
                <i className="bi bi-basket-fill fs-4"></i>
            </NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    
    </>
)
}
export default Header