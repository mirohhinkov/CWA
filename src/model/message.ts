import User from "./user";

class Message {
    public constructor(
        private _fromUser: User,
        private _toUser: User,
        private _message: string,
        private _timestamp: number = Date.now(),
        private edited: boolean = false
    ) {}

    get fromUser(): User {
        return this._fromUser;
    }

    get toUser(): User {
        return this._toUser;
    }

    get message(): string {
        return this._message;
    }

    set message(value: string) {
        this._message = value;
    }

    get timestamp(): number {
        return this._timestamp;
    }

    public edit(editedMessage: string) {
        this.edited = true;
        this._message = editedMessage;
        this._timestamp = Date.now();
    }
}

export default Message;