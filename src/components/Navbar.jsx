import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-dark">
      <div class="container-fluid fs-5">
        <Link to={'/'} className='text-decoration-none'><a class="navbar-brand text-warning" href="#"><i class="bi bi-luggage"></i> Travelly</a></Link>
        <button class="navbar-toggler bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto align-items-center gap-lg-5 mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to={'/'} className='text-decoration-none'><a class="nav-link text-light active" aria-current="page" href="#"><i className="bi bi-house"></i> Home</a></Link>
            </li>
            <li class="nav-item">
              <Link to={'/about'} className='text-decoration-none'><a class="nav-link text-light" href="#"><i class="bi bi-file-earmark-person-fill"></i> About</a></Link>
            </li>
            <li class="nav-item">
              <Link to={'/packages'} className='text-decoration-none'><a class="nav-link text-light" href="#"><i class="bi bi-box-seam"></i> Packages</a></Link>
            </li>
            <li class="nav-item">
              <Link to={'/contact'} className='text-decoration-none'><a class="nav-link text-light" href="#"><i class="bi bi-person-lines-fill"></i> Contact</a></Link>
            </li>
            <li class="nav-item">
              <a class="btn btn-success" href="#">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar