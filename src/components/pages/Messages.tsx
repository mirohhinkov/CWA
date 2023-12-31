import React, {useEffect} from "react";
import {Header} from "../parts/Header";
import {SplitScreen} from "../SplitScreen";
import {Chat} from "../chat/Chat";
import {MessagesContainer} from "../messages/MessagesContainer";
import {IContext} from "../../model/types/IContext";
import {useNavigate} from "react-router-dom";

const Messages: React.FC<{context: IContext}> = ({context}) => {
    const navigate = useNavigate();
    if (context.user == null) navigate('/news');
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