import {Card} from "flowbite-react";

const Info = () => {
    return (
        <section id="info" className="relative mb-20">
            <div className="md:container mx-auto xl:max-w-screen-xl px-10">
                <Card className="shadow-2xl">
                    <div className="grid grid-cols-4 gap-4">
                        <div className="col-span-1 p-[48px]">
                            <h4 className="text-2xl">
                                Vì sao nên chọn chúng tôi
                            </h4>
                        </div>
                        <div className="grid grid-cols-3 gap-4 col-span-3 py-[40px]">
                            <div className="px-[16px]">
                                <div className="icon">
                                    <svg width="31" height="34" viewBox="0 0 31 34" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M26.8696 8.20185L23.1346 4.46685C22.6702 4.00183 22.1186 3.63293 21.5115 3.38127C20.9043 3.1296 20.2535 3.0001 19.5963 3.00018H6.66797C5.34189 3.00018 4.07012 3.52697 3.13243 4.46465C2.19475 5.40233 1.66797 6.6741 1.66797 8.00018V28.0002C1.66797 29.3263 2.19475 30.598 3.13243 31.5357C4.07012 32.4734 5.34189 33.0002 6.66797 33.0002H23.3346C24.6607 33.0002 25.9325 32.4734 26.8702 31.5357C27.8079 30.598 28.3346 29.3263 28.3346 28.0002V11.7385C28.3347 11.0817 28.2054 10.4313 27.954 9.82443C27.7026 9.21759 27.3342 8.66623 26.8696 8.20185Z"
                                            fill="#F4600C" stroke="#F4600C" strokeWidth="1.5" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                        <path
                                            d="M30.0013 12.1668H22.5013C21.6172 12.1668 20.7694 11.8156 20.1443 11.1905C19.5192 10.5654 19.168 9.71755 19.168 8.8335V1.3335"
                                            stroke="white" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                        <path d="M21.6693 25.5H8.33594" stroke="white" strokeWidth="2"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"/>
                                        <path d="M8.33594 19.667H21.6693" stroke="white" strokeWidth="2"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"/>
                                        <path d="M12.8359 13.8335H8.33594" stroke="white" strokeWidth="2"
                                              strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>

                                </div>
                                <h4 className="mt-6 text-lg">100% online</h4>
                                <p className="mt-3 text-gray-500 text-[16px]">
                                    Đăng ký và nộp hồ sơ trực tuyến
                                </p>
                            </div>
                            <div className="px-[16px]">
                                <div className="icon">
                                    <svg width="26" height="32" viewBox="0 0 26 32" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M23.3554 6.69L18.642 1.97667C18.017 1.3515 17.1693 1.00019 16.2854 1H4.33202C3.44797 1 2.60012 1.35119 1.975 1.97631C1.34988 2.60143 0.998688 3.44928 0.998688 4.33333V27.6667C0.998688 28.5507 1.34988 29.3986 1.975 30.0237C2.60012 30.6488 3.44797 31 4.33202 31H20.9987C21.8827 31 22.7306 30.6488 23.3557 30.0237C23.9808 29.3986 24.332 28.5507 24.332 27.6667V9.04667C24.3318 8.16268 23.9805 7.31498 23.3554 6.69Z"
                                            fill="#F4600C" stroke="#F4600C" strokeWidth="1.5" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                        <path
                                            d="M12.1667 24C16.3088 24 19.6667 20.6421 19.6667 16.5C19.6667 12.3579 16.3088 9 12.1667 9C8.02452 9 4.66666 12.3579 4.66666 16.5C4.66666 20.6421 8.02452 24 12.1667 24Z"
                                            stroke="white" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                        <path d="M14.6667 15L11.5406 18L9.66666 16.2" stroke="white" strokeWidth="2"
                                              strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>

                                </div>
                                <h4 className="mt-6 text-lg">Phê duyệt siêu tốc</h4>
                                <p className="mt-3 text-gray-500 text-[16px]">
                                    Duyệt hồ sơ nhanh trong 5 phút
                                </p>
                            </div>
                            <div className="px-[16px]">
                                <div className="icon">
                                    <svg width="41" height="40" viewBox="0 0 41 40" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M29.5013 35.8335L27.0013 33.3335L29.5013 30.8335" stroke="#F4600C"
                                              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path
                                            d="M27.0013 33.3335H30.3346C31.6607 33.3335 32.9325 32.8067 33.8701 31.869C34.8078 30.9313 35.3346 29.6596 35.3346 28.3335"
                                            stroke="#F4600C" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                        <path
                                            d="M8.66665 35H18.6666C19.5507 35 20.3985 34.6488 21.0237 34.0237C21.6488 33.3986 22 32.5507 22 31.6667V20C22 19.116 21.6488 18.2681 21.0237 17.643C20.3985 17.0179 19.5507 16.6667 18.6666 16.6667H8.66665C7.78259 16.6667 6.93474 17.0179 6.30962 17.643C5.6845 18.2681 5.33331 19.116 5.33331 20V31.6667C5.33331 32.5507 5.6845 33.3986 6.30962 34.0237C6.93474 34.6488 7.78259 35 8.66665 35Z"
                                            fill="#F4600C" stroke="#F4600C" strokeWidth="1.5" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                        <path
                                            d="M27.3903 23.3333H31.9987C32.8827 23.3333 33.7306 22.9821 34.3557 22.357C34.9808 21.7319 35.332 20.8841 35.332 20V8.33333C35.332 7.44928 34.9808 6.60143 34.3557 5.97631C33.7306 5.35119 32.8827 5 31.9987 5H21.9987C21.1146 5 20.2668 5.35119 19.6417 5.97631C19.0165 6.60143 18.6653 7.44928 18.6653 8.33333V11.6667"
                                            stroke="#F4600C" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                        <path d="M11.1653 4.1665L13.6653 6.6665L11.1653 9.1665" stroke="#F4600C"
                                              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path
                                            d="M13.6666 6.66669H10.3333C9.00723 6.66669 7.73546 7.19347 6.79778 8.13115C5.8601 9.06884 5.33331 10.3406 5.33331 11.6667"
                                            stroke="#F4600C" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round"/>
                                    </svg>

                                </div>
                                <h4 className="mt-6 text-lg">Sử dụng linh hoạt</h4>
                                <p className="mt-3 text-gray-500 text-[16px]">
                                    Dễ dàng chuyển đổi linh hoạt giữa các sản phẩm
                                </p>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>

        </section>
    );
};

export default Info;
