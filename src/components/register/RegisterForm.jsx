import React from "react";
import { useNavigate } from "react-router-dom";
//css
import '../css/Register.css'

//Components
import FormFirst from "./formFirst";

const RegisterForm = () => {

    const LINK_NAVIGATE = useNavigate();

   
    return (

        <>
            {/* RegisterForm*/}

            <div className="container-fluid vh-100 UMI_BG_SKYBLUE_X">
                <div className="row pt-5 justify-content-center">
                    <div className="col-4">
                        <div id="carouselExampleIndicators" class="carousel slide" data-bs-interval="false" >
                            <form >
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <FormFirst/>
                                </div>
                                <div class="carousel-item">
                                </div>
                                <div class="carousel-item">
                                    <img src="..." class="d-block w-100" alt="..." />
                                </div>
                            </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default RegisterForm; 