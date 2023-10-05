import React, {useState} from 'react';
import {IContext} from "../../../model/types/IContext";

export const ProfileDetails:React.FC<{ context: IContext }> =
    ({ context }) => {
        const { user } = context;
        const [fields, setFields] = useState({
            startingYear: user.startingYear,
            courseName: user.courseName,
            myGoals: user.myGoals
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
        <section className="frame">
            <h3>Details</h3>
            <label><span>My Course</span>
                <input name="courseName" onChange={changeHandler} value={fields.courseName}/>
            </label>
            <label><span>My Starting Year</span>
                <input
                    type="number"
                    min="2020"
                    max="2023"
                    name="startingYear"
                    onChange={changeHandler}
                    value={fields.startingYear}/>
            </label>
            <label>My Goals
                <input name="myGoals" onChange={changeHandler} value={fields.myGoals}/>
            </label>
        </section>
    )}
