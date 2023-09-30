import React, {useEffect} from "react";
import {Header} from "../parts/Header";
import {SplitScreen} from "../SplitScreen";
import {Chat} from "../chat/Chat";
import {MessagesContainer} from "../messages/MessagesContainer";

const Messages: React.FC<{context: any}> = ({context}) => {
    useEffect(() => {
        context.setActiveMenu('messages');
    }, []);
    return (
        <>
            <Header context={context} />
            <SplitScreen left={<MessagesContainer />} right={<Chat />} lWeight={'70%'} rWeight={'30%'} />
        </>
    )
}

export default Messages;