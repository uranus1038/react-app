import React from "react";
import { useState } from "react";
import axios from "axios";
const FormSecond = ({userName , passWord , gender}) => {
    let req_userName ;
    // Func check password easy > very good password
    function doc(id,id_alert) {
        if (document.getElementById(id).value.length > 9) {
            document.getElementById(id_alert).innerHTML = "Good" ; 
            document.getElementById(id_alert).className = "alert alert-success"
        }else
        {
            if(document.getElementById(id).value.length < 1)
            {
                document.getElementById(id_alert).innerHTML = "" ; 
                document.getElementById(id_alert).className = "";
            }else
            {
                document.getElementById(id_alert).innerHTML = "easy" ; 
                document.getElementById(id_alert).className = "alert alert-warning"
            }

        }

    }
    //check Input user
    function validator() {
        let validate = [];
        if (document.getElementById("userName").value.length < 1) {
            validate.push("err");
        }
        if (document.getElementById("passWord").value.length < 1) {
            validate.push("err");  
        }
        if (document.getElementById("gender").value === "Other" || document.getElementById("gender").value === "") {
            validate.push("err")
        }
        if (validate.length == 0) {
            document.getElementById("errs-log-code-02").innerHTML = "";
            document.getElementById("btn-next").setAttribute("data-bs-slide", "next");
            document.getElementById("btn-next").click();
            document.getElementById("btn-next").setAttribute("data-bs-slide", "validate");
        }else{
            document.getElementById("errs-log-code-02").innerHTML = "Please fill the correct information.";
            document.getElementById("errs-log-code-02").style.color = "pink";
        }

    }
    //api verify email 
    const validator_userName =(event)=>
    {
        event.preventDefault(); // not refresh
        axios({method : 'POST' ,url : 'http://localhost:8000/api/register/userName-verify',
        data :{
            userName : req_userName
        } })
        .then((respon)=>
        {
            if(respon.data.status === 'no')
                    {
                        document.querySelector("#text-code-102").innerHTML = "This account already has a user.";
                        document.querySelector("#text-code-102").style.color = "pink"; 

                    }else
                    {
                        if(req_userName)
                        {
                            if(req_userName.length < 4)
                            {
                                document.querySelector("#text-code-102").style.color = "pink"; 
                                document.querySelector("#text-code-102").innerHTML = "Please enter a valid email address.";
                            }
                            else
                            {
                                document.querySelector("#text-code-102").style.color = "#42ec6b"; 
                                document.querySelector("#text-code-102").innerHTML = "Account is available";
                            }
                        }
                        else    
                        {
                            document.querySelector("#text-code-102").style.color = "gray"; 
                            document.querySelector("#text-code-102").innerHTML = "This email will be used to edit information.";
                        }
                    }
        });
    }
    return (
        <>
            {/* form step two  */}
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label text-white">UserName</label>
                <input 
                // Input Value userName
                onChange={(event)=>{userName(event.target.value);
                    req_userName = event.target.value;
                    validator_userName(event) ;
                }
            }
                type="text" class="form-control" id="userName" aria-describedby="emailHelp" />
                <div id="text-code-102" class="form-text"></div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label text-white">PassWord</label>
                <div class="input-group flex-nowrap ">
                    <input name="passWord" placeholder="" type="password" class="form-control" id="passWord"
                     // Input Value password
                        onChange={
                            (event) => { doc("passWord" , "alert-password") 
                            passWord(event.target.value)
                        }
                        } />
                </div>
            </div>
            <div class="" role="alert" id="alert-password"> </div>

            <label for="exampleInputEmail1" class="form-label text-white">Gender</label>
            <select
             // Input Value gender
            onClick={(event)=>{gender(event.target.value)}} 
            class="form-select mb-3" aria-label="Default select example" id="gender">
                <option selected>Other</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
            {/* log errs  */}
            <div className="mb-3" id="errs-log-code-02" ></div>
            <button id="btn-prev" class="btn btn-secondary fw-bolder" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"><i className="fas fa-caret-left"></i> Back</button>
            <button 
            onClick={validator}
            id="btn-next" class="ms-2 btn btn-primary fw-bolder" type="button" data-bs-target="#carouselExampleIndicators"
                >Next <i className="fas fa-caret-right"></i></button>
        </>
    );
}

export default FormSecond; 