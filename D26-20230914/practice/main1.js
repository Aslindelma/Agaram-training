var my_resume={
    name:"Aslin Delma.M",
    e_mail:"maslindelma@gmail.com",
    mobile_no:"6380151220",
    soft_skills:["Willingness to learn","time management"],
    hard_skills:["MS Office","typing"],
    objective:"work for the organization",
    educational_qualification:[{
        level:"M.E",
        institution:"Bethlahem Institute of Engineering",
        place:"Karungal",
        passed_out_year:2022,
        percentage:85},
        {level:"B.E",
        institution:"Jeppiaar Srr Engineering College",
        place:"Chennai",
        passed_out_year:2019,
        percentage:75},
        {level:"HSC",
        institution:"A.P.J.M Matric Hr.Sec School",
        place:"Soosaipuram",
        passed_out_year:2015,
        percentage:87.5},
        {level:"SSLC",
        institution:"A.P.J.M Matric Hr.Sec School",
        Place:"Soosaipuram",
        passed_out_year:2013,
        percentage:93.6}],
    projects:[{project_name:"Accessible Melanoma Detection Using Smart Phones And Mobile Image Analysis",
                 year:2019,
                 technology:"neural network"},
                {project_name:"An Automated Tongue Image Segmentation For Diseases Diagnosis in Human Body",
                 year:2022,
                 technology:"k means clustering"}],
    experience:[{company_name:"Capestart",
                   role:"project trainee",
                   experience:1.5},
                   {company_name:"Amazon",
                   role:"Team leader",
                   experience:2}],
    hobbies:["Stitching clothes","Drawing","gardening","playing chess"],
    personal_details:{
                fathers_name:"M.Mathias",
                fathers_occupation:"Mason",
                languages_known:["Tamil","English"],
                date_of_birth:"04-12-1997",
                gender:"Female",
                martial_status:"Single",
                address:{
                     door_no:"1-105C",
                     street:"Vadakkuvilai",
                     place:"Devicode",
                     district:"Kanyakumari",
                     pincode:"629178"
                     }},
    declaration:"the above mentioned details are correct"}

// function my_detail(my_qual){
//     for (var i=0; i < my_qual.length; i++){
//         console.log(i+1,my_qual[i].level)
//     }
// }
// my_detail(my_resume.educational_qualification)

function my_detail(my_qual){
    for (var i = my_qual.length-1; i >= 0; i--){
        console.log(my_qual[i].level)
    }
}
my_detail(my_resume.educational_qualification)

// localStorage.setItem("name","Agaram");

// sessionStorage.setItem("name","Agaram");


// localStorage.getItem("name");
// console.log(localStorage.getItem("name"))

var x=localStorage.getItem("name");
console.log(x)

localStorage.setItem("name",true);
var x=localStorage.getItem("name");
console.log(typeof(x))
console.log(x)

var list=["a","b","c"];
var stringlist = JSON.stringify(list);
localStorage.setItem("array",stringlist);

var list=["a","b","c"];
var stringlist = JSON.stringify(list);
localStorage.setItem("array",stringlist);
var list_1=localStorage.getItem("array")
var clist = JSON.parse(list_1)
console.log(clist[2])


