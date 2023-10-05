import NewsTypes from "../model/types/newsTypes";
import firebase from "firebase/app";
import User from "../model/user";

export const getType = (type: string):  NewsTypes  => {

    if (['NEWS', 'EVENT', 'COURSE'].includes(type.trim().toUpperCase()))
        return type.toUpperCase() as NewsTypes;
    return NewsTypes.NEWS;

}

export const mapGoogleUserToUser = (googleUser: firebase.User): User => ({
    admin: false,
    imgAlt: 'profile picture',
    id: googleUser.uid,
    firstName: '',
    lastName: '',
    email: googleUser.email!,
    altEmail: googleUser.displayName ? googleUser.displayName : '',
    imgUrl: googleUser.photoURL ? googleUser.photoURL : '',
    phoneNumber: googleUser.phoneNumber ? googleUser.phoneNumber : '',
    city: '',
    experience: [],
    courseName: '',
    startingYear: new Date().getFullYear(),
    myGoals: '',
    connections: []
})


