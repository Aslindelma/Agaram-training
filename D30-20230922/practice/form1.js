// let userDetails = [{
//     email: "aslin@gmail.com",
//     password: "12345",
//     name: "Aslin"
// },
// {
//     email: "delma@gmail.com",
//     password: "67890",
//     name: "Delma"
// }]

// var details = JSON.stringify(userDetails)
// localStorage.setItem("login", details)

// click login - go to login page
// called function registeredUsers() - to show registered users list table
function userlogin() {
    let login_email = document.getElementById("Email").value
    let login_password = document.getElementById("Password").value
    // alert(login_email)
    // alert(login_password)

    var u_detail = localStorage.getItem("userDetails")
    var con_detail = JSON.parse(u_detail)
    console.log(con_detail)

    for (var i = 0; i < con_detail.length; i++) {
        console.log(con_detail[i].email)
        if (con_detail[i].email == login_email && con_detail[i].password == login_password) {
            alert("success")

            
           
            localStorage.setItem("loggedIn", true)
            localStorage.setItem("loggedName", con_detail[i].name)
           
            window.location = "home.html"
        }
    }
}

// click logout - shows login page

function logout() {
    // removes loggedIn true in the local storage
    localStorage.removeItem("loggedIn") 
    window.location = "login.html"
}

// window shows logged user page (welcome xxx and registered list - table) until logged out, even it is refreshed or the window is closed
// called function registeredUsers() - to show registered users list table 
function checklogin() {
    if (localStorage.getItem("loggedIn")) {


        u_name = localStorage.getItem("loggedName")
        document.getElementById("welcome").innerHTML = `Welcome
        ${u_name
            }`
        registeredUsers()
    }
}

// click login button - go to login page

function loginPage() {
    window.location = "login.html"
}
// click register button - go to register
function registerPage() {
    window.location = "register.html"
}
// add new user details in local storage
function register() {
    let re_name = document.getElementById("name").value
    let re_email = document.getElementById("email").value
    let re_password = document.getElementById("password").value

    let parselocaldata = []
    if (localStorage.getItem("userDetails")) {
        parselocaldata = JSON.parse(localStorage.getItem("userDetails"))
    }

    parselocaldata.push({
        email: re_email,
        password: re_password,
        name: re_name
    })
    localStorage.setItem("userDetails", JSON.stringify(parselocaldata))
}
// add new users in table dynamically
function registeredUsers() {


    let parselocaldata = JSON.parse(localStorage.getItem("userDetails"))
    let htmldata = "";
    for (let i = 0; i < parselocaldata.length; i++) {
        htmldata = htmldata + `<tr>
        <td>${parselocaldata[i].name}</td>
        <td>${parselocaldata[i].email}</td>
        <td> <button onclick="update('${parselocaldata[i].name}')" ></button>&#9998</td>
        <td><button onclick="del('${parselocaldata[i].name}')" ></button>&#128465</td>
        </tr>`
    }
    document.getElementById("table_list").innerHTML = htmldata
    localStorage.setItem("userDetails", JSON.stringify(parselocaldata))
}
// click delete icon - deleted in table and local storage
// registeredUsers function - in registered list users detail deletes instantly(when clicked delete icon) without refreshing
function del(a) {
    // alert(a)
    let data = JSON.parse(localStorage.getItem("userDetails"))
    let newdata = []
    for (i = 0; i < data.length; i++) {
        if (data[i].name != a) {
            newdata.push(data[i])
        }
    }
    localStorage.setItem("userDetails", JSON.stringify(newdata))
    registeredUsers()
}
// click pencil icon - to edit users detail in table and local storage
// called del function for editing instantly (deletes old detail and updates new detail)
function update(b) {
    // alert(b)
    let data_edit = JSON.parse(localStorage.getItem("userDetails"))

    for (let i = 0; i < data_edit.length; i++) {
        if (data_edit[i].name == b) {
            let edit_name = data_edit[i].name
            let edit_email = data_edit[i].email
            let edit_pass = data_edit[i].password

            let nameInput = prompt("Enter the updated name:", edit_name.innerHTML)
            let emailInput = prompt("Enter the updated email:", edit_email.innerHTML)
            let passInput = prompt("Enter the updated password:", edit_pass.innerHTML)

            // edit_name.innerHTML = nameInput
            // edit_email.innerHTML = emailInput
            // edit_pass.innerHTML = passInput

            let updatedData = []
            if (localStorage.getItem("userDetails")) {
                updatedData = JSON.parse(localStorage.getItem("userDetails"))
            }
            updatedData.push({
                email: emailInput,
                password: passInput,
                name: nameInput
            })
            localStorage.setItem("userDetails", JSON.stringify(updatedData))
            del(b)
        }
    }
}
// if logged out, home page doesn't shown in the browser(secure home page)
function secure() {
    // or if(localStorage.getItem("loggedIn")!="true")
    if (!localStorage.getItem("loggedIn")) {
        window.location = "frontpage.html"
    }
}








