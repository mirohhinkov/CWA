export default interface User {
    admin: boolean;
    imgAlt: string;
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    altEmail: string,
    imgUrl: string,
    phoneNumber: string,
    city: string,
    experience: {
        jobTitle: string,
        jobDescription: string
    }[],
    courseName: string,
    startingYear: number,
    myGoals: string,
    connections: string[]
}