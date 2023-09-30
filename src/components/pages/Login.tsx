import React, {useEffect} from "react";
import {Header} from "../parts/Header";
import {SplitScreen} from "../SplitScreen";
import {Chat} from "../chat/Chat";
import {LoginContainer} from "../login/LoginContainer";

const Login: React.FC<{context: any}> = ({context}) => {
    useEffect(() => {
        if (context.setActiveMenu !== 'login') {
            context.setActiveMenu('login');
            context.setLogin(!context.login);
        }

    }, []);
    return (
        <>
            <Header context={context} />
            <SplitScreen left={<LoginContainer />} right={<Chat />} lWeight={'70%'} rWeight={'30%'} />
        </>
    )
}

export default Login;