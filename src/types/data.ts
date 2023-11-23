export interface IData {
    id: string;
    title: string;
    image: string;
    description: string;
}

export interface IServices {
    creditCard: boolean,
    load: boolean,
    buyFirst: boolean,
    accountCredit: boolean,
    fastMoney: boolean
}

export interface IFormField {
    fullName: string,
    phone: string,
    province: string,
    district: string,
    gender: string,
    services: IServices,
    message: string
}

export interface IProductInfo {
    id: string,
    name: string,
}

export interface IMenu {
    id: string,
    title: string,
    products: Array<INavBar>,
}

export interface INavBar {
    id: string,
    title: string,
    productList: Array<IProductInfo>
}
