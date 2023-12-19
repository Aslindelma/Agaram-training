// import logo from './logo.svg';
import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

import Register from './Pages/Register/register'
import Login from './Pages/Login/login';
import store from './store'
import { Provider } from 'react-redux'
import Home from './Pages/home';
import Users from './Pages/users';


function App() {

  const router = createBrowserRouter([
    {
      path:"/home",
      element:<Home/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/",
    element:<Register/>
  },
  {
    path:"/user/:userid",
    element:<Users/>
  }
  ])
  return (
    <Provider store={store}>

    <div className="App">
      
      <RouterProvider router = {router}/>
    </div>
    </Provider>
  );
}

export default App;
