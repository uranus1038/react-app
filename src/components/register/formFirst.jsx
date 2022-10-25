import React from "react";
import { useNavigate } from "react-router-dom";
//css
import '../css/Register.css'

const FormFirst = () => {

    const LINK_NAVIGATE = useNavigate();

    // Func autoTab
    const auto = (id, id_tab, leng) => {
        if (document.getElementById(id).value.length > leng) {

            document.getElementById(id_tab).focus();
        }
    }
    return (

        <>
            {/* Form Step One */}

           
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label text-white">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">This email will be used to edit information.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label text-white">Brithday</label>
                    <div class="input-group flex-nowrap ">
                        <input placeholder="01" type="text" class="form-control" id="dd"
                            onChange={() => { auto("dd", "mm", 1) }} />
                        <input placeholder="01" type="text" class="form-control" id="mm"
                            onChange={() => { auto("mm", "yyyy", 1) }} />
                        <input placeholder="2022" type="text" class="form-control" id="yyyy"
                            onChange={() => { auto("yyyy", "btn-next", 3) }} />
                    </div>

                </div>

                <button id="btn-next" class="btn btn-primary fw-bolder" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">Next <i className="fas fa-caret-right"></i></button>
                <hr className="text-white" />
                <div className="text-info text-center">
                    You have an account? <a href="" class="text-white fw-bolder"><i class="fa fa-rocket" ></i> Sign-in</a>
                </div>
            
        </>
    );
}

export default FormFirst; 