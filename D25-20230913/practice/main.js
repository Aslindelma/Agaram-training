
var a="agaram";
console.log(typeof(a));
var b=5;
console.log(typeof(b));
var c=0.6;
console.log(typeof(c));
var d = true
console.log(typeof(d))

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


let days=["sunday","monday","tuesday"];
console.log(days);
console.log(days[0]);
console.log(days[3]);
console.log(days.length);
console.log(days[days.length-1])
days[2]="wednesday";
console.log(days)
days[3]="thursday"
console.log(days)
days.push("friday")
console.log(days)
days.pop()
console.log(days)

let week={
    f_day:"sunday",
    s_day:"monday",
}
console.log(week.s_day)
week.l_day="saturday"
console.log(week)
// week.pop();
// console.log(week)

// my_resume.educational_qualification[1].city="ngl";
// console.log(my_resume)

var name="delma";
function get_name(a){
    console.log(a);
}
get_name(name)

for(var i=0; i<5; i++){
    console.log(i)
}

for (var i=0; i>-10; i--){
    console.log(i)
}

let week_days=["sunday","monday","tuesday","wednesday"]
for (i=0; i<week_days.length; i++){
    console.log(i)
    console.log(week_days[i])
}

let detail=[{name:"delma",place:"karungal"},
            {name:"renisha",place:"marthandam"}]
for (var i=0; i<detail.length; i++){
    console.log(detail[i].name)
}

function my_detail(my_qual){
    for (var i=0; i < my_qual.length; i++){
        console.log(my_qual[i],my_qual.level)
    }
}
my_detail(my_resume.educational_qualification)