import React from "react";
import { useNavigate } from "react-router-dom";
//css
import '../css/bgColor.css';


const Navbar = () => {

    const LINK_NAVIGATE = useNavigate();

    return (
        //Main Navbar
        < nav class="navbar navbar-expand-lg navbar-dark UMI_BG_SKYBLUE" >
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Uranus x Star</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="#" tabindex="-1" aria-disabled="true">Update</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle active" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Game
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                <li><a class="dropdown-item" href="#">Generator of Aumi</a></li>

                            </ul>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <button data-bs-toggle="modal" data-bs-target="#Modal"
                            class="btn btn-outline-light" type="button">
                            <i class="fas fa-user-alt" ></i> Accout</button>
                    </form>
                </div>
            </div>
            {/* Modal Accout */}

            <div class="modal fade" id="Modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header UMI_BG_SKYBLUE_II">
                            <h5 class="modal-title text-white fw-bolder "><i className="fas fa-cog"></i> Accout Setting</h5>
                            <button type="button" class="btn p-0 text-white fs-3" data-bs-dismiss="modal"><i class="fas fa-times"></i></button>
                        </div>
                        <div class="modal-body p-0">
                            <div class="list-group">
                                <div class="input-group flex-nowrap ">
                                    <span class="input-group-text border-0 " id="addon-wrapping"><i className="ps-1 fas fa-briefcase"></i></span>
                                    <button class="list-group-item list-group-item-action fw-bolder" aria-current="true">
                                        Packet
                                    </button>
                                </div>
                                <div class="input-group flex-nowrap ">
                                    <span class="input-group-text border-0" id="addon-wrapping"><i className=" fas fa-user-cog"></i></span>
                                    <a href="#" class="list-group-item list-group-item-action fw-bolder" aria-current="true">
                                        Accout Manager
                                    </a>
                                </div>
                                <div class="input-group flex-nowrap ">
                                    <span class="input-group-text border-0" id="addon-wrapping"><i className="ps-1 fas fa-comment-alt"></i></span>
                                    <a href="#" class="list-group-item list-group-item-action fw-bolder" aria-current="true">
                                        Support
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer justify-content-center p-0">

                            <button 
                            data-bs-dismiss="modal"
                            onClick={() => {
                                LINK_NAVIGATE("/register")
                            }} type="button" class="btn btn-primary w-100 fw-bolder"><i className="fas fa-edit"></i> Register</button>
                        </div>

                    </div>
                </div>
            </div>

        </nav >
    );
}

export default Navbar; 