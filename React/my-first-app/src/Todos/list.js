import {useState} from 'react';
import AddTodo from './form';
import {Link} from "react-router-dom";
import Header from '../Header';
import axios from 'axios';

function User(){
    let [users,setUsers] = useState(["delma","sangee","shali"])
    const getApiData = ()=>{
        // axios({
        //     method: 'get',
        //     url: 'https://jsonplaceholder.typicode.com/posts'
        //   })
        //     .then(function (response) {
        //       console.log(response.data)
        //     });
        axios({
            method:'post',
            url:'https://jsonplaceholder.typicode.com/posts',
            data:{
                "userId": 1,
                "id": 1,
                "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
              },
        })
        .then(function(response){
            console.log(response)
        });
    }

    return(
        <>
        <Header/>
        <table>
            <tr>
                <th>Order</th>
                <th>Items</th>
                <th>Delete</th>
            </tr>
            {users.map((t,i)=>(
                <tr>
                    <td>{i+1}</td>
                    <td>{t}</td>
                    <td><button type="button">x</button></td>
                </tr>
            ))}
        </table>
        
        <AddTodo setTodo={setUsers} todos={users}/>   
        
        <button type="button" onClick={getApiData}>Get data</button>
         </>

    )
}
export default User;