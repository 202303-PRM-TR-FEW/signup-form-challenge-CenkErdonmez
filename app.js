const firstName = document.getElementById("name")
const lastName=document.getElementById("lastname")
const email=document.getElementById("email")
const pass= document.getElementById("password")
const button=document.getElementById("button")
const par=document.getElementById("checkmail")
const nameCheck= document.getElementById("checkname")
const lastNameCheck= document.getElementById("checklast")
const passCheck= document.getElementById("checkpass")
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

const validatePassword = (pass) =>{
    return String(pass)
    .toLowerCase()
    .match("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})")
}

button.addEventListener("click",(e)=>{
    e.preventDefault()
   
}


)

email.addEventListener("blur",()=>{
    if(!validateEmail(email.value)){
       error(email) 
        par.style.visibility=""
    }else{
        par.style.visibility="hidden"
        email.style.borderColor=""
    }
}
)
 firstName.addEventListener("blur",()=>{
     if(firstName.value==""){
         nameCheck.style.visibility=""
        error(firstName)
     }else{
        nameCheck.style.visibility="hidden"
        firstName.style.borderColor=""
     }
   
 }
)
lastName.addEventListener("blur",()=>{
    if(lastName.value==""){
        lastNameCheck.style.visibility=""
        error(lastName)
    }
    else {
        lastNameCheck.style.visibility="hidden"
        lastName.style.borderColor=""
    }
}
)

pass.addEventListener("blur" ,()=>{
    if(!validatePassword(pass.value)){
        passCheck.style.visibility=""
        error(pass)
    }
    else{
        passCheck.style.visibility="hidden"
        pass.style.borderColor="    "
    }
}
)

function error(element){
    element.style.backgroundImage=`url(images/icon-error.svg)`
    element.style.backgroundRepeat="no-repeat"
    element.style.backgroundPosition="95%"
    element.style.borderColor="red"
}

