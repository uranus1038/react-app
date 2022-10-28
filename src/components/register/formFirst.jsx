import React from "react";
//css
import '../css/Register.css'

const FormFirst = ({email , day}) => {
    // Func autoTab
    const auto = (id, id_tab, leng) => {
        // if password > value.dd/mm/yyyy
        if (document.getElementById(id).value.length > leng) {
            //focus id
            document.getElementById(id_tab).focus();
        }
    }
    return (

        <>
            {/* Form Step One */}
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label text-white">Email address</label>
                    <input 
                    // input value email
                   onChange={(event)=>{email(event.target.value)}}
                    type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="email" class="form-text">This email will be used to edit information.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label text-white">Brithday</label>
                    <div class="input-group flex-nowrap ">
                        <input
                         placeholder="01" type="text" class="form-control" id="dd"
                            onChange={(event) => 
                            //auto tab
                            { auto("dd", "mm", 1) 
                            // input value day
                            day(event.target.value)}} />
                        <input placeholder="01" type="text" class="form-control" id="mm"
                            onChange={() => { auto("mm", "yyyy", 1) }} />
                        <input placeholder="2022" type="text" class="form-control" id="yyyy"
                            onChange={() => { auto("yyyy", "btn-next", 3) }} />
                    </div>

                </div>

                <button id="btn-next" class="btn btn-primary fw-bolder" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">Next <i className="fas fa-caret-right"></i></button>
              
            
        </>
    );
}

export default FormFirst; 