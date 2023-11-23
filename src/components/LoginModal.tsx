import {Button, Label, Modal, TextInput} from "flowbite-react";
import {FormEvent, useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../context/AuthContext.tsx";
import axios, {AxiosError} from "axios";
import {AppDataContext} from "../context/AppContext.tsx";
import {customInputTheme, customModal} from "../config/themes/themes.ts";
import {routesConfig} from "../config/routes.ts";
import {isEmpty} from "lodash";


const LoginModal = () => {
    const authApi = useContext(AuthContext);
    const dataApi = useContext(AppDataContext)
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("")

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "https://dummyjson.com/auth/login",
                JSON.stringify({username, password}),
                {
                    headers: {"Content-Type": "application/json"},
                    withCredentials: false,
                }
            );
            const accessToken = response?.data?.token;
            authApi?.setAuth({username, password, accessToken});
            authApi?.setUser(response?.data);
            authApi?.setPersist(true)
            setUsername("");
            setPassword("");
            dataApi?.closeModal()
            navigate(routesConfig.account, {replace: true});
        } catch (err) {
            const error = err as AxiosError
            console.error(error);
            if (!error.response) {
                setErrorMessage("Không có phản hồi từ server")
            } else if (error.response?.status === 400) {
                setErrorMessage("Tài khoản hoặc mật khẩu không đúng.");
            } else if (error.response?.status === 401) {
                setErrorMessage("Tài khoản không được truy cập.");
            } else {
                setErrorMessage("Đăng nhập không thành công");
            }
        }
    };


    useEffect(() => {
        localStorage.setItem("persist", authApi?.persist as string);
    }, [authApi?.persist]);

    return (
        <>
            <Modal show={dataApi?.isOpenModal}
                   size="sm"
                   dismissible
                   onClose={dataApi?.closeModal}
            >
                <Modal.Header theme={customModal}>
                    Đăng nhập
                </Modal.Header>
                <Modal.Body>
                    {!isEmpty(errorMessage) && (<p className="text-center text-sm text-orange-500">{errorMessage}</p>)}
                    <form className="flex max-w-md flex-col gap-4" onSubmit={(e) => handleSubmit(e)}>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="username" value="Tên tài khoản"/>
                            </div>
                            <TextInput id="username" type="text"
                                       onChange={e => setUsername(e.target.value)}
                                       value={username}
                                       theme={customInputTheme}
                                       placeholder="Nhập tên tài khoản" required/>
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password" value="Mật khẩu"/>
                            </div>
                            <TextInput id="password" type="password"
                                       onChange={e => setPassword(e.target.value)}
                                       value={password}
                                       theme={customInputTheme}
                                       placeholder="Nhập mật khẩu" required/>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button color="gray"
                                    className="w-full px-[12px] bg-transparent text-orange-500 hover:!border-orange-500 hover:!bg-transparent hover:!text-orange-500"
                                    onClick={dataApi?.closeModal}>
                                Đóng
                            </Button>
                            <Button type="submit"
                                    className="w-full px-[12px] bg-orange-500 text-white hover:!bg-orange-500 hover:!border-orange-500 hover:!text-white">Đăng
                                nhập</Button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default LoginModal;
