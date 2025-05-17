const info = document.getElementById("info_input");
const password = document.getElementById("password_input");
const login = document.getElementById("login_form");
// messages
const info_msg = document.getElementById("invalid_info");
const password_msg = document.getElementById("invalid_password");


function valid_info()
{
    if(info.value.trim().length >= 3)
    {
        return true;
    }
    return false;
}

function valid_password()
{
    if(password.value.trim().length >=8)
    {
        return true;
    }
    return false;
}
//Messages
info.addEventListener("input",() =>{show_error(info,info_msg,valid_info())});

 password.addEventListener("input",() =>{show_error(password,password_msg,valid_password())});

function show_error(input,input_message,validation)
{
    if (input.value == '')
    {
        input.style.boxShadow = '0 0 1px #010F11'; 
        input_message.style.visibility = 'hidden';
    }
    else if (validation == false)
    {
       input.style.boxShadow = '0 0 3px #e4212b';
       input_message.style.visibility = 'visible';
    }
    else
    {
       input.style.boxShadow = '0 0 3px #08ea9f';
       input_message.style.visibility = 'hidden';
    }
}
//--------------------------------------------------------------------


login.addEventListener("submit",(e) =>
{
    const valid = valid_info() && valid_password();
    e.preventDefault();
    if(valid)
    {
        window.localStorage.setItem("username", info.value);
        window.location.href = "../index.html"
    }
})