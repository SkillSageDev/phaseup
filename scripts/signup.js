const username = document.getElementById("username_input");
const email = document.getElementById("email_input");
const password = document.getElementById("password_input");
const confirm_Password = document.getElementById("confirm_password_input");
const signup = document.getElementById("signup_form");

// messages
const username_msg = document.getElementById("invalid_username");
const email_msg = document.getElementById("invalid_email");
const password_msg = document.getElementById("invalid_password");
const confirm_password_msg = document.getElementById("invalid_confirm_password");

function valid_username()
{
    if(username.value.trim().length >= 3)
    {
        return true;
    }
    return false;
}
function valid_email()
{
    const checker = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(checker.test(email.value))
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
function valid_confirm_password()
{
    if(confirm_Password.value == password.value)
    {
        return true;
    }
    return false;
}

//Messages
username.addEventListener("input",() =>{show_error(username,username_msg,valid_username())});

email.addEventListener("input",() =>{show_error(email,email_msg,valid_email())});

password.addEventListener("input",() =>
{
show_error(password,password_msg,valid_password())
if (password.value != confirm_Password.value)
{
    show_error(confirm_Password,confirm_password_msg,valid_confirm_password());
}
});

confirm_Password.addEventListener("input",() =>{show_error(confirm_Password,confirm_password_msg,valid_confirm_password())});

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
//-----------------------------------------------------------------------------------



signup.addEventListener("submit",(e) =>
    {
        e.preventDefault();
        const valid = valid_username() && valid_email() && valid_password() && valid_confirm_password()
        if(valid)
        {
            window.location.href = "./../index.html"
        }
    })