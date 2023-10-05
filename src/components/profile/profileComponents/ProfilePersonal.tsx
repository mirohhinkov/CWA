import {IContext} from "../../../model/types/IContext";
import React, {useState} from "react";


export const ProfilePersonal: React.FC<{ context: IContext }> =
    ({ context}) => {
    const { user } = context;
    const [fields, setFields] = useState({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        city: user.city
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
            <h3>Personal Information</h3>

            <label><span>First Name</span>
            <input name="firstName" onChange={changeHandler} value={fields.firstName} />
            </label>

            <label htmlFor="last-name"><span>Surname</span>
                <input name="lastName" onChange={changeHandler} value={fields.lastName} />
            </label>

            <label><span>Email</span>
                <input type="email" name="profile-email" value={fields.email} disabled />
            </label>

            <label><span>Phone</span>
                <input name="phoneNumber" onChange={changeHandler} value={fields.phoneNumber} />
            </label>

            <label><span>Location</span>
                <input name="city" onChange={changeHandler} value={fields.city} />
            </label>
        </section>
    )
}