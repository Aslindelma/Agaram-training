import { useEffect, useState } from "react"
// import axios from 'axios'
import { useNavigate} from "react-router-dom"
import Userlist from "./Components/userlist"


function Home(){
    const navigate=useNavigate()
    // let[userData,setUserData] = useState([])

    // const logout=()=>{
    //    localStorage.setItem("login",false)
    //     navigate("/login")
    
    // }
    
    useEffect(()=>{
        // getData()
    },[])

    // const getData = ()=>{
    //     if(localStorage.getItem("login")=="true"){
        // axios({
        //     method:'GET',
        //     url:'http://agaram.academy/api/action.php?request=getAllMembers',
            
        // }).then(function(response){
        //     console.log(response.data.data)
        //     setUserData(response.data.data)
        // //    navigate("/home")
        // });  
    // }else{
    //     navigate("/login")
    // }
    // }

    // const delUser = (id)=>{
    
    //     axios.get(`http://agaram.academy/api/action.php?request=removeMember&id=${id}`).then((res)=>{
    //         console.log(res)
    //         getData()

    //     })
    // }

    return(
        <>
        <h2>Welcome </h2>
        {/* <table>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>View</th>
                <th>Delete</th>
            </tr>
            <tbody>
                {userData.map((user)=>{
                    return<tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        <td><Link to={`/user/${user.id}`}>view</Link></td>
                        <td><button type="button" onClick={()=>delUser(user.id)}>delete</button></td>
                    </tr>
                })}
            </tbody>
        </table> */}
        {/* <button type="button" onClick={()=>logout()}>Logout</button> */}
        <Userlist />
        </>
    )
}
export default Home