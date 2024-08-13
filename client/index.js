import react from 'react' 
import ReactDom from 'react-dom/client'
import { RouterProvider,createBrowserRouter } from "react-router-dom";

const root=ReactDom.createRoot(document.getElementById('root'))
const router=createBrowserRouter([{
    path: '/',
    element: <Home />
},
{
    path: '*',
    element: <h1>404 Page not found</h1>
}])
root.render(<RouterProvider router={router}/>)