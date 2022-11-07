import axios from "axios";
import React from "react";
import {BrowserRouter as Redirect } from "react-router-dom";
const FormThird = ({ requestRegister, nametag }) => {
    //global varible set value check
    let req_name;
    //verify name
    const verify_name = (event) => {
        event.preventDefault(); // not refresh
        axios({
            method: 'POST', url: 'http://localhost:8000/api/register/name-verify',
            data: {
                name: req_name
            }
        })
            .then((respon) => {
                if (respon.data.status === 'no') {
                    document.querySelector("#text-code-103").innerHTML = "This name already has a user.";
                    document.querySelector("#text-code-103").style.color = "pink";

                } else {
                    if (req_name) {
                        if (req_name.length < 4) {
                            document.querySelector("#text-code-103").style.color = "pink";
                            document.querySelector("#text-code-103").innerHTML = "Name-Tag must be more than 4 characters.";
                        }
                        else {
                            document.querySelector("#text-code-103").style.color = "#42ec6b";
                            document.querySelector("#text-code-103").innerHTML = "Name-Tag is available";
                        }
                    }
                    else {
                        document.querySelector("#text-code-103").innerHTML = null;
                    }
                }
            });
    }
    function validator() {
        let validate = [];
        if (document.getElementById("nameTag").value === 'no') {
            validate.push("err");
        }
        if (document.getElementById("nameTag").value.length < 4) {
            validate.push("err");
        }
        if (validate.length == 0) {
            document.getElementById("text-code-103").innerHTML = null ;
            window.location.replace('/');
        }else{
            document.getElementById("text-code-103").style.color = "pink";
            document.getElementById("text-code-103").innerHTML = "Name-Tag must be more than 4 characters.";
        }
    }

    return (
        <>
            {/* form step three  */}
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label text-white fw-bolder">#Nametag</label>
                <input
                    //Input name tag
                    onChange={(event) => {
                        nametag(event.target.value);
                        req_name = event.target.value;
                        verify_name(event);
                    }}
                    placeholder="Name used in the game" type="text" class="form-control" id="nameTag" aria-describedby="emailHelp" />
                <div id="text-code-103" class="form-text"></div>
            </div>
            <button id="btn-next" class="btn btn-secondary fw-bolder" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"><i className="fas fa-caret-left"></i> Back</button>
            <button
                // send data to api 
                onClick={() => {
                    requestRegister()
                    validator()
                }}
                id="btn-next"
                class="ms-2 btn btn-primary fw-bolder"
                type="button">Register <i className="fas fa-paper-plane"></i></button>
        </>
    );
}

export default FormThird; 