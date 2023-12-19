import { useState } from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux"
import { updateLoginSuccess } from "../../Reducers/userSlice";

function Login(){

    const count = useSelector ((state)=>state.counter.value)

    const name = useSelector ((state)=>state.user.loginSuccessData)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    let [loginData,setLoginData] = useState({
        email:"delma@gmail.com",
        password:12345,
        token: "qwertyuiop"
    })

    const checklogin= async ()=>{
        let response = await axios.post('https://jsonplaceholder.typicode.com/posts',loginData)
        dispatch(updateLoginSuccess(response))

        localStorage.setItem("token",response.data.token)
        console.log(response.data)
        navigate('/homepage')
        
        
        
    }
    return(
        <>
        {JSON.stringify(loginData)}
        <form>
        <label>Email:</label>
        <input type="text" defaultValue={loginData.email} onKeyUp={(e)=>setLoginData({
            ...loginData,
            email:e.target.value})}></input>
        <label>Password:</label>
        <input type="text" defaultValue={loginData.password}onKeyUp={(e)=>setLoginData({
            ...loginData,
            password:e.target.value
        })}></input>
        <button type="button" onClick={()=>checklogin()}>Submit</button>
        </form>
        
        </>
    )
}
export default Login