import React from 'react';

const navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg  fixed-top">
        <div className="container-fluid">
          <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand fs-4 cl-white" href="#">logo de la pagina</a>

          {/* Sidebar */}
        <div  className ="sidebar offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            {/* Sidebar Header */}
            <div className="offcanvas-header text-white border-botton ">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Venta De Pantallas</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
             {/* Sidebar Body */}
           <div className="offcanvas-body d-flex flex-column p-4 p-lg-0">
              
                <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                <form className="d-flex mx-2" role="search">
                  <input className="form-control me-2" type="search" placeholder="Buscar Producto" aria-label="Search"/>
                  <button className="btn btn-outline-success" type="submit"><i className='fa-solid fa-magnifying-glass'></i></button>
                </form>
                  <li className="nav-item mx-2">
                    <a className="nav-link active" aria-current="page" href="#"><i className='fas fa-home i'></i>Inicio</a>
                  </li>
                  <li className="nav-item mx-2">
                    <a className="nav-link active" aria-current="page" href="#"><i className='fa-solid fa-user i'></i>Mi Perfil</a>
                  </li>
                  <li className="nav-item mx-2">
                    <a className="nav-link active" aria-current="page" href="#"><i className='fas fa-home i' ></i>Productos</a>
                  </li>
                  <li className="nav-item mx-2">
                    <a className="nav-link active" aria-current="page" href="#"><i className='fa-solid fa-wallet i'></i>Mis Ventas</a>
                  </li>
                  <li className="nav-item mx-2">
                    <a className="nav-link active" aria-current="page" href="#"><i class="fa-solid fa-credit-card i"></i>Recargar Cuenta</a>
                  </li>
                </ul>
            </div>
          </div>
        </div>
      </nav>
    );
}
export default navbar;