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
    return false;
}
function valid_email()
{
    const checker = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(checker.test(email))
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

signup.addEventListener("submit",(e) =>
    {
        const valid = valid_username() && valid_email() && valid_password() && valid_confirm_password()
        if(valid)
        {
            document.write("You May Enter");
        }
        else
        {
            e.preventDefault();
            if (valid_username == false)
            {
                alert("username must be more than 2 characters");
            }
            else if(valid_email)
            {
                alert("wrong email");
            }
            else if (valid_password)
            {
                alert("wrong password");
            }
            else
            {
                alert("the confirm password & password doesn't match");
            }
        }
    
    })