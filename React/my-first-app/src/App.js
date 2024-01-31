// import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import { useState } from 'react';
import Todo from './Todos/todo';
import User from './Todos/list';
import Login from './Login';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {useEffect} from 'react';
import Submit from './miniProject';
import Rechart from './recharts';

function App() {
  let [isLogged,setIsLogged] = useState({
    log:false,
    email:"delma@gmail.com"
  });
  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Todo isLogged={isLogged} setIsLogged={setIsLogged}/>,
    },
    {
      path: "/login",
      element: <Login isLogged={isLogged} setIsLogged={setIsLogged}/>,
    },
    {
      path: "/home",
      element: <User/>,
    },
    {
      path: "/rechart",
      element: <Rechart/>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}/>
      {/* <Submit/> */}
        
      
    </div>
  );
}

export default App;
