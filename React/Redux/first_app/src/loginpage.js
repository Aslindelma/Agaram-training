import {useState} from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Login(){
    const navigate = useNavigate();

    let [loginData,setLoginData] = useState({
        email:"delma@gmail.com",
        password:12345
    })

    const checklogin=()=>{
        axios({
            method:'post',
            url:'http://agaram.academy/api/action.php',
            data:{
                request:"candidate_login",
                email:"jegan",
                password:1234567890
            }
        }).then(function(response){
            console.log(response)
        });
        
    }
    return(
        <>
        <label>Email</label>
        <input type="text"></input>
        <label>Password</label>
        <input type="text"></input>
        <button type="button" >submit</button>

        </>
    )
}
// export default Login