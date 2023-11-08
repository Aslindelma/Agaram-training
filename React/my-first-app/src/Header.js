import Subheader from './Subheader'
import { Link } from "react-router-dom";

function Header(props){
    return (

    // <Subheader subname={props.name}/>
    
    <nav>
      <ul>
        <li>
          <Link to={`/`}>Todo</Link>
        </li>
        <li>
          <Link to={`/login`}>Login</Link>
        </li>
        <li>
          <Link to={`/home`}>User</Link>
        </li>
      </ul>
    </nav>
  

    )
}
export default Header;