import { useEffect } from "react"
import { useParams,useNavigate } from "react-router-dom"
import axios from "axios"

import { useDispatch, useSelector } from "react-redux"
import { setAllUser,isLoaderActive } from "../Reducer/userSlice"
import Userlist from './Components/userlist'

function Users(){
    
    const user = useSelector((state)=>state.user.setusers)
    const loader = useSelector((state)=>state.user.loadersuccess)
    const {userid} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    useEffect(()=>{
        
        // if(localStorage.getItem("login")=="false"){
        //     navigate("/login")
        // }
        getUserDetails()
    },[userid])

    const getUserDetails = ()=>{
        dispatch(isLoaderActive(true))
        axios.get(`http://agaram.academy/api/action.php?request=getMemberDetail&id=${userid}`).then((res)=>{
        let userdatas = res.data.data
        console.log(userdatas)
        
        dispatch(setAllUser(userdatas))
        dispatch(isLoaderActive(false))
        })
    }

    return(
        <>
        <h2>User Page</h2>
        {loader==true?<img src="https://img.freepik.com/premium-vector/processing-icon-circular-loader-loading-progress-indicator-isolated-white-background_543062-380.jpg?w=20" ></img>:<h3>Welcome{user.name}<br></br>{JSON.stringify(user)}</h3>}
        {/* <table border="1">
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                
            </tr>
            <tbody>
                <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                </tr>
            </tbody>
        </table> */}
        <Userlist isDeleteVisible={true}/>
        </>
    )
}
export default Users