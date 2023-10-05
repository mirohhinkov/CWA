import React, {useEffect} from "react";
import {Header} from "../parts/Header";
import {SplitScreen} from "../SplitScreen";
import {Chat} from "../chat/Chat";
import {ConnectionsContainer} from "../connections/ConnectionsContainer";
import {IContext} from "../../model/types/IContext";
import {useNavigate} from "react-router-dom";

const Connections: React.FC<{context: IContext}> = ({context}) => {
    const navigate = useNavigate();
    if (context.user == null) navigate('/news');
    useEffect(() => {
        context.setActiveMenu('connections');
    }, [context]);
    return (
        <>
            <Header context={context} />
            <SplitScreen left={<ConnectionsContainer />} right={<Chat />} lWeight={'70%'} rWeight={'30%'} />
        </>
    )
}

export default Connections;