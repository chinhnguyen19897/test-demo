import FormRequire from "./FormRequire.tsx";
import {AppDataContext} from "../context/AppContext.tsx";
import {useContext} from "react";


const SidebarSupport = () => {

    const dataApi = useContext(AppDataContext)


    return (
        <>
            <section id="sidebar"
                     className={
                         " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0" +
                         (dataApi?.isOpenSidebar
                             ? " transition-opacity opacity-100 translate-x-0  "
                             : " transition-all opacity-0 translate-x-full  ")
                     }>
                <div className={
                    " w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-200 duration-300 ease-in-out transition-all transform  " + (dataApi?.isOpenSidebar ? " translate-x-0 " : " translate-x-full ")}>
                    <div className="border-b-solid border-b p-5 flex items-center justify-between">
                        <h4 className="text-[18px] text-gray-800">Yêu cầu tư vấn</h4>
                        <div className="cursor-pointer" onClick={dataApi?.closeSidebar}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M18.5303 6.53033C18.8232 6.23744 18.8232 5.76256 18.5303 5.46967C18.2374 5.17678 17.7626 5.17678 17.4697 5.46967L12 10.9393L6.53033 5.46967C6.23744 5.17678 5.76256 5.17678 5.46967 5.46967C5.17678 5.76256 5.17678 6.23744 5.46967 6.53033L10.9393 12L5.46967 17.4697C5.17678 17.7626 5.17678 18.2374 5.46967 18.5303C5.76256 18.8232 6.23744 18.8232 6.53033 18.5303L12 13.0607L17.4697 18.5303C17.7626 18.8232 18.2374 18.8232 18.5303 18.5303C18.8232 18.2374 18.8232 17.7626 18.5303 17.4697L13.0607 12L18.5303 6.53033Z"
                                      fill="#667085"/>
                            </svg>
                        </div>

                    </div>
                    <div className="p-5">
                        <p className="text-[18px] font-medium text-gray-800">Thông tin khách hàng</p>
                    </div>
                    <FormRequire/>
                </div>
                <section
                    className=" w-screen h-full cursor-pointer "
                    onClick={dataApi?.closeSidebar}
                ></section>
            </section>
        </>
    );
};

export default SidebarSupport;
