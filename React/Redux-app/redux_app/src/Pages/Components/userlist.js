import { useEffect } from "react"
import axios from 'axios'
import { useNavigate,Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setUserid,setSingleUser } from "../../Reducer/userSlice"


function Userlist(props){
    
    // const guser = useSelector((state)=>state.user.userid)
    const user = useSelector((state)=>state.user.singleuser)
    const navigate=useNavigate()
    const dispatch = useDispatch()
    // let[userData,setUserData] = useState([])

    const logout=()=>{
        dispatch(setUserid(0))
        localStorage.setItem("login",false)
        navigate("/login")
    
    }
    
    useEffect(()=>{
        
        getData()
        // axios({
        //     method:'post',
        //     url:'http://agaram.academy/api/action.php?request=getAllMembers',
            
        // }).then(function(response){
        //     console.log(response.data.data)
        //     setUserData(response.data.data)
            
        //     navigate("/home")
        // }); 
    },[])

    const getData = ()=>{
        // if(localStorage.getItem("login")=="true"){
        axios({
            method:'GET',
            url:'http://agaram.academy/api/action.php?request=getAllMembers',
            
        }).then(function(response){
            console.log(response.data.data)
            dispatch(setSingleUser(response.data.data))
            
            
        //    navigate("/home")
        });  
    // }
    // else{
    //     navigate("/login")
    // }
    }

    const delUser = (id)=>{
        // alert(1)
        axios.get(`http://agaram.academy/api/action.php?request=removeMember&id=${id}`).then((res)=>{
            console.log(res)
            getData()

        })
    }

    const guestuserlogin = (id)=>{
        
        if(localStorage.getItem("login")=="true"){
            navigate(`/user/${id}`)
        }
        else{
            dispatch(setUserid(id))
            navigate("/login")
        }
    }

    return(
        <>
        {JSON.stringify(props)}
        
        <table border="1">
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>View</th>
                {props.isDeleteVisible?<th>Delete</th>:null}
            </tr>
            <tbody>
                {user.map((user)=>{
                    return<tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        {/* <td><Link to={`/user/${user.id}`}>view</Link></td> */}
                        <td><button type="button" onClick={()=>guestuserlogin(user.id)}>view</button></td>
                        {props.isDeleteVisible?<td><button type="button" onClick={()=>delUser(user.id)}>delete</button></td>:null}
                    </tr>
                })}
            </tbody>
        </table>
        
        {localStorage.getItem("login")=="true"?<button type="button" onClick={()=>logout()}>Logout</button>:null}
        </>
    )
}
export default Userlist