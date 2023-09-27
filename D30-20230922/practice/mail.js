const firebaseConfig = {
    apiKey: "AIzaSyCLnVPNeQfrO6qHdYiICFEo7bvYiH4pqZ8",
    authDomain: "registrationform-64d2f.firebaseapp.com",
    databaseURL: "https://registrationform-64d2f-default-rtdb.firebaseio.com",
    projectId: "registrationform-64d2f",
    storageBucket: "registrationform-64d2f.appspot.com",
    messagingSenderId: "416916979300",
    appId: "1:416916979300:web:22a10a32a52ee3e35d2971"
};

firebase.initializeApp(firebaseConfig);

var registrationFormDB = firebase.database().ref("registrationForm");
document.getElementById("registrationForm").addEventListener("submit",submitForm);

function submitForm(e){
    e.preventDefault();

    var name = getElementVal("name");
    var email = getElementVal("email");
    var password = getElementVal("password");

    saveMessages(name,email,password);

    
}

const saveMessages = (name,email,password) => {
    var newRegistrationForm = registrationFormDB.push();

    new ContactForm.set({
        name : name,
        email : email,
        password : password,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).ariaValueMax;
};