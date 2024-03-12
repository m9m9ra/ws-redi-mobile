import {makeAutoObservable} from "mobx";

export class UserStore {
    public auth: boolean = false;

    constructor() {
        makeAutoObservable(this)
    }

    userAuth = () => {
        this.auth = true;
    }
}