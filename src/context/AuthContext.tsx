import {createContext, useState} from "react";

export interface IAuthData {
    username: string,
    password: string,
    accessToken: string
}

export interface IDataUser {
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    gender: string,
    image: string,
}


type TAuthContext = {
    auth: IAuthData,
    setAuth: (auth: IAuthData) => void
    user: IDataUser,
    setUser: (user: IDataUser) => void
    persist: unknown,
    setPersist: (data: boolean) => void
} | null


export const AuthContext = createContext<TAuthContext>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
    const [auth, setAuth] = useState({});
    const [user, setUser] = useState({});
    const [persist, setPersist] = useState(JSON.parse(localStorage.getItem("persist") || '{}') || false);

    return {
        auth, setAuth, persist, setPersist, user, setUser
    }
};

