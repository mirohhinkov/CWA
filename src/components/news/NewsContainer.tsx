import News from "../../model/news";
import NewsTypes from "../../model/newsTypes";
import {LeftPaneHeader} from "../styling/LeftPaneHeader";
import NewsList from "./NewsList";

const list:News[] = [
    new News(
        "news1",
        "Help to Grow -  a small business leader course",
        "Solent University is now welcoming applications for our next " +
        "Help To Grow programme for small business leaders.",
        "img/protonews1.jpg",
        "small business leader course image",
    NewsTypes.EVENT),
    new News(
        'new2',
        "Gearing up for Clearing",
        "Waiting for exam results can be nerve-wracking, there’s always " +
        "an element of uncertainty, and competition for university places " +
        "is fierce. But we're here to help anyone to need a Plan B.",
        "img/protonews2.jpg",
        "gearing up for clearing image",
        NewsTypes.NEWS),
    ];

export const NewsContainer = () => (
    <>
        <LeftPaneHeader>
            News
        </LeftPaneHeader>
        <div className="items-container container">
            <NewsList newsL={list} />
        </div>
    </>
);