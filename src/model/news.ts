import NewsTypes from "./newsTypes";

class News {

    public constructor(
        private _id:string,
        private _title: string,
        private _description: string,
        private _imgFileName: string,
        private _imgAlt: string,
        private _type: NewsTypes
        ) {}

    get id(): string {
        return this._id;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }


    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get type(): NewsTypes {
        return this._type;
    }

    set type(value: NewsTypes) {
        this._type = value;
    }


    get imgFileName(): string {
        return this._imgFileName;
    }

    set imgFileName(value: string) {
        this._imgFileName = value;
    }

    get imgAlt(): string {
        return this._imgAlt;
    }

    set imgAlt(value: string) {
        this._imgAlt = value;
    }
}

export default News;