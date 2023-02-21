const inputFields = {
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  password: /^[#\w@_-]{8,20}$/,
}

//spaces are not allowed in range
//select all the input fields and add an onkeyup event listener to them

const validate = (field, regex) => {
  regex.test(field.value) ? field.className = 'valid' : field.className = 'invalid';
}

let keys = document.querySelectorAll('input');
keys.forEach(item => item.addEventListener(
  'keyup', e => {
    validate(e.target, inputFields[e.target.attributes.name.value])
  }
));

var container = document.querySelector(".container") 
var form = document.getElementById("validation");
var email = document.getElementById("input-email");
var password = document.getElementById("input-password");
var button = document.getElementById("submit-btn");
var error = document.getElementById("error");
console.log("from cont",container);
console.log("from form",form);
console.log("from email",email);
console.log("from pass",password);

form.addEventListener('submit',submition,false);
function submition(event){
    var welcome = document.createElement("div");
    console.log("from func");

    if(email.value === "habiba.elganainey@gmail.com" && password.value ==="123123@h"){
        event.preventDefault();
        console.log("hellllllllllo");
            form.style.display = "none";
            container.appendChild(welcome);
            welcome.innerHTML = "<h2>Welcome</h2>";
            welcome.style.textAlign = "Center";
            welcome.style.fontFamily = "Hello bebo";
    }
    else if(email.value === "habiba.elganainey@gmail.com" && password.value !="123123@h"){
        event.preventDefault();
            error.textContent = "Please enter a valid password"
            error.style.color = "red" 
            error.style.textAlign = "left"; 
    }
    else if(email.value != "habiba.elganainey@gmail.com" && password.value !="123123@h"){
        event.preventDefault();
        error.textContent = "Wrong email, Please Try Again"
        error.style.color = "red" 
        error.style.textAlign = "left"; 
    }
    else{
        event.preventDefault();
        error.textContent = "You are not Registered Try Again"
        error.style.color = "red" 
        error.style.textAlign = "left"; 

    }
}
