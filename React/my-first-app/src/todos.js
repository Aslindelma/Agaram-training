import {useState} from 'react';


function Todo(){
    let [todo,setTodo]=useState(["a","b","c","d"])
    let [input,setInput] = useState("")
    const del=(s)=>{
        let delTodo=todo.filter((f)=>f!=s)
        setTodo(delTodo)
    }
    return(
        <>
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
                    <td><button type="button" onClick={()=>del(t)}>x</button></td>
                </tr>
            ))}
        </table>
        <input type="text" onKeyUp={(e)=>setInput(e.target.value)} />
        <button type="button" onClick={()=>setTodo([...todo,input])}>Add</button>
        </>

    )
}
export default Todo;