// JavaScript Document
function validateForm() {
    var x = document.forms["form-signin"]["username"].value;
	var y = document.forms["form-signin"]["pass"].value; 
    if (x == null || x == "" || y == null || y == "" ) {
        alert("Please fill out all fields");
        return false;
    }
}

function ValidateEmail(mail)   
{  
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form-signin.email.value))  
  {  
    return (true)  
  }  
    alert("You have entered an invalid email address!")  
    return (false)  
} 
