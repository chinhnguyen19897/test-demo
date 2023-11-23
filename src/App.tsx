import {HashRouter} from "react-router-dom";
import BaseLayout from "./layout/BaseLayout.tsx";
import {Routes} from './routes.tsx'
import {ProductDataContext, useProductContext} from "./context/ProductContext.tsx";
import {AuthContext, useAuthContext} from "./context/AuthContext.tsx";
import {AppDataContext, useAppContext} from "./context/AppContext.tsx";

function App() {
    const values = useProductContext()
    const dataAuth = useAuthContext()
    const data = useAppContext()
    return (
        <>
            <HashRouter>
                <AuthContext.Provider value={dataAuth}>
                    <ProductDataContext.Provider value={values}>
                        <AppDataContext.Provider value={data}>
                            <BaseLayout>
                                <Routes/>
                            </BaseLayout>
                        </AppDataContext.Provider>
                    </ProductDataContext.Provider>
                </AuthContext.Provider>
            </HashRouter>
        </>
    )
}

export default App
