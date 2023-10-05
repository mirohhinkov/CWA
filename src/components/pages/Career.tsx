import React, {useEffect} from "react";
import {Header} from "../parts/Header";
import {SplitScreen} from "../SplitScreen";
import {Chat} from "../chat/Chat";
import {CareerContainer} from "../career/CareerContainer";
import {IContext} from "../../model/types/IContext";

const Career: React.FC<{context: IContext}> = ({context}) => {
    useEffect(() => {
        context.setActiveMenu('career');
    }, []);
    return (
        <>
            <Header context={context} />
            <SplitScreen left={<CareerContainer />} right={<Chat />} lWeight={'70%'} rWeight={'30%'} />
        </>
    )
}

export default Career;