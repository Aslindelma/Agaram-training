import {useState} from 'react';
import AddTodo from './form';
import {Link} from "react-router-dom";
import Header from '../Header';

function Todo(props){
    let [todo,setTodo] = useState(["apple","orange","mango"])
    return(
        <>
        {props.isLogged?<h1>welcome {props.isLogged.email}</h1>:"login first"}
        <Header/>
        <table>
            <tr>
                <th>Order</th>
                <th>Items</th>
                <th>Delete</th>
            </tr>
            {todo.map((t,i)=>(
                <tr>
                    <td>{i+1}</td>
                    <td>{t}</td>
                    <td><button type="button">x</button></td>
                </tr>
            ))}
        </table>
        
        <AddTodo setTodo={setTodo} todos={todo}/>
        </>

    )
}
export default Todo;