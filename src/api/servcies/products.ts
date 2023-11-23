import {api} from "../axios.ts";

export const getProducts = async (): Promise<[] | undefined> => {
    try {
        const response = await api.get('/products');
        if (!response) {
            throw new Error('Could not get products')
        }
        return response.data.data
    } catch (err) {
        console.error(err);
    }
}
