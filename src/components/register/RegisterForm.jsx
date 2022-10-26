import React from "react";
import { useNavigate } from "react-router-dom";
//css
import '../css/Register.css'

//Components
import FormFirst from "./formFirst";
import FormSecond from "./formSecond";
import FormThird from "./formThird";

const RegisterForm = () => {
    // link page
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
                                        <FormFirst />
                                    </div>
                                    <div class="carousel-item">
                                        <FormSecond />
                                    </div>
                                    <div class="carousel-item">
                                        <FormThird />
                                    </div>
                                </div>
                                <hr className="text-white" />
                                <div className="text-info text-center">
                                    You have an account? <a href="" class="text-white fw-bolder"><i class="fa fa-rocket" ></i> Sign-in</a>
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