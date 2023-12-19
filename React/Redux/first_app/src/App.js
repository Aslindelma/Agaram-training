// import logo from './logo.svg';
import './App.css';

import Login from './Pages/Login/index';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

import store from './store'
import { Provider } from 'react-redux'
import Home from './home';
import User from './user/userpage'
import 'bootstrap/dist/css/bootstrap.css';


function App() {

  const router = createBrowserRouter([
    {
    path:'/',
    element: <Login />
  },
  {
    path:'/homepage',
    element: <Home />
  },
  {
    path:'/userpage',
    element:<User/>
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
