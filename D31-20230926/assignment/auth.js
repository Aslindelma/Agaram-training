const firebaseConfig = {
    apiKey: "AIzaSyAilVqUu7R53ZuhYk1T1QkJLpwI8PSd-ks",
    authDomain: "registerform-b8e0e.firebaseapp.com",
    databaseURL: "https://registerform-b8e0e-default-rtdb.firebaseio.com",
    projectId: "registerform-b8e0e",
    storageBucket: "registerform-b8e0e.appspot.com",
    messagingSenderId: "794971548286",
    appId: "1:794971548286:web:8e5baf67d0d8da190d062f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.database()
var dataRef = db.ref("registeredusers")

var auth = firebase.auth();
console.log(auth)

function userlogin() {

    let user_email = document.getElementById("Email").value
    let user_password = document.getElementById("Password").value

    auth.signInWithEmailAndPassword(user_email, user_password)
        .then((userCredential) => {
    
            alert("login sucessfully")
            console.log(userCredential)
            window.location = "home.html"
    
    })
    .catch((error) => {
        console.log(error.code);
        console.log(error.message);
    });
    
}


function logout() {
    localStorage.removeItem("loggedin")
    window.location = "login.html"
}

function checklogin() {
    // window.location = "home.html"
    if (localStorage.getItem("loggedin")) {

        u_name = localStorage.getItem("logname")
        document.getElementById("welcome").innerHTML = `<h2>welcome
        ${u_name
            }</h2>`
        displayUsers()
    }
}

function loginPage() {
    window.location = "login.html"
}

function registerPage() {
    window.location = "register.html"
}


function register() {
    
    let re_name = document.getElementById("regname").value
    let re_email = document.getElementById("regemail").value
    let re_password = document.getElementById("regpassword").value

    auth.createUserWithEmailAndPassword(re_email, re_password)
        .then((userCredential) => {
            alert("registered successfully")
            console.log(userCredential)

        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message);

        });

}

// function displayUsers() {
//     dataRef.once('value')
//         .then(function (snapshot) {
//             let data = snapshot.val();
//             console.log(data);
//             let htmldata = " "
//             for (let i = 0; i < data.length; i++) {
//                 htmldata = htmldata + `<tr>
//                 <td>${data[i].name}</td>
//                 <td>${data[i].email}</td>
//                 <td><button onclick="update('${data[i].name}')" > &#9998 </button></td>
//                 <td><button onclick="del('${data[i].name}')" > &#128465 </button></td>
//                 </tr>`
//             }
//             document.getElementById("table_list").innerHTML = htmldata

//         })
// }

// function del(a) {
//     dataRef.once('value')
//         .then(function (snapshot) {
//             let data = snapshot.val();
//             // console.log(data);
//             let newdata = []
//             for (i = 0; i < data.length; i++) {
//                 if (data[i].name != a) {
//                     newdata.push(data[i])
//                 }
//             }
//             db.ref('registeredusers').set(newdata)
//             displayUsers()
//         })


// }

// function update(b) {
//     dataRef.once('value')
//         .then(function (snapshot) {
//             let data = snapshot.val();


//             for (let i = 0; i < data.length; i++) {
//                 if (data[i].name == b) {
//                     let edit_name = data[i].name
//                     let edit_email = data[i].email
//                     let edit_pass = data[i].password

//                     let nameInput = prompt("Enter the updated name:", edit_name.innerHTML)
//                     let emailInput = prompt("Enter the updated email:", edit_email.innerHTML)
//                     let passInput = prompt("Enter the updated password:", edit_pass.innerHTML)

//                     let updatedData = []
//                     if (data) {
//                         updatedData = data
//                     }
//                     updatedData.push({
//                         email: emailInput,
//                         password: passInput,
//                         name: nameInput
//                     })
//                     db.ref("registeredusers").set(updatedData)
//                     del(b)
//                 }
//             }
//         })
// }
// function secure() {
//     if (!localStorage.getItem("loggedin")) {
//         window.location = "frontpage.html"
//     }
// }










