import React, {useEffect} from "react";
import {Header} from "../parts/Header";
import {SplitScreen} from "../SplitScreen";
import {NewsContainer} from "../news/NewsContainer";
import {Chat} from "../chat/Chat";
import {IContext} from "../../model/types/IContext";

const News: React.FC<{context: IContext}> = ({context}) => {
    useEffect(() => {
        context.setActiveMenu('news');
    }, []);
    return (
        <>
            <Header context={context} />
            <SplitScreen left={<NewsContainer context={context} />} right={<Chat />} lWeight={'70%'} rWeight={'30%'} />
        </>
    )
}

export default News;