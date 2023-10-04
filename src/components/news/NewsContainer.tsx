import React, {useEffect, useState} from "react";

import News from "../../model/news";
import {LeftPaneHeader} from "../styling/LeftPaneHeader";
import NewsList from "./NewsList";
import NewsDao from "../../dao/newsDao";

export const NewsContainer:React.FC<{context: any}> = ({context}) => {
    const newsDao = new NewsDao()
    const [newsList, setNewsList] = useState<News[]>([]);
    useEffect(() => {
        if (context.filter.news) {
            newsDao.getFilteredNews(context.filter.news, setNewsList);
        } else {
            newsDao.getAllNews(setNewsList);
        }

    }, [context.filter.news]);

    return (
    <>
        <LeftPaneHeader>
            News
        </LeftPaneHeader>
        <div className="items-container container">
            <NewsList newsL={newsList}/>
        </div>
    </>)
};