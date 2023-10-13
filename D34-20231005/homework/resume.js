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
        console.log(resumeDetails)
    }
    else {
        resumeDetails[ele.name] = ele.value
        console.log(resumeDetails)
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
function del(p_key, d_data, para) {
    let data = [...resumeDetails[p_key]];
    let newdata = []
    for (let i = 0; i < data.length; i++) {
        if (data[i] != d_data) {
            newdata.push(data[i])
        }
    }
    resumeDetails[p_key] = newdata
    displayskill(p_key, para)
    display()
}
function displayskill(p_key, para) {
    let data = [...resumeDetails[p_key]];
    let ele = "";
    for (let i = 0; i < data.length; i++) {
        ele = ele + `<p>${data[i]}</p><span class="btn btn-danger">
        
        <span type="button" onclick="del('${p_key}','${data[i]}','${para}')">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
              </svg>
        </span>
        </span>`
    }
    document.getElementById(para).innerHTML = ele
}
function handleMulArrayData(edu) {
    each_tmp[edu.name] = edu.value;
}
function display() {
    document.getElementById("display_data").innerHTML = JSON.stringify(resumeDetails, undefined, 2);
}
function handleMulData1(p_key) {
    if (!resumeDetails[p_key]) {
        resumeDetails[p_key] = []
    }

    resumeDetails[p_key].push(each_tmp)
    let keys = Object.keys(each_tmp)
    console.log(keys)
    for(let i=0;i<keys.length;i++){
        console.log(keys[i])
        document.getElementById(keys[i]).value=""
    }
    displayedu(each_tmp)
    each_tmp = {}
    
    display()
}

function displayedu(each_tmp){
    let edu_data=""
    console.log(each_tmp)
    for (let i=0;i<each_tmp.length;i++){
        console.log(each_tmp[0][i])
    }
}