// const firebaseConfig = {
//     apiKey: "AIzaSyAilVqUu7R53ZuhYk1T1QkJLpwI8PSd-ks",
//     authDomain: "registerform-b8e0e.firebaseapp.com",
//     databaseURL: "https://registerform-b8e0e-default-rtdb.firebaseio.com",
//     projectId: "registerform-b8e0e",
//     storageBucket: "registerform-b8e0e.appspot.com",
//     messagingSenderId: "794971548286",
//     appId: "1:794971548286:web:8e5baf67d0d8da190d062f"
//   };

// firebase.initializeApp(firebaseConfig);

// var db = firebase.database();
// var dataRef = db.ref("registeredUsers");

// function register(){
//     console.log('register function called');
//     let reg_name=document.getElementById("name").value
//     let reg_email=document.getElementById("email").value
//     let reg_password=document.getElementById("password").value

//     let reg_data = {
//             name : reg_name,
//             email : reg_email,
//             password : reg_password,
//     }

//     dataRef.once('value')
//         .then(function(snapshot) {
//             let data = snapshot.val();
//             console.log(data);
//             if(data){
//                 data.push(reg_data);
//                 db.ref(`registeredUsers`).set(data);
//             }
//             else{
//                 db.ref(`registeredUsers/${0}`).set(reg_data);
//             }
//         })
// }

const firebaseConfig = {
    apiKey: "AIzaSyAilVqUu7R53ZuhYk1T1QkJLpwI8PSd-ks",
    authDomain: "registerform-b8e0e.firebaseapp.com",
    databaseURL: "https://registerform-b8e0e-default-rtdb.firebaseio.com",
    projectId: "registerform-b8e0e",
    storageBucket: "registerform-b8e0e.appspot.com",
    messagingSenderId: "794971548286",
    appId: "1:794971548286:web:8e5baf67d0d8da190d062f"
  };

firebase.initializeApp(firebaseConfig);

var db = firebase.database();

var dataRef = db.ref("registeredUsers");

function register(){
    console.log('register function called');
    let reg_name=document.getElementById("name").value
    let reg_email=document.getElementById("email").value
    let reg_password=document.getElementById("password").value

    let reg_data = {
            name : reg_name,
            email : reg_email,
            password : reg_password,
    }

    dataRef.once('value')
        .then(function(snapshot) {
            let data = snapshot.val();
            console.log(data);
            if(data){
                data.push(reg_data);
                db.ref('registeredUsers').set(data);
            }
            else{
                db.ref(`registeredUsers/${0}`).set(reg_data);
            }
        })
}
