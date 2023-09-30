import React, {useEffect} from "react";
import {Header} from "../parts/Header";
import {SplitScreen} from "../SplitScreen";
import {Chat} from "../chat/Chat";
import {CareerContainer} from "../career/CareerContainer";

const Career: React.FC<{context: any}> = ({context}) => {
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