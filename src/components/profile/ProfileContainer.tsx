import {LeftPaneHeader} from "../styling/LeftPaneHeader";
import React from "react";
import {ProfilePersonal} from "./profileComponents/ProfilePersonal";
import {IContext} from "../../model/types/IContext";
import {ProfileUpload} from "./profileComponents/ProfileUpload";
import {WorkExperience} from "./profileComponents/WorkExperience";
import {ProfileDetails} from "./profileComponents/ProfileDetails";
import {ProfileSave} from "./profileComponents/ProfileSave";
import {appFirestore} from "../../firebase/config";

export const ProfileContainer: React.FC<{context: IContext}> = ({context}) => {
    const submitHandler = async (event: any) => {
        event.preventDefault()
        const data = new FormData(event.target);
        console.log(data)
        // @ts-ignore
        for (const [key, value] of data.entries()) {
            if (key in context.user) {
                // @ts-ignore
                context.user[key] = value;
            } else {
                if (key === 'jobTitle' && value !== '') {
                    context.user.experience.push({jobTitle: data.get('jobTitle') as string,
                        jobDescription: data.get('jobDescription') as string})
                } else if (key === 'profile-picture') {
                    const file = data.get(key) as File;
                    context.user.imgUrl = file.name;
                } else {
                    console.log(key, value)
                }
            }
        }
        context.user.imgAlt = `${context.user.firstName} ${context.user.lastName} profile picture`.trim();
        // update firebase document
        try {
            const snapshot = await appFirestore
                .collection('users')
                .where('email', '==', context.user.email).get()
            await snapshot.docs[0].ref.update(context.user);
        } catch (err: any) {
            console.log(err.message)
        }
        // redirect to home page
    }

    return (
    <>
        <LeftPaneHeader>Profile</LeftPaneHeader>
        <div className="items-container">
            <form id="profile-form" onSubmit={submitHandler}>
                <ProfilePersonal
                    context={context}
                />
                <ProfileUpload />
                <WorkExperience
                    context={context}
                />
                <ProfileDetails
                    context={context}
                />
                <ProfileSave />
            </form>
        </div>
    </>
)};