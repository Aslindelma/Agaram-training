function register(){
    let reg_name = document.getElementById("rName").value
    let reg_email = document.getElementById("rEmail").value
    let reg_password = document.getElementById("rPassword").value
    // let detail = [{
    //     email:reg_email,
    //     name:reg_name,
    //     password:reg_password
    // }]

    if(localStorage.getItem("userDetails")){
    let detail = JSON.parse(localStorage.getItem("userDetails"))
    }
    else{
        detail = []
    }
    detail.push({
        email:reg_email,
        name:reg_name,
        password:reg_password
    })
    localStorage.setItem("userDetails",JSON.stringify(detail))
    // localStorage.getItem(JSON.parse("userDetails"))
}

function login(){
    let email = document.getElementById("lEmail").value
    let password = document.getElementById("lPassword").value

    let l_detail = JSON.parse(localStorage.getItem("userDetails"))
    for(let i=0; i<l_detail.length; i++){
        if(l_detail[i].email==email && l_detail[i].password==password){
            alert("success")

            document.getElementById("loginPage").style.display="none"
            document.getElementById("homePage").style.display="block"
            document.getElementById("welcome").innerHTML=`welcome${l_detail[i].name}`
            localStorage.setItem("loggedIn",true)
            localStorage.setItem("loggedName",l_detail[i].name)
        }
    }
}
