import {faker} from "@faker-js/faker";

export const navBarList = [
    {
        id: faker.string.uuid(),
        title: "Sản phẩm",
        products: [
            {
                id: faker.string.uuid(),
                title: 'Thẻ tín dụng',
                productList: [
                    {
                        id: faker.string.uuid(),
                        name: 'MSB credits'
                    }
                ]
            },
            {
                id: faker.string.uuid(),
                title: "Vay",
                productList: [
                    {
                        id: faker.string.uuid(),
                        name: 'MSB Mastercard mDigi'
                    },
                    {
                        id: faker.string.uuid(),
                        name: 'MSB Mastercard Super Free'
                    },
                    {
                        id: faker.string.uuid(),
                        name: 'MSB Visa Online'
                    },
                    {
                        id: faker.string.uuid(),
                        name: 'MSB Visa Travel'
                    },
                    {
                        id: faker.string.uuid(),
                        name: 'MSB Visa Signature'
                    }
                ]
            },
            {
                id: faker.string.uuid(),
                title: "Bảo hiểm"
            }
        ]
    },
    {
        id: faker.string.uuid(),
        title: "So sánh",
        products: [
            {
                id: faker.string.uuid(),
                title: 'So sánh sản phẩm vay',
            }
        ]
    }
]


export const productsList = [
    {
        id: faker.string.uuid(),
        title: "Thẻ tín dụng",
        image: "./src/assets/images/product-1.jpg",
        description: "Đa dạng lựa chọn theo phong cách chi tiêu"
    },
    {
        id: faker.string.uuid(),
        title: "Vay linh hoạt",
        image: "./src/assets/images/product-2.jpg",
        description: "Giải ngân tức thì, tiêu dùng linh hoạt"
    },
    {
        id: faker.string.uuid(),
        title: "Mua trước trả sau",
        image: "./src/assets/images/product-3.jpg",

        description: "Chuyển đổi trả góp, nhẹ ví chi tiêu"
    },
    {
        id: faker.string.uuid(),
        title: "Tiền nhanh",
        image: "./src/assets/images/product-4.jpg",

        description: "Nhận khoản vay dự phòng, chủ động và nhanh chóng."
    },
    {
        id: faker.string.uuid(),
        title: "Tài khoản thanh toán M-Pro",
        image: "./src/assets/images/product-5.jpg",

        description: "Siêu miễn phí, hoàn tiền tới 3,6 triệu đồng"
    },
    {
        id: faker.string.uuid(),
        title: "Bảo hiểm",
        image: "./src/assets/images/product-6.jpg",
        description: "Mua bảo hiểm trực tuyến dễ dàng chỉ với vài thao tác"
    }
]
