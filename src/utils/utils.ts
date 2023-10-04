import NewsTypes from "../model/newsTypes";
import newsTypes from "../model/newsTypes";

export const getType = (type: string):  NewsTypes  => {
    switch (type) {
        case 'NEWS':
            return NewsTypes.NEWS;
        case 'EVENT':
            return newsTypes.EVENT;
        case 'COURSE':
            return newsTypes.COURSE;
        default:
            return NewsTypes.NEWS;
    }
}