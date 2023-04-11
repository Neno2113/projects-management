import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { SignUpView, HomeView, UsersView } from "../views";
import { LoginPage } from "../auth/page/LoginPage";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";




export const router = createBrowserRouter([
    {
      path: "/",
      element:<PrivateRoute>
                <App />
              </PrivateRoute>, 
      children: [
        { path: '/', element:  <HomeView />},
        { path: '/user-register', element: <SignUpView />},
        { path: '/users', element: <UsersView />},
      ],
    },
    {
      path:'/auth/login',
      element: <PublicRoute> 
                <LoginPage /> 
              </PublicRoute>,
    }
]);