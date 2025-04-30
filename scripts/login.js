const info = document.getElementById("info_input");
const password = document.getElementById("password_input");
const login = document.getElementById("login_form");

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
login.addEventListener("submit",(e) =>
{
    const valid = valid_info() && valid_password();
    if(valid)
    {
        document.write("You May Enter");
    }
    else
    {
        alert("invalid username or password");
        e.preventDefault();
    }

})