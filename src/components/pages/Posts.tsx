import React, {useEffect} from "react";
import {Header} from "../parts/Header";
import {SplitScreen} from "../SplitScreen";
import {Chat} from "../chat/Chat";
import {PostsContainer} from "../posts/PostsContainer";

const Posts: React.FC<{context: any}> = ({context}) => {
    useEffect(() => {
        context.setActiveMenu('posts');
    }, []);
    return (
        <>
            <Header context={context} />
            <SplitScreen left={<PostsContainer />} right={<Chat />} lWeight={'70%'} rWeight={'30%'} />
        </>
    )
}

export default Posts;