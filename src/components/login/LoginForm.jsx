import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//css
import '../css/bgColor.css';

//Components


const LoginForm = () => {
    //navigate 
    const Linkx = useNavigate();
    //set State
    const [userName , setUser] = useState('');
    const [passWord , setPass] = useState('');
    //api login
    const login =()=>
    {
        axios.post('http://localhost:8000/api/login/login' ,
        {   userName : userName , 
            passWord : passWord ,
        }).then((respon)=>{
            if(respon.data.status === "err")
            {
                document.querySelector('#code-err-01').innerHTML = "Incorrect password , please re-enter";
                document.querySelector('#code-err-01').style.color = "pink";
                setPass('');
            }else
            {
                if(respon.data.status === "no")
                {
                    document.querySelector('#code-err-01').innerHTML = "Not data user ?";
                    document.querySelector('#code-err-01').style.color = "pink";
                    setPass('');
                    setUser('');
                }else
                {

                }
            }
        })
    }
    return (
        <>
            {/* LoginForm*/}
            <div className="container-fluid vh-100 UMI_BG_SKYBLUE_X">
                <div className="row pt-5 justify-content-center">
                    <div className="col-4">
                        <>
                            {/* form step two  */}
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label text-white">UserName</label>
                                <input
                                    // Input Value userName
                                    onChange={(event) => {
                                        setUser(event.target.value);
                                    }
                                    
                                    }
                                    value ={userName}
                                    type="text" class="form-control" id="userName" aria-describedby="emailHelp" />
                                <div id="text-code-102" class="form-text"></div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label text-white">PassWord</label>
                                <div class="input-group flex-nowrap ">
                                    <input value={passWord} name="passWord" placeholder="" type="password" class="form-control" id="passWord"
                                        // Input Value password
                                        onChange={
                                            (event) => {
                                                setPass(event.target.value);
                                            }
                                        } />
                                </div>
                            </div>
                            <div class="" role="alert" id="code-err-01"> </div>

                            {/* log errs  */}
                            <div className="mb-3" id="errs-log-code-02" ></div>
                            <button 
                            onClick={login}
                            class="btn btn-primary fw-bolder rounded-pill" type="button" >
                                Login </button>
                        </>
                        <hr className="text-white" />
                        <div className="text-info text-center">
                            You are not registered ? <a style={{ cursor: "pointer" }} onClick={() => { Linkx('/register') }}
                                class="text-white fw-bolder"><i class="far fa-paper-plane" ></i> Sign-up</a>
                            <span> or </span><div class="text-secondary d-inline fw-bolder disabled"> Forget?</div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default LoginForm; 