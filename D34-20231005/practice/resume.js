let resumeDetails = {};
let each_tmp = {};

function parseData(ele, p_key) {
    if (p_key) {
        if (resumeDetails[p_key]) {
            resumeDetails[p_key] = { ...resumeDetails[p_key] }
        }
        else {
            resumeDetails[p_key] = {}
        }
        resumeDetails[p_key][ele.name] = ele.value
        // console.log(resumeDetails)
    }
    else {
        resumeDetails[ele.name] = ele.value
        // console.log(resumeDetails)
    }
    display()
}

function handleMulData(p_key, ele_id, para) {
    if (!resumeDetails[p_key]) {
        resumeDetails[p_key] = []
    }


    let element = document.getElementById(ele_id)

    if (element.value == "") {
        alert("Enter detail")
    }
    else {
        resumeDetails[p_key].push(element.value)
    }

    element.value = ""
    displayskill(p_key, para)


    display()
}
function dele(p_key, d_data, para) {
    let data = resumeDetails[p_key];
    let newdata = []
    for (let i = 0; i < data.length; i++) {
        if (data[i] != d_data) {
            newdata.push(data[i])
        }
    }
    resumeDetails[p_key] = newdata
    console.log(newdata)
    displayskill(p_key, para)
    display()
}
function displayskill(p_key, para) {
    let data =resumeDetails[p_key];
    let ele = "";
    for (let i = 0; i < data.length; i++) {
        ele = ele + `<p>${data[i]}</p><span class="btn btn-danger">
        
        <span type="button" onclick="dele('${p_key}','${data[i]}','${para}')">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
              </svg>
        </span>
        </span>`
    }
    document.getElementById(para).innerHTML = ele
}
function handleMulData2(obj) {
    each_tmp[obj.name] = obj.value;
    // console.log(each_tmp)
}
function display() {
    document.getElementById("display_data").innerHTML = JSON.stringify(resumeDetails, undefined, 2);
}
function handleMulData1(p_key) {
    if (!resumeDetails[p_key]) {
        resumeDetails[p_key] = []
    }

    resumeDetails[p_key].push(each_tmp)
    // console.log(each_tmp)
    displaymularray(resumeDetails[p_key],p_key)
    // console.log(resumeDetails[p_key])
    // console.log(p_key)
    let each = Object.keys(each_tmp)
    // console.log(keys)
    for(let i=0;i<each.length;i++){
        console.log(each[i])
        // document.getElementById(each[i]).value=""
    }
    
    each_tmp = {}
    display()
}

function displaymularray(p_key,p_data){
    
    console.log(p_key)
    
    // let details=p_key
    // console.log(p_key)
    let tab_data=""
    for (let i=0;i<p_key.length;i++){
        let table_data = ""
        for (let key in p_key[i]){
            // console.log(p_key[i])
            table_data = table_data + `<td>${p_key[i][key]}</td>`
            // console.log(p_key[i][key])
        }
        tab_data = tab_data + `<tr>`+table_data+`<td><button type="button" onclick="tableDel('${[i]}','${p_data}')">&times;</button></td>`+`</tr>`
        // console.log(p_key[i])
    }
    document.getElementById(p_data).innerHTML = tab_data
    // console.log(tab_data)
}
function tableDel(index,p_data){
    // console.log(index)
    let data = resumeDetails[p_data]
    // console.log(data)
    let add_data = []
    for(let i=0;i<data.length;i++){
        if( i != index){
            // console.log(data[i])
            // add_data.push(data[i])

        }
        
    }
    resumeDetails[p_data] = add_data
    displaymularray(resumeDetails[p_data],p_data)
    // console.log(add_data)
    display()
}

function create(){
    $.ajax({
        type:"post",
        url:"http://agaram.academy/api/action.php",
        data:{
            request:"create_resume",
            user:"aslindelma",
            resume:resumeDetails    
        },
        success:function(response){
            let element = JSON.parse(response)
            console.log(element)
            window.location = "list.html"
            
        },
        error:function(error){
            console.log(error)
        }
    });
}
function getresume(){
    $.ajax({
        type:"get",
        url:"http://agaram.academy/api/action.php",
        data:{
            request:"get_user_resume",
            user:"aslindelma",
            
        },
        success:function(response){
            let element = JSON.parse(response)
            console.log(element)
            let ele = ""
            for(i=0;i<element.data.length;i++){
                ele = ele + `<tr>
                <td>${element.data[i].id}</td>
                <td>${element.data[i].user}</td>
                <td><button type="button" onclick="del('${element.data[i].id}')">Delete</button></td>
                <td><a href="single.html?id=${element.data[i].id}">link</a></td>
                </tr>`
            }
            $('#tabledata').html(ele)
            // document.getElementById("tabledata").innerHTML = ele
        },
        error:function(error){
            console.log(error)
        }
    });
}
function del(id){
    $.ajax({
        type:"get",
        url:"http://agaram.academy/api/action.php",
        data:{
            request:"delete_user_resume",
            user:"aslindelma",
            id
        },
        success:function(response){
            let element = JSON.parse(response)
            console.log(element)
            getresume()
        },
        error:function(error){
            console.log(error)
        }
    });
}
function show_resume(a){
    $.ajax({
        type:"get",
        url:"http://agaram.academy/api/action.php",
        data:{
            request:"get_resume_by_id",
            user:"aslindelma",
            id:a
        },
        success:function(response){
            let element = JSON.parse(response)
            // console.log(element)
            let detail = element.data
            // console.log(detail)
            let user_detail = JSON.parse(detail.data)
            // console.log(user_detail)
            // console.log(user_detail.name)
            $('#name').html(user_detail.name)
            $('#email').html(user_detail.email)
            $('#mobile_no').html(user_detail.mobile)
            $('#objective').html(user_detail.objective)
            $('#declaration').html(user_detail.declaration)

            let skillList = user_detail.skills
            // console.log(skillList)
            let skill = ""
            for(i=0;i<skillList.length;i++){
                skill = skill + `<ul>${skillList[i]}</ul>`
            }
            $('#skills').html(skill)

            let languageList = user_detail.Languages
            // console.log(languageList)
            let lan = ""
            for(i=0;i<languageList.length;i++){
                lan = lan + `<p>${languageList[i]}</p>`
            }
            $('#languages_known').html(lan)

            let per_detail = user_detail.personaldetail
            // console.log(per_detail)
            $('#father_name').html(per_detail.father_name)
            $('#father_occupation').html(per_detail.father_occupation)
            $('#mother_name').html(per_detail.mother_name)
            $('#dob').html(per_detail.dob)
            $('#gender').html(per_detail.gender)

            let edu_details = user_detail.education
            // console.log(edu_details)
            let edu = ""
            for(i=0;i<edu_details.length;i++){
                edu = edu + `<tr>
                <td>${edu_details[i].ins_name}</td>
                <td>${edu_details[i].ins_level}</td>
                <td>${edu_details[i].ins_year}</td>
                <td>${edu_details[i].ins_percentage}</td></tr>`
            }
            $('#edu_table').html(edu)
        },
        error:function(error){
            console.log(error)
        }
    });
}
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};
function download() {
    alert('ok')
const page = document.getElementById('resume');
var opt = {
    margin: 1,
    filename: 'Demopdf.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
};
// Choose the element that our invoice is rendered in.
html2pdf().set(opt). from (page).save();
}



