import { appFirestore } from "../firebase/config";

import INewsDao from "./iNewsDao";
import News from "../model/news";
import RowNews from "../model/rowNews";
import {getType} from "../utils/utils";

export default class NewsDao implements INewsDao {
    getAllNews(setNewsList:React.Dispatch<React.SetStateAction<News[]>>): void {
        appFirestore.collection('newsAndEvents')
            .get().then((snapshot) => {
            if (!snapshot.empty) {
                const news: News[] = [];
                snapshot.docs.forEach(el => {
                    const data = el.data() as RowNews;
                    const type = getType(data.type);
                    const n = new News(
                        el.id,
                        data.title,
                        data.description,
                        `img/${data.imgFileName}`,
                        data.imgAlt,
                        type,
                        data.tags
                    )

                    if (data.eventDate)
                        n.eventDate = data.eventDate;

                    news.push(n);
                });
                setNewsList(news);
            }
        } )
    }

    getFilteredNews(filter: string,
                    setNewsList:React.Dispatch<React.SetStateAction<News[]>>): void {
        setNewsList([]);
    }

}