import React from "react";
import User from "../user";

export interface IContext {
    activeMenu: string,
    setActiveMenu: React.Dispatch<React.SetStateAction<string>>,
    filter: {
        news: string,
        posts: string,
        jobs: string,
        connections: string,
    },
    setFilter: React.Dispatch<React.SetStateAction<any>>,
    user: User,
    setUser: React.Dispatch<React.SetStateAction<User>>
}