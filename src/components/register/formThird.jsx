import React from "react";
const FormThird =({requestRegister , nametag})=>
{
    //global varible set value check
    let req_name ;
    //verify name
    const verify_name =(event)=>
    {
        event.preventDefault(); // not refresh
        axios({method : 'POST' ,url : 'http://localhost:8000/api/register/name-verify',
        data :{
            name : req_name
        } })
        .then((respon)=>
        {
            if(respon.data.status === 'no')
                    {
                        document.querySelector("#text-code-102").innerHTML = "This account already has a user.";
                        document.querySelector("#text-code-102").style.color = "pink"; 

                    }else
                    {
                        if(req_name)
                        {
                            if(req_name.length < 4)
                            {
                                document.querySelector("#text-code-102").style.color = "pink"; 
                                document.querySelector("#text-code-102").innerHTML = "Username must be more than 4 characters.";
                            }
                            else
                            {
                                document.querySelector("#text-code-102").style.color = "#42ec6b"; 
                                document.querySelector("#text-code-102").innerHTML = "Account is available";
                            }
                        }
                        else    
                        {
                            document.querySelector("#text-code-102").innerHTML = null;
                        }
                    }
        });
    }
    return(
        <>
            {/* form step three  */}
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label text-white fw-bolder">#Nametag</label>
                <input
                //Input name tag
                onChange={(event)=>{nametag(event.target.value)}}
                placeholder="Name used in the game" type="text" class="form-control" id="nameTag" aria-describedby="emailHelp" />
            </div>
            <button id="btn-next" class="btn btn-secondary fw-bolder" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"><i className="fas fa-caret-left"></i> Back</button>
            <button 
            // send data to api 
            onClick={()=>{requestRegister()  
                name()            
            }}
            id="btn-next" 
            class="ms-2 btn btn-primary fw-bolder" 
            type="button">Register <i className="fas fa-paper-plane"></i></button>
        </>
    );
}

export default FormThird; 