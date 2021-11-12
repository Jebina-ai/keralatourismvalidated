let email = document.getElementById("email");
// let password = document.getElementById("pwd1");
// let confirmPassword = document.getElementById("pwd2");
let error=document.getElementById("error");
// let error2=document.getElementById("error2");


function validate(){
    if(email.value=="" || pwd.value=="" || pwd2.value=="" || username.value=="" || number.value==""){
        alert("Fields cannot be empty!!");
        return false;
    }
    else if(email.value.trim==""||pwd.value.trim==""){
        alert("Fields cannot be empty");
        
    }
    
    // else if(pwd.value.length<8){
    //     alert("Password too short!");
    //     pwd.style.border="2px solid red";
    //     return false;
    // }
    // else if (password != confirmPassword) {
    //     error2.innerHTML = "Your Password doesn't match. Please enter same password in both fields";
    //     error2.style.color="red"
    //     return false;
    // }
    
    else{
        return false;
    }
    
    //password strength validation
    
    function validatePassword() {
    var newPassword = document.getElementById('changePasswordForm').newPassword.value;
    var minNumberofChars = 8;
    var maxNumberofChars = 16;
    var regularExpression  = /^[a-zA-Z0-9]{8,16}$/;
    alert(newPassword); 
    if(newPassword.length < minNumberofChars || newPassword.length > maxNumberofChars){
        return false;
    }
    if(!regularExpression.test(newPassword)) {
        alert("password should contain atleast one number and one uppercase and lowercase character");
        return false;
    }
}




//email validation regular expression

    let regexp = /^([\w\.-]+)@([\w\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    if(regexp.test(email.value)){
        error.innerHTML = "Valid";
        error.style.color="green";
        return false;
    }
    else{
        error.innerHTML = "Invalid";
        error.style.color = "red";
        return false;
    }
}

