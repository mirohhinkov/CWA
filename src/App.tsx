import React, {useState} from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import News from "./components/pages/News";
import Career from "./components/pages/Career";
import Messages from "./components/pages/Messages";
import Login from "./components/pages/Login";
import Posts from "./components/pages/Posts";


const App: React.FC = () => {
    const [login, setLogin] = useState(false);
    const [activeMenu, setActiveMenu] = useState('news')
    const context: any = {
        login,
        setLogin,
        activeMenu,
        setActiveMenu
    }

    const router = createBrowserRouter([
        {
            path: "/",
            element: <News context={context} />,
        },
        {
            path: "/news",
            element: <News context={context} />
        },
        {
            path: "/posts",
            element: <Posts context={context} />
        },
        {
            path: "/career",
            element: <Career context={context} />
        },
        {
            path: "/messages",
            element: <Messages context={context} />
        },
        {
            path: "/login",
            element: <Login context={context} />
        }
    ]);



    return <RouterProvider router={router} />
}

export default App;
