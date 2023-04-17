import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { HomeView, ProjectsFormView  } from "../projects/views";
import { LoginPage, SignUpView, UsersView } from "../auth/page";
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
        { path: '/user-register/:id?', element: <SignUpView />},
        { path: '/users', element: <UsersView />},
        { path: '/projects-register', element: <ProjectsFormView />},
      ],
    },
    {
      path:'/auth/login',
      element: <PublicRoute> 
                <LoginPage /> 
              </PublicRoute>,
    }
]);