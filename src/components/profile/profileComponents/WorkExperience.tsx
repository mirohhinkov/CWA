import React, {useState} from 'react';
import {IContext} from "../../../model/types/IContext";
import {SingleJobExperience} from "./SingleJobExperience";
import User from "../../../model/user";

export const WorkExperience:  React.FC<{ context: IContext }> =
    ({ context}) => {
        const experience = context.user.experience.map(el=> (
            <SingleJobExperience title={el.jobTitle} description={el.jobDescription} />
        ))
        const {user} = context;
        const [fields, setFields] = useState({
            jobTitle: '',
            jobDescription: ''
        })
        const changeHandler = (event: any) => {
            const field = event.target.name;
            setFields((currentState: any) => {
                const newState = {...currentState};
                newState[field] = event.target.value;
                return newState
            })
        }
    return (
        <section id="work-experience" className="frame">
            <h3>My Work Experience</h3>
            {experience}
            <h4>Add New Work Experience</h4>
            <label><span>New job title</span>
                <input name="jobTitle" onChange={changeHandler} value={fields.jobTitle} />
            </label>
            <label>New job description
                <input name="jobDescription" onChange={changeHandler} value={fields.jobDescription} /><br />
            </label>
        </section>
    )
};

