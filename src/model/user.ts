class User {

    private _userName: string;
    private _imgUrl: string;
    private readonly admin: boolean;

    public constructor(userName: string, imgUrl: string, admin: boolean = false) {
        this._userName = userName;
        this._imgUrl = imgUrl;
        this.admin = admin;
    }

    get userName(): string {
        return this._userName;
    }

    set userName(value: string) {
        this._userName = value;
    }

    get imgUrl(): string {
        return this._imgUrl;
    }

    set imgUrl(value: string) {
        this._imgUrl = value;
    }

    get isAdmin(): boolean {
        return this.admin;
    }
}

export default User;