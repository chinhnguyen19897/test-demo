import {Carousel} from "flowbite-react";

const HeroImage = () => {
    return (
        <>
            <section id="hero-image">
                <div className="h-56 sm:h-[385px] xl:h-[462px] 2xl:h-[550px] relative">
                    <Carousel
                        theme={{
                            root: {
                                leftControl: "hidden",
                                rightControl: "hidden"
                            },
                            indicators: {
                                base: "h-[4px] p-0 w-[24px] rounded-[4px]",
                                active: {
                                    on: "bg-orange-500",
                                    off: "bg-gray-300"
                                }
                            }
                        }}
                    >
                        <div className="h-full">
                            <img src={'src/assets/images/hero-banner.jpg'} alt="" width="100%"

                            />
                            <div className="absolute left-[25%] top-1/4 translate-x-[-50%] max-w-[430px]">
                                <h2>Trải nghiệm sống cực chất cho
                                    dân văn phòng</h2>
                                <p className="mt-5">
                                    Lương từ 8 triệu/tháng, nhận ngay tới
                                    200 triệu VND
                                </p>
                                <a className="mt-5 bg-orange-500 text-white rounded-[8px] py-[12px] w-[185px] text-md text-center"
                                   href="#"
                                   type="button">
                                    Khám phá ngay
                                </a>
                            </div>
                        </div>
                        <div className="h-full">
                            <img src={'src/assets/images/hero-banner.jpg'} alt="" width="100%"
                            />
                            <div className="absolute left-[25%] top-1/4 translate-x-[-50%] max-w-[430px]">
                                <h2>Trải nghiệm sống cực chất cho
                                    dân văn phòng</h2>
                                <p className="mt-5">
                                    Lương từ 8 triệu/tháng, nhận ngay tới
                                    200 triệu VND
                                </p>
                                <a className="mt-5 bg-orange-500 text-white rounded-[8px] py-[12px] w-[185px] text-md text-center hover:!text-white"
                                   href="#"
                                   type="button">
                                    Khám phá ngay
                                </a>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </section>
        </>
    );
};

export default HeroImage;
