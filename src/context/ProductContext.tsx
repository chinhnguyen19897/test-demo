import {createContext, useEffect, useReducer} from "react";
import {IData} from "../types/data.ts";
import {getProducts} from "../api/servcies/products.ts";
import {productReducer} from "./ProductReducer.ts";


type ProductContext = {
    products: IData[] | null,
    loading: boolean,
    error: null
} | null

export const ProductDataContext = createContext<ProductContext>(null)

// eslint-disable-next-line react-refresh/only-export-components
export const useProductContext = () => {
    const [state, dispatch] = useReducer(productReducer, {
        products: null,
        loading: false,
        error: null,
    })


    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getProducts()
                dispatch({type: "SUCCESS", payload: data})
            } catch (err) {
                dispatch({type: "ERROR", payload: err})
            }
        }
        fetchData()
    }, []);


    return {
        ...state,
        products: state.products,
        loading: state.loading,
        error: state.error
    }
}
