import React, {useEffect} from "react";
import {Header} from "../parts/Header";
import {SplitScreen} from "../SplitScreen";
import {NewsContainer} from "../news/NewsContainer";
import {Chat} from "../chat/Chat";

const News: React.FC<{context: any}> = ({context}) => {
    useEffect(() => {
        context.setActiveMenu('news');
    }, []);
    return (
        <>
            <Header context={context} />
            <SplitScreen left={<NewsContainer />} right={<Chat />} lWeight={'70%'} rWeight={'30%'} />
        </>
    )
}

export default News;