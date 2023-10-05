import React, {useEffect} from "react";
import {Header} from "../parts/Header";
import {SplitScreen} from "../SplitScreen";
import {Chat} from "../chat/Chat";
import {ProfileContainer} from "../profile/ProfileContainer";
import {Navigate} from 'react-router-dom';


const Profile: React.FC<{context: any}> = ({context}) => {

    useEffect(() => {
        context.setActiveMenu('profile');
    }, [context]);
    return (context.user ? (
        <>
            <Header context={context} />
            <SplitScreen left={<ProfileContainer context={context}/>} right={<Chat />} lWeight={'70%'} rWeight={'30%'} />
        </>
    ) : ((<Navigate replace to='/news' />))
    )
}

export default Profile;