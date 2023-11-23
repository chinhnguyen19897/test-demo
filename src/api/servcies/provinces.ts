import axios from "axios";

const url = import.meta.env.VITE_PUBLIC_API_PROVINCE || ''

export const getProvince = async (): Promise<any> => {
    try {
        const response = await axios.get(url);
        if (!response) {
            throw new Error('Could not get products')
        }
        return response.data
    } catch (err) {
        console.error(err);
    }
}
