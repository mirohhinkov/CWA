export default interface RowNews {
    title: string;
    description: string;
    imgFileName: string;
    imgAlt: string;
    type: 'NEWS' | 'EVENT' |'COURSE';
    eventDate?: Date;
    tags: string[];
}