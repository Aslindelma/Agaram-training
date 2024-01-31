import axios from 'axios';
function Submit(){

    let logincheck=()=>{

        axios({
            method: 'post',
            url: 'https://346ecf18-5094-4743-aa32-8c7c55e73246.mock.pstmn.io/newUsers',
            Data: {
                request: "Add New Users",
                name : "bhuvana",
                email : "bhuvana@gmail.com",
                password : "female",
                address : "acfsdff",
                phone: 989349,
                city: "Nagercoil",
                area: "kanyakumari",
                pin: 629302,
            }
        }).then(function(response){
            console.log(response);
        })
}

return(
    <>
    <button type='button' onClick={()=>logincheck()}>submit</button>
    </>
)
}
export default Submit;