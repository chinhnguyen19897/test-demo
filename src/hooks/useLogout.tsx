import {AuthContext, IAuthData} from "../context/AuthContext.tsx";
import {useContext} from "react";

const useLogout = () => {
    const authApi = useContext(AuthContext);
    return async () => {
        authApi?.setAuth({} as IAuthData);
        authApi?.setPersist(false);
    };
};

export default useLogout;
