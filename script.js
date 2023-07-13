
const emailVerify=document.getElementsByClassName(".email_box");
const passwordVerify=document.getElementsByClassName("password_box");

function valid(){
    let emailValue=document.getElementById("email").value;
    let passwordValue=document.getElementById("password").value;
    console.log(emailValue);

    let emailCheck=emailValue.includes('@gmail.com') && emailValue.substring(0, emailValue.indexOf('@')).length!=0;
    let passwordCheck=passwordValue.length!=0;

    console.log(emailCheck +" "+ passwordCheck)
    let emailValidation,passValidation;

    if(!emailCheck || emailValue!="Sankey989@gmail.com"){
        document.getElementById("error_email").innerHTML="Invalid Email";
        emailValidation=false;
    }
    else{
        document.getElementById("error_email").innerHTML="";
        emailValidation=true;
    }
    
    if(!passwordCheck || passwordValue!="sankey98922"){
        document.getElementById("error_password").innerHTML="Invalid Password";
        passValidation=false;
    }
    else{
        passValidation=true;
    }

    // document.getElementById("email").innerHTML=""
    // document.getElementById("password").innerHTML=""
    if(passValidation &&  emailValidation) {
        document.getElementById("email").value="";
        return true;
    }
    return false;
}
