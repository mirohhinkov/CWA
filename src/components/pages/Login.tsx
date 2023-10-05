import React, {useEffect} from "react";
import {Header} from "../parts/Header";
import {SplitScreen} from "../SplitScreen";
import {Chat} from "../chat/Chat";
import {LoginContainer} from "../login/LoginContainer";
import {LogOutContainer} from "../login/LogOutContainer";
import {IContext} from "../../model/types/IContext";

const Login: React.FC<{context: IContext}> = ({context}) => {
    useEffect(() => {
        if (!context.user) {
            context.setActiveMenu('login');
        }

    }, []);
    return (
        <>
            <Header context={context} />
            {!context.user && <SplitScreen left={<LoginContainer context={context} />} right={<Chat/>} lWeight={'70%'} rWeight={'30%'}/>}
            {context.user && <SplitScreen left={<LogOutContainer context={context} />} right={<Chat/>} lWeight={'70%'} rWeight={'30%'}/>}

        </>
    )
}

export default Login;