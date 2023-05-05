import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/login/login";
import Register from "../Pages/Register/Register";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Main from "../Layout/Main";
import RecipieDetails from "../Pages/RecipeDetails/RecipieDetails";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute"
import About from "../Pages/About/About";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
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
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:':id',
                element:<PrivateRoute>
                    <RecipieDetails></RecipieDetails>
                </PrivateRoute>
            }
        ]
    }
])