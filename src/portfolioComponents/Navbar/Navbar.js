import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Profile</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav ml-auto" >
                <li class="nav-item active">
                    <a class="nav-link" href="#Home">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Aboutme</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#Testmonial">Testmonial</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Contactme</a>
                </li>
                </ul>
            </div>
            </nav>
        </div>
    )
}

export default Navbar;
