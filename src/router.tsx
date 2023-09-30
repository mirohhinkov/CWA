import App from "./App";
import {createBrowserRouter} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
},
{
    path: "/news",
        element: <App />
},
{
    path: "/posts",
        element: <App  />
},
{
    path: "/career",
        element: <App />
},
{
    path: "/messages",
        element: <App />
},
{
    path: "/login",
        element: <App />
}
]);

export default router;