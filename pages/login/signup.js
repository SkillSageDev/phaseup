const username = document.getElementById("username_input");
const email = document.getElementById("email_input");
const password = document.getElementById("password_input");
const confirm_Password = document.getElementById("confirm_password_input");
const signup = document.getElementById("signup_form");

function valid_username()
{
    if(username.value.trim().length >= 3)
    {
        return true;
    }
    alert("username Must be more than 2 characters");
    return false;
}
function valid_email()
{
    const checker = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(checker.test(email.value))
    {
        return true;
    }
    alert("Wrong email");
    return false;
}
function valid_password()
{
    if(password.value.trim().length >=8)
        {
            return true;
        }
        alert("password Must be more than 7 characters");
        return false;
}
function valid_confirm_password()
{
    if(confirm_Password.value == password.value)
    {
        return true;
    }
    alert("confirm password doesn't match with password");
    return false;
}

signup.addEventListener("submit",(e) =>
    {
        const valid = valid_username() && valid_email() && valid_password() && valid_confirm_password()
        if(valid)
        {
            document.writeln("You May Enter");
        }
        else
        {
            e.preventDefault();
        }
    })