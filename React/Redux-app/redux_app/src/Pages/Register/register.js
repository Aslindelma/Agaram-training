// import { useState } from "react"
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux"
import { updateLoginSuccess } from "../../Reducer/userSlice"
import { useNavigate } from "react-router-dom"
import { setRegData } from "../../Reducer/userSlice"

function Register(){
    const regData = useSelector((state)=>state.user.register)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // let [regData,setRegData] = useState({
    //     name : '',
    //     email : '',
    //     password : '',
    //     aadhar : '',
    //     address : '',
    //     phone : '',
    //     city : '',
    //     area : '',
    //     pin : '',
    // })

    const register=()=>{
        axios({
            method:'POST',
            url:'http://agaram.academy/api/action.php',
            Data:{
                "request":"create_candidate",
                "name":regData.name,
                "email":regData.email,
                "password":regData.password,
                "aadhar":regData.aadhar,
                "address":regData.address,
                "phone":regData.phone,
                "city":regData.city,
                "area":regData.area,
                "pin":regData.pin
            }
        }).then(function(response){
            console.log(response.config.Data)
            // dispatch((updateLoginSuccess(response.config.Data)))
            navigate("/login")
        });
    }
    return(
        <>
        <form>
            <label>Name: </label>
            <input onKeyUp={(e)=>dispatch(setRegData({...regData,name:e.target.value}))}></input>
            <br></br>
            <label>Email: </label>
            <input onKeyUp={(e)=>dispatch(setRegData({...regData,email:e.target.value}))}></input>
            <br></br>
            <label>Password: </label>
            <input onKeyUp={(e)=>dispatch(setRegData({...regData,password:e.target.value}))}></input>
            <br></br>
            <label>Aadhar: </label>
            <input onKeyUp={(e)=>dispatch(setRegData({...regData,aadhar:e.target.value}))}></input>
            <br></br>
            <label>Address: </label>
            <input onKeyUp={(e)=>dispatch(setRegData({...regData,address:e.target.value}))}></input>
            <br></br>
            <label>Phone: </label>
            <input onKeyUp={(e)=>dispatch(setRegData({...regData,phone:e.target.value}))}></input>
            <br></br>
            <label>City: </label>
            <input onKeyUp={(e)=>dispatch(setRegData({...regData,city:e.target.value}))}></input>
            <br></br>
            <label>Area: </label>
            <input onKeyUp={(e)=>dispatch(setRegData({...regData,area:e.target.value}))}></input>
            <br></br>
            <label>Pin: </label>
            <input onKeyUp={(e)=>dispatch(setRegData({...regData,pin:e.target.value}))}></input>
            <br></br>
            <button type="button" onClick={()=>register()}>Submit</button>
        </form>
        </>
    )
}
export default Register