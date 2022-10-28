import React from "react";
import { useState } from "react";
const FormSecond = ({userName , passWord , gender}) => {
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
    return (
        <>
            {/* form step two  */}
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label text-white">UserName</label>
                <input 
                // Input Value userName
                onChange={(event)=>{userName(event.target.value)}}
                type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label text-white">PassWord</label>
                <div class="input-group flex-nowrap ">
                    <input name="passWord" placeholder="" type="password" class="form-control" id="password"
                     // Input Value password
                        onChange={
                            (event) => { doc("password" , "alert-password") 
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
            class="form-select mb-3" aria-label="Default select example">
                <option selected>Other</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
            <button id="btn-next" class="btn btn-secondary fw-bolder" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"><i className="fas fa-caret-left"></i> Back</button>
            <button id="btn-next" class="ms-2 btn btn-primary fw-bolder" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next">Next <i className="fas fa-caret-right"></i></button>
        </>
    );
}

export default FormSecond; 