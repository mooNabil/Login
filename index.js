
//html variables
let loginEmail = document.querySelector("#loginEmail")
let LoginPassword = document.querySelector("#LoginPassword")
let name = document.querySelector("#name")
let signUpEmail = document.querySelector("#signUpEmail")
let signUpPassword = document.querySelector("#signUpPassword")
let login = document.querySelector("#login")
let signUp = document.querySelector("#signUp")
let register = document.querySelector("#register")
let signIn = document.querySelector("#signIn")
let signInCard = document.querySelector("#signInCard")
let signUpCard = document.querySelector("#signUpCard")
let warning = document.getElementById("warning")
let warningSignUp = document.querySelector("#warningSignUp")




// ^swap betwen signUp and sign in
register.addEventListener("click", function () {

    signInCard.classList.add("d-none");
    signUpCard.classList.remove("d-none");

})

signIn.addEventListener("click", function () {

    signUpCard.classList.add("d-none");
    signInCard.classList.remove("d-none");

})


//^save login Data

let loginList = [];



login.addEventListener("click", function () {

    let loginData = {
        lognEmailData: loginEmail.value,
        lognPasswordData: LoginPassword.value,
    }
    if (loginData.lognEmailData == "" | loginData.lognPasswordData == "") {
        login.setAttribute("href", "#");
        warning.textContent = "All inputs is required"
    } else if (chckloginData(loginData.lognEmailData, loginData.lognPasswordData) === true) {
        console.log("true");
        login.setAttribute("href", "./page.html");
    } else {
        login.setAttribute("href", "#");
        warning.textContent = "invalid Email or password"
        console.log("no");
    }

})
// ^save registerData
let registerList = []
signUp.addEventListener("click", function () {

    let registerData = {
        nameData: name.value,
        registerEmailData: signUpEmail.value,
        registerPasswordData: signUpPassword.value,
    }
    registerList.push(registerData)
    if (registerData.nameData === "" | registerData.registerEmailData === "" | registerData.registerPasswordData === "") {
        warningSignUp.textContent = "inputs must not be empty"
    }
    else if (emailValidation(registerData.registerEmailData) === true) {

        if (checkLocalStorageData(registerData.registerEmailData) === true) {
            warningSignUp.textContent = "email already exists"
            warningSignUp.classList.remove("text-success")
            warningSignUp.classList.add("text-danger")

        } else {
            console.log("success");
            warningSignUp.textContent = "success"
            warningSignUp.classList.remove("text-danger")
            warningSignUp.classList.add("text-success")
            SaveToLocalStorage()
            name.value = "";
            signUpEmail.value = "";
            signUpPassword.value = "";
        }
    }
    else {
        warningSignUp.textContent = "entar a valid email"
    }
}

)





function SaveToLocalStorage() {
    localStorage.setItem("registerList", JSON.stringify(registerList))
}

function emailValidation(check) {

    let emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

    if (emailRegex.test(check)) {
        return true

    } else {
        return false
    }

}

function checkLocalStorageData(data) {

    let myData = JSON.parse(localStorage.getItem("registerList"))

    for (let i = 0; i < myData.length; i++) {

        if (myData[i].registerEmailData === data) {
            return true
        } else {
            return false
        }
    }
}

function chckloginData(emailData, passwordData) {

    let myData = JSON.parse(localStorage.getItem("registerList"))

    for (let i = 0; i < myData.length; i++) {

        if (myData[i].registerEmailData === emailData && myData[i].registerPasswordData === passwordData) {
            return true
        } else {
            return false
        }
    }
}




