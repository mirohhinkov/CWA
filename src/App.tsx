import React, {useState} from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import News from "./components/pages/News";
import Career from "./components/pages/Career";
import Messages from "./components/pages/Messages";
import Login from "./components/pages/Login";
import Posts from "./components/pages/Posts";
import SignUp from "./components/pages/SignUp";
import Connections from "./components/pages/Connections";
import Profile from "./components/pages/Profile";
import {IContext} from "./model/types/IContext";


const App: React.FC = () => {
    const [activeMenu, setActiveMenu] = useState('news');
    const [filter, setFilter] = useState({
        news: '',
        posts: '',
        jobs: '',
        connections: '',
    })
    const [user, setUser] = useState<any>(null);
    const context: IContext = {
        activeMenu,
        setActiveMenu,
        filter,
        setFilter,
        user,
        setUser
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
        },
        {
            path: "/signup",
            element: <SignUp context={context} />
        },
        {
            path: "/connections",
            element: <Connections context={context} />
        },
        {
            path: "/profile",
            element: <Profile context={context} />
        }
    ]);

    return <RouterProvider router={router} />
}

export default App;
