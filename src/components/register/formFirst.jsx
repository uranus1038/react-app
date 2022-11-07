import React from "react";
import axios  from "axios";
//css
import '../css/Register.css'

const FormFirst = ({ email, day, month, year }) => {
    //global varible set value check
    let req_email ;
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
       
        if (document.getElementById("email").value.length < 15) {
            validate.push("err");
        }
        if (document.getElementById("dd").value.length < 2 || document.getElementById("dd").value.length > 2) {
            validate.push("err");
        }
        if (document.getElementById("mm").value.length  < 2 || document.getElementById("mm").value.length > 2) {
            validate.push("err")
        }
        if (document.getElementById("yyyy").value.length < 4 || document.getElementById("yyyy").value.length > 4) {
            validate.push("err")
        }
        if (document.getElementById("text-code-101").value === 'no') {
            validate.push("err")
        }

        if (validate.length == 0) {
            document.getElementById("errs-log-code-01").innerHTML = "";
            document.getElementById("btn-next").setAttribute("data-bs-slide", "next");
            document.getElementById("btn-next").click();
            document.getElementById("btn-next").setAttribute("data-bs-slide", "validate");
        }else{
            document.getElementById("errs-log-code-01").innerHTML = "Please fill the correct information.";
            document.getElementById("errs-log-code-01").style.color = "pink";
        }

    }
    // api verify email 
    function verify_email(event)
    {
        event.preventDefault(); // not refresh
        axios({method : 'POST' ,url : 'http://localhost:8000/api/register/email-verify',
                data :{
                    email : req_email
                } })
                .then((respon)=>
                {
                    if(respon.data.status === 'no')
                    {
                        document.querySelector("#text-code-101").innerHTML = "This email already has a user.";
                        document.querySelector("#text-code-101").style.color = "pink"; 

                    }else
                    {
                        if(req_email)
                        {
                            if(req_email.length < 15)
                            {
                                document.querySelector("#text-code-101").style.color = "pink"; 
                                document.querySelector("#text-code-101").innerHTML = "Please enter a valid email address.";
                            }
                            else
                            {
                                document.querySelector("#text-code-101").style.color = "#42ec6b"; 
                                document.querySelector("#text-code-101").innerHTML = "Email-Address is available";
                            }
                        }
                        else    
                        {
                            document.querySelector("#text-code-101").style.color = "gray"; 
                            document.querySelector("#text-code-101").innerHTML = "This email will be used to edit information.";
                        }
                    }
                });
    }
    return (

        <>
            {/* Form Step One */}
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label text-white">Email address</label>
                <input
                    // input value email
                    onChange={(event) => { email(event.target.value) ;
                        req_email = event.target.value  ;
                        verify_email(event); }}
                    type="email" class="form-control" id="email" aria-describedby="emailHelp" />
                <div id="text-code-101" class="form-text">This email will be used to edit information.</div>
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
            <div class="mb-3" id="errs-log-code-01"></div>
            <button
                onClick={validator}
                id="btn-next" class="btn btn-primary fw-bolder" type="button" data-bs-target="#carouselExampleIndicators"
            >Next <i className="fas fa-caret-right"></i></button>


        </>
    );
}

export default FormFirst; 