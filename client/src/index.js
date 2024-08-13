
import ReactDom from 'react-dom/client'
import { RouterProvider,createBrowserRouter } from "react-router-dom";
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import Signup from './views/Signup/Signup';

const root=ReactDom.createRoot(document.getElementById('root'))
const router=createBrowserRouter([{
    path: '/',
    element: <Home/>
},
{
    path: '/login',
    element:<Login/>
},
{
    path:'/signup',
    element:<Signup/>
},
{
    path: '*',
    element: <h1>404 Page not found</h1>
}])
root.render(<RouterProvider router={router}/>)