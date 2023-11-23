import {routesConfig} from './config/routes.ts'
import {useRoutes} from 'react-router-dom'
import {AccountManagement, Home} from './pages'
import {AuthContext} from "./context/AuthContext.tsx";
import Page403 from "./pages/403.tsx";
import Page505 from "./pages/500.tsx";
import {useContext} from "react";
import {isEmpty} from 'lodash';

export const Routes = () => {
    const authApi = useContext(AuthContext)
    return useRoutes([
        {
            path: routesConfig.home,
            element: <Home/>,
            errorElement: <Page505/>,

        },
        {
            path: routesConfig.account,
            element: authApi?.persist && !isEmpty(authApi?.auth) ? (
                <AccountManagement/>
            ) : (
                <Page403/>
            )
        }
    ])
}
