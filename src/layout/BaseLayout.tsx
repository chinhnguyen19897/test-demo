import Header from "./Header.tsx";
import {ReactNode} from "react";
import FooterLayout from "./Footer.tsx";
import Sidebar from "../components/Sidebar.tsx";
import LoginModal from "../components/LoginModal.tsx";

type Props = {
    children?: ReactNode
}

const BaseLayout = ({children}: Props) => {


    return (
        <>
            <main>
                <Header/>
                {children}
                <LoginModal/>
                <Sidebar/>
                <FooterLayout/>
            </main>
        </>
    );
};

export default BaseLayout;
