function create(){
    let reg_name = $('#name').val()
    let reg_email = $('#email').val()
    let reg_password = $('#password').val()
    let reg_aadhar = $('#aadhar').val()
    let reg_address = $('#address').val()
    let reg_phone = $('#phone').val()
    let reg_city = $('#city').val()
    let reg_area = $('#area').val()
    let reg_pin = $('#pin').val()
    $.ajax({
        type:"post",
        url:"http://agaram.academy/api/action.php",
        data:{
            "request":"create_candidate",
            "name":reg_name,
            "email":reg_email,
            "password":reg_password,
            "aadhar":reg_aadhar,
            "address":reg_address,
            "phone":reg_phone,
            "city":reg_city,
            "area":reg_area,
            "pin":reg_pin,
        },
        success: function(response){
            console.log(response)
            
        },
        error: function(error){
            console.log(error)
        }
    });
}
function getdetail(){
    $.ajax({
        type:"get",
        url:"http://agaram.academy/api/action.php",
        data:{
            "request":"getAllMembers",
        },
        success:function(response){
            let element = JSON.parse(response)
            console.log(element)
            let ele = ""
            for(i=0;i<element.data.length;i++){
                ele = ele + `<tr>
                <td>${element.data[i].id}</td>
                <td>${element.data[i].name}</td>
                <td>${element.data[i].email}</td>
                <td>${element.data[i].password}</td>
                <td>${element.data[i].aadhar}</td>
                <td>${element.data[i].address}</td>
                <td>${element.data[i].phone}</td>
                <td>${element.data[i].city}</td>
                <td>${element.data[i].area}</td>
                <td>${element.data[i].pin}</td>
                </tr>`
            }
            $('#table_data').html(ele)

        },
        error:function(error){
            console.log(error)
        },
    });
}

function login(){
    let loginemail = $('#logemail').val()
    let loginpassword = $('#logpassword').val()
    $.ajax({
        type:"post",
        url:"http://agaram.academy/api/action.php",
        data:{
            "request":"candidate_login",
            "email":loginemail,
            "password":loginpassword,
        },
        success:function(response){
            console.log(response)
            window.location = "list.html"
        },
        error:function(error){
            console.log(error)
        },
    });
}
// function display_details(){
//     $.ajax({
//         type:"",
//         url:"",
//         data:{},
//         success:function(response){
//             console.log(response)
//         },
//         error:function(error){
//             console.log(error)
//         },
//     });
// }