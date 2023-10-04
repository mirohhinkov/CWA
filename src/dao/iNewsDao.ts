import News from "../model/news";

export default interface INewsDao {
    // return all news in the DataBase
     getAllNews: (setNewsList:React.Dispatch<React.SetStateAction<News[]>>) => void;

     // return news filtered by containing the filter in tags
     getFilteredNews: ( filter: string,
                        setNewsList:React.Dispatch<React.SetStateAction<News[]>> ) => void;
}