import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import { resetLoginSuccess } from "../Reducers/userSlice";

import 'bootstrap/dist/css/bootstrap.css';
import Header from "../Header";

function User(){
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const logout=()=>{
        dispatch(resetLoginSuccess({}))
        navigate("/")
    }

    return(
        <>
        <Header/>
        <h1>welcome to user page</h1>
        <div className="d-flex align-items-center justify-content-center text-center min-vh-100">
            <button type="button"  onClick={()=>logout()}>Logout</button>
        </div>
        </>
    )
}
export default User