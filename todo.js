let inputs = document.querySelector("#inp");
let text = document.querySelector(".text")

 function Add(){
    if(inputs.value == ""){
        alert("please enter a task");
    }
    else {
        let newEle = document.createElement("ul");
        newEle.innerHTML =`${ inputs.value }<i class="fa-solid fa-trash-can"></i>`;
        text.appendChild(newEle);
        inputs.value = "";
        newEle.querySelector("i").addEventListener("click",function(){
            newEle.remove();
        })
    }
 }

