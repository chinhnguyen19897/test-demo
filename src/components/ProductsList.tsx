import {useProductContext} from "../context/ProductContext.tsx";
import {IData} from "../types/data.ts";
import {Card, Spinner} from "flowbite-react";

const ProductsList = () => {

    const {products, loading, error} = useProductContext()

    if (loading) {
        return <Spinner aria-label="Default status example"/>
    }

    if (error) {
        return <section id="products-list">
            <div className="container mx-auto">
                <div>
                    Không có dữ liệu
                </div>
            </div>
        </section>
    }


    return (
        products && (
            <section id="products-list" className="mb-20">
                <div className="md:container md:px-lg xl:max-w-screen-xl px-10 mx-auto scroll-m-10">
                    <div className="text-center mb-10">
                        <h3>Danh sách sản phẩm</h3>
                    </div>
                    <div className="grid grid-cols-3 grid-rows-2 gap-4 items-center">
                        {products.map((data: IData) => {
                            return (
                                <Card
                                    className="max-w xl:max-w-md hover:shadow-xl h-[450px]"
                                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                                    imgSrc={data.image}
                                    key={data.id}
                                >
                                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        {data.title}
                                    </h5>
                                    <p className="font-normal text-gray-700 dark:text-gray-400">
                                        {data.description}
                                    </p>
                                    <div>
                                        <a href="#" className="inline-flex items-center text-orange-500">
                                            <span className="mr-3">
                                                Khám phá ngay
                                            </span>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd"
                                                      d="M10.3619 4.52851C10.6223 4.26816 11.0444 4.26816 11.3047 4.52851L16.3047 9.52851C16.5651 9.78886 16.5651 10.211 16.3047 10.4713L11.3047 15.4713C11.0444 15.7317 10.6223 15.7317 10.3619 15.4713C10.1016 15.211 10.1016 14.7889 10.3619 14.5285L14.2239 10.6666H4.16667C3.79848 10.6666 3.5 10.3681 3.5 9.99992C3.5 9.63173 3.79848 9.33325 4.16667 9.33325H14.2239L10.3619 5.47132C10.1016 5.21097 10.1016 4.78886 10.3619 4.52851Z"
                                                      fill="#F4600C"/>
                                            </svg>
                                        </a>
                                    </div>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>
        )
    );
};

export default ProductsList;
