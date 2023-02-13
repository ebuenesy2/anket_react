import { ThunkDispatch } from "redux-thunk";

export interface User {
    title: string;
    tablo: string;
    status: number;
    mesaj: string;
    userInfo?: any;
}


export interface UserState {
    data: User;
    loading: boolean;
    error:string;
}

export interface LoginForm {
    email: string;
    password: string;
}

interface LOGIN_START {
    type: "LOGIN_START";
}

interface LOGIN_SUCCESS {
    type: "LOGIN_SUCCESS";
    payload: User;
}

interface LOGIN_ERROR {
    type: "LOGIN_ERROR";
}

export type UserAction = 
 | LOGIN_START
 | LOGIN_SUCCESS
 | LOGIN_ERROR;

export type UserDispatch = ThunkDispatch<UserState, void, UserAction>;
