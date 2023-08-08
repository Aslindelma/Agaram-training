#wrong

my_resume={
    "Name":"Aslin Delma.M",
    "E_mail":"maslindelma@gmail.com",
    "Mobile_no":"6380151220",
    "Soft_skills":["Willingness to learn","time management"],
    "Hard_skills":["MS Office","typing"],
    "Educational_Qualification":{
        "Degree":{
            "M.E":{
                "Institution":"Bethlahem Institute of Engineering",
                "Place":"Karungal",
                "Year_of_Passing":2022,
                "Percentage":85
                  },
            "B.E":{
                "Institution":"Jeppiaar Srr Engineering College",
                "Place":"Chennai",
                "Year_of_Passing":2019,
                "Percentage":75
                  }},
        "HSC":{
            "Institution":"A.P.J.M Matric Hr.Sec School",
            "Place":"Soosaipuram",
            "Year_of_Passing":2015,
            "Percentage":87.5
              },
        "SSLC":{
            "Institution":"A.P.J.M Matric Hr.Sec School",
            "Place":"Soosaipuram",
            "Year_of_Passing":2013,
            "Percentage":93.6
               }},
    "Projects":["Accessible Melanoma Detection Using Smart Phones And Mobile Image Analysis",
                "An Automated Tongue Image Segmentation For Diseases Diagnosis in Human Body"],
    "Experience":"Fresher",
    "Hobbies":["Stitching clothes","Drawing","gardening","playing chess"],
    "Personal_Details":{
                "Father's_Name":"M.Mathias",
                "Father's_Occupation":"Mason",
                "Languages_known":["Tamil","English"],
                "Date_of_Birth":"04-12-1997",
                "Gender":"Female",
                "Martial_Status":"Single",
                "Address":{
                     "Door_no":"1-105C",
                     "Street":"Vadakkuvilai",
                     "Place":"Devicode",
                     "District":"Kanyakumari",
                     "Pincode":"629178"
                     }}}
print(my_resume[0]["Educational_Qualification"]["Degree"]["B.E"],my_resume[0]["Educational_Qualification"]["HSC"])
print(my_resume[0]["Hobbies"][1])
print(my_resume[0]["Personal_Details"]["Address"]["District"])
print(my_resume[0]["Personal_Details"]["Languages_known"][0])