import React from "react";
import News from "../../model/news";



const NewsShort:React.FC<{newsDetails: News}> = ({newsDetails}) => {

    return (
        <article className="item-box">
            <div className="image-container">
                <img src={newsDetails.imgFileName} alt={newsDetails.imgAlt} />
                <div className="avatar">{newsDetails.type}</div>
            </div>
            <h3>{newsDetails.title}</h3>
            <p>{newsDetails.description}</p>
        </article>
    )
}

export default NewsShort;