import {createContext, useEffect, useState} from "react";
import {getProvince} from "../api/servcies/provinces.ts";
import {IFormField} from "../types/data.ts";


type AppContext = {
    isOpenModal: boolean;
    isOpenSidebar: boolean;
    provinces: Array<unknown>;
    formData: IFormField[];
    openModal: () => void;
    closeModal: () => void;
    openSidebar: () => void;
    closeSidebar: () => void;
    submitData: (data: IFormField) => void;
} | null

export const AppDataContext = createContext<AppContext>(null)

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {

    const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
    const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false)
    const [provinces, setProvinces] = useState<[]>([])

    const [formData, setFormData] = useState<IFormField>({
        fullName: '',
        phone: '',
        province: '',
        district: '',
        services: {
            creditCard: false,
            buyFirst: false,
            load: false,
            fastMoney: false,
            accountCredit: false
        },
        gender: '',
        message: '',
    })


    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getProvince()
                if (data) {
                    setProvinces(data)
                }
            } catch (err) {
                console.error(err)
            }
        }
        fetchData()
    }, []);

    const openModal = () => setIsOpenModal(true)
    const closeModal = () => setIsOpenModal(false)

    const openSidebar = () => setIsOpenSidebar(true)
    const closeSidebar = () => setIsOpenSidebar(false)

    const submitData = (data: IFormField) => {
        setFormData(data)
    }

    return {
        isOpenModal,
        isOpenSidebar,
        provinces,
        submitData,
        formData,
        openSidebar,
        closeSidebar,
        closeModal,
        openModal
    }
}
