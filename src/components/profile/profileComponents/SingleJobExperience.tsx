import React from 'react';

export const SingleJobExperience:React.FC<{title: string, description: string}> =
    ({title, description}) => (
        <>
            <h4>{title}</h4>
            <p>{description}</p>
        </>

);
