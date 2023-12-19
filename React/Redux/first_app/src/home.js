import { useSelector , useDispatch} from "react-redux"
import { useEffect } from "react"
import { resetLoginSuccess, updateLoginSuccess } from "./Reducers/userSlice"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.css';

function Home(){
    const logindetail = useSelector((state)=>state.user.loginSuccessData)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(()=>{
        if(!logindetail.status){
            if(localStorage.getItem("token")){
                let response = axios.get('https://a4c2c060-004f-4864-85c4-38de5107fda7.mock.pstmn.io/mock',{token:localStorage.getItem("token")}).then(function(res){
                
                // alert(JSON.stringify(res))
                if(res.status==201){
                    dispatch(updateLoginSuccess(res))
                  }
                    else{
                    navigate('/')
                  } 
                })
            }
            else{
                navigate('/')
            }}
    },[])
        // if(logindetail.status == 201){
        //     alert("authenticate user")
        // }
        // else{
        //     alert("Hacker")
        // }
    
    const logout=()=>{
        dispatch(resetLoginSuccess({}))
        navigate("/")
    }

    return(
        <>
        <Header/>
        
        <h1>welcome,{logindetail.status ==201?logindetail.data.email:"guest user"}</h1>

        
        {JSON.stringify(logindetail.data)}
        <div className="d-flex align-items-center justify-content-center text-center min-vh-100">
            <button type="button"  onClick={()=>logout()}>Logout</button>
        </div>
        
        </>
    )
}
export default Home