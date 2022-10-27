import React from "react";
const FormThird =()=>
{
   
    return(
        <>
            {/* form step three  */}
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label text-white fw-bolder">#Nametag</label>
                <input placeholder="Name used in the game" type="text" class="form-control" id="nameTag" aria-describedby="emailHelp" />
            </div>
            <button id="btn-next" class="btn btn-secondary fw-bolder" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"><i className="fas fa-caret-left"></i> Back</button>
            <button 
            id="btn-next" class="ms-2 btn btn-primary fw-bolder" 
            type="button">Register <i className="fas fa-paper-plane"></i></button>
        </>
    );
}

export default FormThird; 