import {useState} from 'react';

export default function AddTodo(props){
    let [input,setInput] = useState("")
    return(
        <>
        <input type="text" onKeyUp= {(e)=>setInput(e.target.value)}/>
        <button type="button" onClick={()=>props.setTodo([...props.todos,input])} >Add</button>
        </>
    )
}