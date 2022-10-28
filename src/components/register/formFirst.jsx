import React from "react";
//css
import '../css/Register.css'

const FormFirst = ({ email, day, month, year }) => {
    //validate check
    var validate;
    // Func autoTab
    const auto = (id, id_tab, leng) => {
        // if password > value.dd/mm/yyyy
        if (document.getElementById(id).value.length > leng) {
            //focus id
            document.getElementById(id_tab).focus();
        }
    }
    // chcek user input
    function validator() {
        let validate = [];
        let email = document.getElementById("email").value.length;
        let day = document.getElementById("dd").value.length;
        let month = document.getElementById("mm").value.length;
        let year = document.getElementById("yyyy").value.length;
        let text_0 = "Please fill the correct information.";
        if (email < 15) {
            validate.push("err");
            document.getElementById("errs-log").innerHTML = text_0;
            document.getElementById("errs-log").style.color = "pink";
        }
        if (day < 2) {
            validate.push("err");
            document.getElementById("errs-log").innerHTML = text_0;
            document.getElementById("errs-log").style.color = "pink";
        }
        if (month  < 2) {
            validate.push("err")
            document.getElementById("errs-log").innerHTML = text_0;
            document.getElementById("errs-log").style.color = "pink";
        }
        if (year < 4) {
            validate.push("err")
            document.getElementById("errs-log").innerHTML = text_0;
            document.getElementById("errs-log").style.color = "pink";
        }

        if (validate.length == 0) {
            document.getElementById("errs-log").innerHTML = "";
            document.getElementById("btn-next").setAttribute("data-bs-slide", "next");
            document.getElementById("btn-next").click();
            document.getElementById("btn-next").setAttribute("data-bs-slide", "validate");
        }

    }
    return (

        <>
            {/* Form Step One */}
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label text-white">Email address</label>
                <input
                    // input value email
                    onChange={(event) => { email(event.target.value) }}
                    type="email" class="form-control" id="email" aria-describedby="emailHelp" />
                <div  class="form-text">This email will be used to edit information.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label text-white">Brithday</label>
                <div class="input-group flex-nowrap ">
                    <input
                        placeholder="01" type="text" class="form-control" id="dd"
                        onChange={(event) =>
                        //auto tab
                        {
                            auto("dd", "mm", 1)
                            // input value day
                            day(event.target.value)
                        }} />
                    <input placeholder="01" type="text" class="form-control" id="mm"
                        onChange={(event) => {
                            auto("mm", "yyyy", 1)
                            // input value month
                            month(event.target.value)
                        }} />
                    <input placeholder="2022" type="text" class="form-control" id="yyyy"
                        onChange={(event) => {
                            auto("yyyy", "btn-next", 3)
                            // input value year
                            year(event.target.value)
                        }} />
                </div>
            </div>
            <div class="mb-3" id="errs-log"></div>
            <button
                onClick={validator}
                id="btn-next" class="btn btn-primary fw-bolder" type="button" data-bs-target="#carouselExampleIndicators"
            >Next <i className="fas fa-caret-right"></i></button>


        </>
    );
}

export default FormFirst; 