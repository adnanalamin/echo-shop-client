import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home";
import AllProduct from "../Pages/AllProduct/AllProduct";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <p>error</p>,
      children:[
        {
          path: '/',
          element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
          path: '/allproduct',
          element: <AllProduct></AllProduct>
        }
      ]
    },
  ]);

  export default router;