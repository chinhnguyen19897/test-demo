import {Fragment, useContext, useEffect, useState} from "react";
import axios from "axios";
import {Avatar, Button, Dropdown, Navbar} from "flowbite-react";
import {AppDataContext} from "../context/AppContext.tsx";
import {AuthContext} from "../context/AuthContext.tsx";
import {IMenu, INavBar} from "../types/data.ts";
import {routesConfig} from "../config/routes.ts";
import useLogout from "../hooks/useLogout.tsx";
import {useNavigate} from "react-router-dom";
import {customThemeDropdown} from "../config/themes/themes.ts";
import {get} from "lodash";


const Nav = () => {
    const navigate = useNavigate()
    const dataApi = useContext(AppDataContext)
    const authApi = useContext(AuthContext)

    const logout = useLogout()

    const handleLogout = async () => {
        await logout()
        navigate(routesConfig.home, {replace: true})
    }

    const [navList, setNavList] = useState([])

    const getList = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_PUBLIC_API_URL}/nav`);
            const data = response.data.data;
            setNavList(data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getList()
    }, []);


    return (
        <>
            <Navbar>
                <Navbar.Brand>
                    <a href="#">
                        <img src="src/assets/images/logo.png" height={24} width={100} alt="Flowbite React Logo"/>
                    </a>
                </Navbar.Brand>
                <div className="flex md:order-2 items-center">
                    <Navbar.Toggle/>
                    <Navbar.Collapse theme={{
                        base: "w-full md:block md:w-auto",
                        list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium items-center",
                        hidden: {
                            on: "hidden",
                            off: ""
                        }
                    }
                    }>
                        {navList.map((nav: IMenu) => (
                            <Fragment key={nav.id}>
                                {nav.products?.length > 0 && nav.products && (
                                    <Navbar.Link href="#"
                                                 className="group/main text-gray-800 flex items-center relative hover:!text-orange-500">
                                        {nav.title}
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                             xmlns="http://www.w3.org/2000/svg"
                                             className="group-hover/main:fill-orange-500"
                                        >
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M3.62284 5.62288C3.83112 5.4146 4.16881 5.4146 4.37709 5.62288L7.99996 9.24576L11.6228 5.62288C11.8311 5.4146 12.1688 5.4146 12.3771 5.62288C12.5854 5.83116 12.5854 6.16885 12.3771 6.37713L8.37709 10.3771C8.16881 10.5854 7.83112 10.5854 7.62284 10.3771L3.62284 6.37713C3.41456 6.16885 3.41456 5.83116 3.62284 5.62288Z"
                                                  fill="#667085"/>
                                        </svg>

                                        <ul className="absolute hidden group-hover/main:block z-10 top-5 -right-6 bg-white rounded-[8px] shadow-sm border border-solid border-gray-200 w-[300px] text-gray-700">
                                            {
                                                nav.products.map((product: INavBar) => (
                                                    <>
                                                        <li key={product.id}
                                                            className="group/item p-4 flex items-center justify-between group-hover:rotate-90"
                                                        >
                                                            {product.title}
                                                            {product.productList && (
                                                                <svg width="16" height="16" viewBox="0 0 16 16"
                                                                     className="transition duration-300 ease-in-out group-hover/item:rotate-90 ml-2"
                                                                     fill="none"
                                                                     xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                                          d="M5.62284 12.3771C5.41456 12.1688 5.41456 11.8311 5.62284 11.6229L9.24572 7.99999L5.62284 4.37712C5.41456 4.16884 5.41456 3.83115 5.62284 3.62287C5.83112 3.41459 6.16881 3.41459 6.37709 3.62287L10.3771 7.62287C10.5854 7.83115 10.5854 8.16884 10.3771 8.37712L6.37709 12.3771C6.16881 12.5854 5.83112 12.5854 5.62284 12.3771Z"
                                                                          fill="#667085"/>
                                                                </svg>)}
                                                            {product.productList && (
                                                                <ul className="absolute transition duration-300 ease-in-out opacity-0 invisible z-10 bg-white shadow-sm rounded-[8px] border border-solid border-gray-200 w-[300px] l-10 text-gray-700 group-hover/item:visible group-hover/item:opacity-100  top-0 left-1/2 translate-x-[150px]">
                                                                    {
                                                                        product.productList && (product.productList.map((list) => (
                                                                            <>
                                                                                <li className="p-4">{list.name}</li>
                                                                            </>
                                                                        )))
                                                                    }
                                                                </ul>)
                                                            }
                                                        </li>
                                                    </>
                                                ))
                                            }
                                        </ul>
                                    </Navbar.Link>)}
                            </Fragment>
                        ))}
                        <Navbar.Link href="#"
                                     className="text-gray-800 flex items-center relative hover:!text-orange-500">
                            Câu hỏi thường gặp
                        </Navbar.Link>
                        {
                            !authApi?.persist && (
                                <Navbar.Link href="#"
                                             className="text-gray-800 flex items-center relative hover:!text-orange-500"
                                             onClick={dataApi?.openModal}>
                                    Đăng nhập
                                </Navbar.Link>
                            )
                        }
                        <Navbar.Link href="#"
                                     className="text-gray-800 flex items-center relative hover:!text-orange-500">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_577_441)">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M3.72665 1.83337C3.38789 1.83337 3.04193 1.97066 2.69074 2.31637L2.68695 2.32009L2.68309 2.32374C2.37992 2.60975 2.17002 2.92241 2.0386 3.25644L2.03756 3.25907C1.90275 3.5961 1.83331 3.96596 1.83331 4.36004C1.83331 4.97515 1.97508 5.63555 2.27382 6.34526C2.57669 7.05812 2.99654 7.78534 3.52503 8.52023C4.06231 9.25805 4.66499 9.96462 5.33357 10.6398C6.009 11.3086 6.71607 11.9117 7.46143 12.4562C8.194 12.9895 8.92779 13.4098 9.65597 13.7201C10.3724 14.0253 11.0324 14.1667 11.6333 14.1667C12.0365 14.1667 12.4042 14.0922 12.741 13.9518L12.7437 13.9507C12.9808 13.8535 13.201 13.7167 13.4098 13.5339C13.6175 13.352 13.9334 13.373 14.1153 13.5807C14.2972 13.7885 14.2763 14.1044 14.0685 14.2863C13.7817 14.5374 13.4683 14.7343 13.1243 14.8755C12.6614 15.0681 12.163 15.1667 11.6333 15.1667C10.8742 15.1667 10.0809 14.9881 9.26399 14.64C8.459 14.297 7.65962 13.8374 6.87235 13.2643L6.87173 13.2638C6.08445 12.6888 5.33881 12.0525 4.62814 11.3486L4.62471 11.3452C3.92096 10.6347 3.28449 9.88882 2.71576 9.10767L2.71407 9.10534C2.14981 8.32088 1.69005 7.52873 1.35311 6.73553L1.35249 6.73407C1.01144 5.92407 0.833313 5.13138 0.833313 4.36004C0.833313 3.84793 0.923715 3.35159 1.10855 2.88898C1.29656 2.41173 1.59187 1.9794 1.99303 1.59997C2.49433 1.10803 3.08037 0.833374 3.72665 0.833374C3.9821 0.833374 4.24205 0.887629 4.47958 1.00097C4.72501 1.1149 4.9487 1.28933 5.12262 1.53952L6.66682 3.71604C6.8035 3.90608 6.91045 4.09202 6.98787 4.28028C7.06646 4.46477 7.11998 4.671 7.11998 4.88004C7.11998 5.13795 7.04482 5.38446 6.91134 5.6063C6.79783 5.80527 6.64282 5.99715 6.46374 6.17672L6.00457 6.65401C6.00921 6.66499 6.01546 6.67983 6.0222 6.69703C6.12198 6.87196 6.29866 7.11819 6.56657 7.43498C6.85999 7.77397 7.17116 8.11745 7.50692 8.45985C7.86152 8.80779 8.19741 9.12393 8.53653 9.41189C8.85718 9.68319 9.10706 9.85609 9.28865 9.95483C9.30328 9.96115 9.31684 9.96728 9.32787 9.97233L9.78766 9.51859C9.96995 9.33645 10.1654 9.17594 10.3741 9.06445C10.5921 8.93463 10.8298 8.86004 11.0933 8.86004C11.2933 8.86004 11.4908 8.90273 11.6893 8.98393C11.8779 9.06111 12.0626 9.16728 12.2478 9.29325L12.252 9.29609L14.4606 10.8641C14.697 11.0284 14.8822 11.2364 14.9976 11.4987L15.0011 11.5065L15.0042 11.5143C15.0892 11.7267 15.1466 11.9568 15.1466 12.22C15.1466 12.4962 14.9228 12.72 14.6466 12.72C14.3705 12.72 14.1466 12.4962 14.1466 12.22C14.1466 12.1127 14.1252 12.0118 14.0792 11.8946C14.048 11.8267 13.9942 11.7575 13.8887 11.6845L13.8838 11.6811L11.6814 10.1174C11.5352 10.0182 11.4144 9.95192 11.3107 9.90948C11.2158 9.87069 11.1467 9.86004 11.0933 9.86004C11.0292 9.86004 10.9648 9.87552 10.88 9.92714L10.8659 9.93571L10.8513 9.94333C10.7592 9.99135 10.64 10.0805 10.4935 10.2269L10.4912 10.2293L9.98546 10.7283C9.82368 10.8895 9.61229 10.9867 9.35998 10.9867C9.26125 10.9867 9.14416 10.9756 9.01775 10.9282L9.00695 10.9242L8.99635 10.9196C8.96609 10.9066 8.9382 10.8938 8.91999 10.8854C8.89837 10.8755 8.89103 10.8723 8.88762 10.8709L8.8629 10.8611L8.83937 10.8486C8.56907 10.7055 8.2518 10.4809 7.89034 10.1751L7.8897 10.1745C7.52337 9.86348 7.1671 9.52749 6.80308 9.17022L6.79971 9.16691L6.79641 9.16354C6.4408 8.8011 6.11365 8.43977 5.80856 8.08723L5.80493 8.08303C5.50275 7.72591 5.27133 7.40945 5.1277 7.14613L5.10638 7.10705L5.09237 7.06501C5.09236 7.06502 5.09066 7.06034 5.082 7.03986C5.08127 7.03813 5.08048 7.03629 5.07965 7.03432C5.07134 7.01473 5.05822 6.98379 5.04515 6.94894L5.03515 6.92227L5.02824 6.89464C5.0067 6.80848 4.99331 6.72074 4.99331 6.62004C4.99331 6.39389 5.07038 6.17803 5.24237 6.0039L5.74967 5.47657L5.75309 5.47315C5.89044 5.33581 5.98596 5.21127 6.0447 5.10735L6.04868 5.10031L6.05288 5.0934C6.10341 5.01039 6.11998 4.9394 6.11998 4.88004C6.11998 4.83721 6.10758 4.76486 6.06707 4.67033L6.06381 4.66272C6.02155 4.55943 5.9561 4.44037 5.85421 4.29886L5.85218 4.29603L4.30219 2.11133C4.23716 2.0174 4.15617 1.95307 4.05712 1.90735L4.05026 1.90419C3.95538 1.85865 3.8433 1.83337 3.72665 1.83337Z"
                                          fill="#1D2939"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_577_441">
                                        <rect width="16" height="16" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <span className="ml-1">
                                1900 6083
                            </span>
                        </Navbar.Link>
                    </Navbar.Collapse>
                    <Button
                        onClick={dataApi?.openSidebar}
                        className="ml-8 text-gray-800 rounded-[8px] hover:border-orange-500 bg-white border-1 border-solid border-orange-500 hover:!bg-white">
                        Yêu cầu tư vấn
                    </Button>
                    {
                        authApi?.persist === true && (
                            <div className="ml-3 border-l border-solid border-gray-200">
                                <Dropdown
                                    arrowIcon={true}
                                    inline
                                    size="sm"
                                    theme={customThemeDropdown}
                                    label={
                                        <div className="flex items-center">
                                            <Avatar alt="User settings"
                                                    rounded size="sm"/>
                                            <span
                                                className="ml-3 text-[14px] text-gray-800 font-semibold"
                                            >{get(authApi?.user, 'lastName', '') &&
                                            get(authApi?.user, 'lastName', '')
                                                ? authApi?.user.lastName + ' ' + authApi?.user.firstName : ''}</span>
                                        </div>
                                    }
                                >
                                    <Dropdown.Item
                                        href={routesConfig.account}
                                    >Quản lý tài khoản</Dropdown.Item>
                                    <Dropdown.Item
                                        onClick={handleLogout}
                                    >Đăng xuất</Dropdown.Item>
                                </Dropdown>
                            </div>
                        )
                    }
                </div>
            </Navbar>
        </>
    );
};

export default Nav;
