function userlogin() {
    
    let login_email = document.getElementById("Email").value
    let login_password = document.getElementById("Password").value
    
    var u_detail = localStorage.getItem("userDetails")
    var con_detail = JSON.parse(u_detail)
    console.log(con_detail)

    for (var i = 0; i < con_detail.length; i++) {
        
        if (con_detail[i].email == login_email && con_detail[i].password == login_password){
        alert("success")
        window.location = "home.html"
        document.getElementById("welcome").innerHTML = `<h2>Welcome
        ${
            con_detail[i].name
        }</h2>`
        localStorage.setItem("loggedIn",true)
        localStorage.setItem("loggedName",con_detail[i].name)
        registeredUsers()
        
        }
    }
}

function logout(){
    window.location = "login.html"
}

function checklogin(){
    // window.location = "home.html"
    if(localStorage.getItem("loggedIn")){
        
        u_name = localStorage.getItem("loggedName")
        document.getElementById("welcome").innerHTML = `<h2>welcome
        ${
            u_name
        }</h2>`
        registeredUsers()
    }
}

function loginPage(){
    window.location = "login.html"
}

function registerPage(){
    window.location = "register.html"
}

function register(){
    let re_name = document.getElementById("name").value
    let re_email = document.getElementById("email").value
    let re_password = document.getElementById("password").value

    if(localStorage.getItem("userDetails")){
    parselocaldata = JSON.parse(localStorage.getItem("userDetails"))
    }
    else{
        parselocaldata = []
    }
    parselocaldata.push({
        email:re_email,
        password:re_password,
        name:re_name,
    })
    localStorage.setItem("userDetails",JSON.stringify(parselocaldata))
}

function registeredUsers(){

    let parselocaldata = JSON.parse(localStorage.getItem("userDetails"))
    let htmldata="";
    for( let i=0; i<parselocaldata.length; i++){
        htmldata = htmldata + `<tr>
        <td>${parselocaldata[i].name}</td>
        <td>${parselocaldata[i].email}</td>
        <td> <button onclick="update('${parselocaldata[i].name}')" ></button>&#9998</td>
        <td><button onclick="del('${parselocaldata[i].name}')" ></button>&#128465</td>
        </tr>`
    }
    document.getElementById("table_list").innerHTML = htmldata
    localStorage.setItem("userDetails",JSON.stringify(parselocaldata))
}

function del(a){
    let data = JSON.parse(localStorage.getItem("userDetails"))
    let newdata = []
    for (i=0; i<data.length; i++){
        if(data[i].name!= a){
            newdata.push(data[i])
        }
    }
   localStorage.setItem("userDetails",JSON.stringify(newdata))
   registeredUsers()
}

function update(b){
    let data_edit = JSON.parse(localStorage.getItem("userDetails"))
    
    for (let i=0; i<data_edit.length; i++){
        if(data_edit[i].name == b){
            let edit_name = data_edit[i].name
            let edit_email = data_edit[i].email
            let edit_pass = data_edit[i].password

            let nameInput=prompt("Enter the updated name:",edit_name.innerHTML)
            let emailInput =prompt("Enter the updated email:",edit_email.innerHTML)
            let passInput =prompt("Enter the updated password:",edit_pass.innerHTML)

            let updatedData = []
            if(localStorage.getItem("userDetails")){
                updatedData = JSON.parse(localStorage.getItem("userDetails"))
            }
            updatedData.push({
                email:emailInput,
                password:passInput,
                name:nameInput
            })
            localStorage.setItem("userDetails",JSON.stringify(updatedData))
            del(b)
        }
    }
}
function secure(){
    if(localStorage.getItem("loggedIn")!="true"){
        window.location = "frontpage.html"
    }
}










