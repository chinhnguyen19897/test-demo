import {Breadcrumb} from 'flowbite-react';
import {MouseEvent, useContext, useState} from 'react';
import {AuthContext} from "../../context/AuthContext.tsx";
import useLogout from "../../hooks/useLogout.tsx";
import {routesConfig} from "../../config/routes.ts";
import {useNavigate} from "react-router-dom";

const AccountManagement = () => {
    const navigate = useNavigate()
    const [tab, setTab] = useState(0)
    const authApi = useContext(AuthContext)
    const handleClickTab = (e: MouseEvent<HTMLAnchorElement>, index: number) => {
        e.preventDefault()
        setTab(index)
    }
    const logout = useLogout()
    const handleLogout = async (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        await logout()
        navigate(routesConfig.home, {replace: true})
    }
    return (
        <section id="account" className="pt-[30px] mt-5 h-[84vh] bg-gray-100">
            <div className="container xl:max-w-[90vw] mx-auto px-10 relative">
                <Breadcrumb aria-label="Default breadcrumb example" className="mb-5">
                    <Breadcrumb.Item href="#">
                        Trang chủ
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="#"
                                     theme={{
                                         href: {
                                             on: "flex items-center text-sm font-medium text-orange-500"
                                         }
                                     }}
                    >Quản lý tài khoản</Breadcrumb.Item>
                </Breadcrumb>
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-3">
                        <div className="p-0 bg-white rounded-[8px] border-solid border-gray-200 border">
                            <div className="flex h-full flex-col justify-center">
                                <div className="border-b p-4">
                                    <h3 className="text-gray-800 text-[18px] font-medium">{
                                        authApi?.user.firstName ? authApi?.user.firstName + ' ' + authApi?.user.lastName : ''
                                    }</h3>
                                </div>
                                <div>
                                    <ul>
                                        <li className={"p-4 hover:bg-orange-100 hover:text-orange-500 transition duration-300 ease-in-out"}>
                                            <a href="#"
                                               className="w-full flex cursor-pointer text-gray-800 text-[18px] transition duration-300 ease-in-out hover:text-orange-500"
                                               onClick={(e) => handleClickTab(e, 0)}>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                          d="M9.25869 7.65022C9.25869 6.15905 10.4675 4.95022 11.9587 4.95022C13.4499 4.95022 14.6587 6.15905 14.6587 7.65022C14.6587 9.14139 13.4499 10.3502 11.9587 10.3502C10.4675 10.3502 9.25869 9.14139 9.25869 7.65022ZM11.9587 3.35022C9.58387 3.35022 7.65869 5.2754 7.65869 7.65022C7.65869 10.025 9.58387 11.9502 11.9587 11.9502C14.3335 11.9502 16.2587 10.025 16.2587 7.65022C16.2587 5.2754 14.3335 3.35022 11.9587 3.35022ZM9.36299 13.9498C8.19485 13.9498 7.07455 14.4131 6.24854 15.2378C5.42254 16.0625 4.9585 17.181 4.9585 18.3473V20.1421C4.9585 20.5882 5.32069 20.9498 5.76748 20.9498C6.21428 20.9498 6.57647 20.5882 6.57647 20.1421V18.3473C6.57647 17.6094 6.87005 16.9018 7.39263 16.3801C7.9152 15.8583 8.62396 15.5652 9.36299 15.5652H14.554C15.293 15.5652 16.0018 15.8583 16.5244 16.3801C17.0469 16.9018 17.3405 17.6094 17.3405 18.3473V20.1421C17.3405 20.5882 17.7027 20.9498 18.1495 20.9498C18.5963 20.9498 18.9585 20.5882 18.9585 20.1421V18.3473C18.9585 17.181 18.4945 16.0625 17.6684 15.2378C16.8424 14.4131 15.7221 13.9498 14.554 13.9498H9.36299Z"
                                                          fill="#667085"/>
                                                </svg>
                                                <span className="ml-2">
                                                    Thông tin tài khoản
                                                </span>
                                            </a>
                                        </li>
                                        <li className={"p-4 hover:bg-orange-100 hover:text-orange-500 transition duration-300 ease-in-out"}>
                                            <a href="#"
                                               className="w-full flex cursor-pointer text-gray-800 text-[18px] transition duration-300 ease-in-out hover:text-orange-500"
                                               onClick={(e) => handleClickTab(e, 1)}>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                          d="M6.59976 2.19995C5.9102 2.19995 5.24888 2.47387 4.76128 2.96147C4.27369 3.44906 3.99976 4.11038 3.99976 4.79995V19.2C3.99976 19.8895 4.27369 20.5508 4.76128 21.0384C5.24887 21.526 5.91019 21.8 6.59976 21.8H17.3997C18.0893 21.8 18.7506 21.526 19.2382 21.0384C19.7258 20.5508 19.9997 19.8895 19.9997 19.2V17.8C19.9997 17.3581 19.6416 17 19.1997 17C18.7579 17 18.3997 17.3581 18.3997 17.8V19.2C18.3997 19.4652 18.2944 19.7195 18.1068 19.9071C17.9193 20.0946 17.6649 20.2 17.3997 20.2H6.59976C6.33454 20.2 6.08019 20.0946 5.89265 19.9071C5.70512 19.7195 5.59976 19.4652 5.59976 19.2V4.79995C5.59976 4.53473 5.70512 4.28038 5.89265 4.09284C6.08019 3.9053 6.33454 3.79995 6.59976 3.79995H12.9997V8.39995C12.9997 8.61212 13.084 8.8156 13.234 8.96563C13.3841 9.11566 13.5876 9.19995 13.7997 9.19995H18.3997V14.2C18.3997 14.6418 18.7579 15 19.1997 15C19.6416 15 19.9997 14.6418 19.9997 14.2V8.39995C19.9997 8.18777 19.9154 7.98429 19.7654 7.83426L14.3654 2.43426C14.2154 2.28423 14.0119 2.19995 13.7997 2.19995H6.59976ZM17.2684 7.59995L14.5997 4.93132V7.59995H17.2684ZM8.39976 8.49995C7.95793 8.49995 7.59976 8.85812 7.59976 9.29995C7.59976 9.74178 7.95793 10.1 8.39976 10.1H10.1997C10.6416 10.1 10.9997 9.74178 10.9997 9.29995C10.9997 8.85812 10.6416 8.49995 10.1997 8.49995H8.39976ZM8.39976 12.1C7.95793 12.1 7.59976 12.4581 7.59976 12.9C7.59976 13.3418 7.95793 13.7 8.39976 13.7H15.5997C16.0416 13.7 16.3997 13.3418 16.3997 12.9C16.3997 12.4581 16.0416 12.1 15.5997 12.1H8.39976ZM8.39976 15.7C7.95793 15.7 7.59976 16.0581 7.59976 16.5C7.59976 16.9418 7.95793 17.3 8.39976 17.3H15.5997C16.0416 17.3 16.3997 16.9418 16.3997 16.5C16.3997 16.0581 16.0416 15.7 15.5997 15.7H8.39976Z"
                                                          fill="#667085"/>
                                                </svg>
                                                <span className="ml-2">
                                                Thông tin sản phẩm
                                                </span>
                                            </a>
                                        </li>
                                        <li className="p-4 hover:bg-orange-100 hover:text-orange-500 transition duration-300 ease-in-out">
                                            <a href="#"
                                               onClick={(e) => handleLogout(e)}
                                               className="w-full flex cursor-pointer text-gray-800 text-[18px] transition duration-300 ease-in-out hover:text-orange-500"
                                            >
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                          d="M4.99995 3.79995C4.68169 3.79995 4.37647 3.92638 4.15142 4.15142C3.92638 4.37647 3.79995 4.68169 3.79995 4.99995V19C3.79995 19.3182 3.92638 19.6234 4.15142 19.8485C4.37647 20.0735 4.68169 20.2 4.99995 20.2H8.99995C9.44178 20.2 9.79995 20.5581 9.79995 21C9.79995 21.4418 9.44178 21.7999 8.99995 21.7999H4.99995C4.25734 21.7999 3.54515 21.505 3.02005 20.9798C2.49495 20.4547 2.19995 19.7426 2.19995 19V4.99995C2.19995 4.25735 2.49495 3.54515 3.02005 3.02005C3.54515 2.49495 4.25735 2.19995 4.99995 2.19995H8.99995C9.44178 2.19995 9.79995 2.55812 9.79995 2.99995C9.79995 3.44178 9.44178 3.79995 8.99995 3.79995H4.99995ZM15.4343 6.43427C15.7467 6.12185 16.2532 6.12185 16.5656 6.43427L21.5656 11.4343C21.8781 11.7467 21.8781 12.2532 21.5656 12.5656L16.5656 17.5656C16.2532 17.8781 15.7467 17.8781 15.4343 17.5656C15.1218 17.2532 15.1218 16.7467 15.4343 16.4343L19.0686 12.8H8.99995C8.55812 12.8 8.19995 12.4418 8.19995 12C8.19995 11.5581 8.55812 11.2 8.99995 11.2H19.0686L15.4343 7.56564C15.1218 7.25322 15.1218 6.74669 15.4343 6.43427Z"
                                                          fill="#667085"/>
                                                </svg>

                                                <span className="ml-2">
                                                    Đăng xuất
                                               </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-9">
                        <div className="p-0 bg-white rounded-[8px] border-solid border-gray-200 border">
                            <div className="flex h-full flex-col justify-center">
                                <div className="border-b p-4">
                                    <h3 className="text-gray-800 text-[18px] font-medium">Thông tin chung</h3>
                                </div>
                                {
                                    tab === 0 ? (
                                        <div className="p-4">
                                            <div className="flex items-center my-2">
                                                <p className="text-gray-500 w-[150px]">Họ và tên:</p>
                                                <p className="text-gray-800 w-[200px] font-semibold">{authApi?.user.firstName ? authApi?.user.firstName + ' ' + authApi?.user.lastName : ''}</p>
                                            </div>
                                            <div className="flex items-center my-2">
                                                <p className="text-gray-500 w-[150px]">Số CMND/CCCD</p>
                                                <p className="text-gray-800 w-[200px] font-semibold">022090001234</p>
                                            </div>
                                            <div className="flex items-center my-2">
                                                <p className="text-gray-500 w-[150px]">Số điện thoại</p>
                                                <p className="text-gray-800 w-[200px] font-semibold">0912763488</p>
                                            </div>
                                        </div>) : (
                                        <div className="p-4">
                                            <div className="flex items-center my-2">
                                                <p className="text-gray-500 w-[150px]">Thông tin sản phẩm</p>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AccountManagement;
