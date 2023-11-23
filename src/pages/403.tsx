import {Link} from "react-router-dom";
import {routesConfig} from "../config/routes.ts";
import {Button} from "flowbite-react";

const Page403 = () => {
    return (
        <section className="h-[850px]">
            <div className="max-w-screen-xl mx-auto my-40 px-40 md:container">
                <div className="text-center flex flex-col gap-8">
                    <h3 className="text-center text-gray-800">
                        403 Forbiden
                    </h3>
                    <p>
                        Rất tiếc, bạn không có quyền truy cập trang này!
                    </p>
                </div>
                <div className="mt-10">
                    <Link to={routesConfig.home}>
                        <Button color="gray"
                                className="w-full px-[12px] bg-transparent text-orange-500 hover:!border-orange-500 hover:!bg-transparent hover:!text-orange-500"
                        >
                            Trở về trang chủ
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Page403;
