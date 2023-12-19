import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { updateLoginSuccess } from "../../Reducer/userSlice";


function Login(){
    const loginData = useSelector((state)=>state.user.loginsuccess)
    const registerData = useSelector((state)=>state.user.register)
    const id = useSelector((state)=>state.user.userid)
    const dispatch = useDispatch()
    
    const navigate = useNavigate()

    // let [loginData,setLoginData] = useState({
    //     email:"aslin@gmail.com",
    //     password:123
        
    // })

    useEffect(()=>{
        if(localStorage.getItem("login")=="true"){
            navigate("/home")
        }
    },[])

    const checklogin=()=>{
        axios({
            method:'post',
            url:`http://agaram.academy/api/action.php?request=candidate_login&email=${loginData.email}&password=${loginData.password}`,
            
        }).then(function(response){
            console.log(response.data.data)
            if(response.data.status == "success"){
                localStorage.setItem("login","true")
                if(id==0){
                    navigate("/home")
                }
                else{
                    navigate(`/user/${id}`)
                }
            }
            // dispatch(updateLoginSuccess(response.data.data))
            
            
        });
        // navigate('/home')
    }
    
    return(
        <>
        {JSON.stringify(loginData)}
        <form>
        <label>Email:</label>
        <input type="text" defaultValue={loginData.email} onKeyUp={(e)=>dispatch(updateLoginSuccess({
            ...loginData,
            email:e.target.value}))}></input>
        <label>Password:</label>
        <input type="text" defaultValue={loginData.password}onKeyUp={(e)=>dispatch(updateLoginSuccess({
            ...loginData,
            password:e.target.value
        }))}></input>
        <button type="button" onClick={()=>checklogin()}>Submit</button>
        </form>
        
        </>
    )
}
export default Login