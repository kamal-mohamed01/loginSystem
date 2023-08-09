var signupName = document.getElementById("signupName")
var signupEmail = document.getElementById("signupEmail")
var signupPassword = document.getElementById("signupPassword")
var signUpMassage = document.getElementById("signUpMassage")
var signUpBottom = document.getElementById("signUpBottom")


var allUsers=[]
if (localStorage.getItem("user")!=null) {
    allUsers = JSON.parse(localStorage.getItem("user")
)}
function signUp() {
    var user ={
        name: signupName.value,
        email:signupEmail.value,
        password:signupPassword.value
    }
    if (signupName.value==""||signupEmail.value==""||signupPassword.value==""){
        signUpMassage.innerHTML = "All inputs is required"
    }
    else if (oldmail()){
        signUpMassage.innerHTML = "email already exists"
    }
    else {
        allUsers.push(user)
        localStorage.setItem("user",JSON.stringify(allUsers))
        document.getElementById('signUpMassage') .innerHTML ='<span class="text-success m-3">Success</span>'
    }
}

function oldmail() {
    for (let i = 0; i < allUsers.length; i++) {
        if (signupEmail.value == allUsers[i].email) {
        return true;
        }
    }
    return false;
}

if (signUpBottom!= null) {
    signUpBottom.addEventListener('click',signUp)

}




// =====================================================================================================







var signinEmail=document.getElementById("signinEmail");
var signinPassword=document.getElementById("signinPassword");
var incorrectMassage=document.getElementById("incorrectMassage");
var loginBottom=document.getElementById("loginBottom");

function login() {
    if (signinEmail.value==""||signinPassword.value=="") {
        document.getElementById('incorrectMassage').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
    }
    else if(oldUser()==false) {
        signUpMassage.innerHTML ="incorrect email or password"
    }
    else{
        loginBottom.href = 'home.html'
    }
}
function oldUser() {
    for (var i = 0; i < allUsers.length; i++) {
        if (signinEmail.value ==allUsers[i].email && signinPassword.value==allUsers[i].password) {
            localStorage.setItem('currentUser',JSON.stringify(allUsers[i].name))
            return true
        }
        
    }
    return false
}
if (loginBottom!=null) {
    loginBottom.addEventListener("click", login)
}




//===============================================================================================================


var homeName =document.getElementById('homeName')
if (homeName!=null) {
    var username = JSON.parse(localStorage.getItem('currentUser'))
    homeName.innerHTML = `Welcome ${username}`
}