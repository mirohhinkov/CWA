import React from "react";
import News from "../../model/news";
import NewsShort from "./NewsShort";

const NewsList:React.FC<{ newsL: News[] }> = ({ newsL }) => {
    const list = newsL.map(n => (<NewsShort key={n.id} newsDetails={n} />));
    return (
        <>
            {list}
        </>
    )
}

export default NewsList;