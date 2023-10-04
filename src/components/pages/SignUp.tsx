import React from "react";
import {Header} from "../parts/Header";
import {SplitScreen} from "../SplitScreen";
import {Chat} from "../chat/Chat";
import {SignUpContainer} from "../login/SignUpContainer";

const SignUp: React.FC<{context: any}> = ({context}) => {

    return (
        <>
            <Header context={context} />
            <SplitScreen left={<SignUpContainer context={context}/>} right={<Chat />} lWeight={'70%'} rWeight={'30%'} />
        </>
    )
}

export default SignUp;