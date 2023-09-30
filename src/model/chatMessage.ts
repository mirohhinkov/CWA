import User from "./user";

class ChatMessage {
    public constructor(
        private _fromUser: User,
        private _message: string,
        private _timestamp: number = Date.now(),
    ) {}


    get fromUser(): User {
        return this._fromUser;
    }

    get message(): string {
        return this._message;
    }

    get timestamp(): number {
        return this._timestamp;
    }
}