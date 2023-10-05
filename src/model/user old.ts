class User {

    private readonly _admin = false;
    private _imgAlt = 'profile picture';


    public constructor(
        private _id: string,
        private _firstName: string,
        private _lastName: string,
        private _email: string,
        private _altEmail: string,
        private _imgUrl: string,
        private _phoneNumber: string,
        private _city: string,
        private _experience: {
            jobTitle: string,
            jobDescription: string
        }[],
        private _courseName: string,
        private _startingYear: number,
        private _myGoals: string,
        private _connections: string[]
    ) {}


    get id(): string {
        return this._id;
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._imgAlt = `${value} ${this._lastName} profile picture`;
        this._firstName = value;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._imgAlt = `${this._firstName} ${value} profile picture`;
        this._lastName = value;
    }


    get imgUrl(): string {
        return this._imgUrl;
    }

    set imgUrl(value: string) {
        this._imgUrl = value;
    }


    get imgAlt(): string {
        return this._imgAlt;
    }


    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }


    get altEmail(): string {
        return this._altEmail;
    }

    get phoneNumber(): string {
        return this._phoneNumber;
    }

    set phoneNumber(value: string) {
        this._phoneNumber = value;
    }

    get city(): string {
        return this._city;
    }

    set city(value: string) {
        this._city = value;
    }

    get isAdmin(): boolean {
        return this._admin;
    }


    get experience(): { jobTitle: string; jobDescription: string }[] {
        return this._experience;
    }


    set experience(value: { jobTitle: string; jobDescription: string }[]) {
        this._experience = value;
    }

    addWorkExperience(value: { jobTitle: string; jobDescription: string }) {
        this._experience.push(value);
    }


    get courseName(): string {
        return this._courseName;
    }

    set courseName(value: string) {
        this._courseName = value;
    }

    get startingYear(): number {
        return this._startingYear;
    }

    set startingYear(value: number) {
        this._startingYear = value;
    }

    get myGoals(): string {
        return this._myGoals;
    }

    set myGoals(value: string) {
        this._myGoals = value;
    }

    get connections(): string[] {
        return this._connections;
    }

    set connections(value: string[]) {
        this._connections = value;
    }

    addConnection(connectionId: string) {
        this._connections.push(connectionId);
    }

    deleteConnection(connectionId: string) {
        if (this._connections.includes(connectionId)) {
            this._connections.splice(this._connections.indexOf(connectionId), 1);
            return true;
        } else {
            return false;
        }
    }
}

export default User;