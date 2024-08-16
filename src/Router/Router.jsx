import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <p>error</p>,
      children:[
        {
            path: '/login',
            element: <Login></Login>
        }
      ]
    },
  ]);

  export default router;