import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import {useState} from "react";
//css
import '../css/bgColor.css'

//Components
import FormFirst from "./formFirst";
import FormSecond from "./formSecond";
import FormThird from "./formThird";

const RegisterForm = () => {
    // navigate 
    const Linkx = useNavigate(); 
    //setState
    const [email , setEmail ] = useState("")
    const [day , setDay ] = useState("")
    const [month , setMonth ] = useState("")
    const [year , setYear ] = useState("")
    const [userName , setUserName ] = useState("")
    const [passWord , setPassword ] = useState("")
    const [gender , setGender ] = useState("")
    const [nametag , setNametag ] = useState("")  
    // brithday day concatnate
    let brithday = `${day}-${month}-${year} `  ;
    // api resgister
    function  requestRegister(event)
    {
       axios.post('http://localhost:8000/api/register/success', {
        email : email , 
        brithday : brithday ,
        userName : userName , 
        passWord : passWord ,
        gender : gender , 
        nametag : nametag , 
       }).then((respon)=>{
        if(respon.data.status === "ok")
        {
           return  window.location.replace('/login');
        }
        else
        {
            return ; 
        }
       });
        
    }
    return (
        <>
            {/* RegisterForm*/}
            <div className="container-fluid vh-100 UMI_BG_SKYBLUE_X">
                <div className="row pt-5 justify-content-center">
                    <div className="col-4">
                        <div id="carouselExampleIndicators" class="carousel slide" data-bs-interval="false" >
                            
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <FormFirst email_={email} email={setEmail} day={setDay} month={setMonth} year={setYear}/>
                                    </div>
                                    <div class="carousel-item">
                                        <FormSecond userName={setUserName} passWord={setPassword} gender={setGender}/>
                                    </div>
                                    <div class="carousel-item">
                                        <FormThird requestRegister={requestRegister} nametag={setNametag}/>
                                    </div>
                                </div>
                                <hr className="text-white" />
                                <div className="text-info text-center">
                                    You have an account? <a style={{cursor : "pointer"} } onClick={()=>{Linkx('/login')}} class="text-white fw-bolder"><i class="fa fa-rocket" ></i> Sign-in</a>
                                </div>
                           
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default RegisterForm; 