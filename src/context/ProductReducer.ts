export const productReducer = (state, action) => {
    switch (action.type) {
        case 'SUCCESS':
            return {...state, products: action.payload, loading: false, error: null};
        case 'ERROR':
            return {...state, products: action.payload, loading: false, error: action.payload};
        default:
            return state
    }
}
