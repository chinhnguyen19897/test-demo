import {Button, Checkbox, Label, Radio, Select, Textarea, TextInput} from "flowbite-react";
import {AppDataContext} from "../context/AppContext.tsx";
import {SubmitHandler, useForm} from "react-hook-form";
import {useContext, useState} from "react";
import {GENDER} from "../constants/data.ts";
import {nameRegex, phoneRegex} from "../constants/regex.ts";
import {
    customCheckboxTheme,
    customInputTheme,
    customRadioTheme,
    customSelectTheme,
    customTextareTheme
} from "../config/themes/themes.ts";
import {IFormField} from "../types/data.ts";


const validation = {
    fullName: {
        required: {
            value: true, message: 'Họ và tên bắt buộc.'
        },
        pattern: {
            value: nameRegex, message: 'Họ tên không cho phép nhập ký tự',
        },
        minLength: {
            value: 2, message: 'Vui lòng nhập họ và tên đầy đủ, có dấu cách ở giữa và chỉ chứa dấu nháy đơn.'
        },
        maxLength: {value: 100, message: 'Họ và tên không vượt quá 100 ký tự.'}
    },
    phone: {
        required: {
            value: true, message: 'Số điện thoại bắt buộc.'
        },
        pattern: {
            value: phoneRegex, message: "Số điện thoại không hợp lệ."
        }
    },
    province: {
        required: {
            value: true, message: 'Vui lòng chọn tỉnh thành phố.'
        },
    },
    district: {
        required: {
            value: true, message: 'Vui lòng chọn quận huyện.'
        }
    },
    message: {
        required: {
            value: true, message: 'Vui lòng để lại lời nhắn.'
        }
    }
}


const FormRequire = () => {

    const formApi = useContext(AppDataContext)

    const [selectedCity, setSelectedCity] = useState<string | null>(null)

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm({
        mode: "onBlur",
        defaultValues: {
            fullName: '',
            phone: '',
            province: '',
            district: '',
            services:
                {
                    creditCard: false,
                    buyFirst: false,
                    load: false,
                    fastMoney: false,
                    accountCredit: false
                },
            gender: '',
            message: '',
        }
    })

    const handleChange = (selectedCity: string) => {
        setSelectedCity(selectedCity)
    }

    const onSubmit: SubmitHandler<IFormField> = (data) => {
        //TODO call api submit
        formApi?.submitData(data)
        reset()
    }


    return (
        <>
            <form className="flex max-w-full flex-col gap-4 p-5" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="username" value="Họ và tên"/>
                    </div>
                    <TextInput id="username" type="text"
                               className="bg-transparent"
                               theme={customInputTheme}
                               {...register("fullName", validation.fullName)}
                               placeholder="Nhập họ và tên"/>
                    <p className="text-orange-500 text-[14px]">{errors.fullName?.message}</p>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="phone" value="Mật khẩu"/>
                    </div>
                    <TextInput id="phone" type="text"
                               {...register("phone", validation.phone)}
                               theme={customInputTheme}
                               placeholder="Nhập số điện thoại"/>
                    <p className="text-orange-500 text-[14px]">{errors.phone?.message}</p>
                </div>
                <div className="flex justify-between gap-4">
                    <div className="mb-2 block w-1/2">
                        <div className="mb-2 block">
                            <Label htmlFor="province" value="Thành phố"/>
                        </div>
                        <Select id="province"
                                theme={customSelectTheme}
                                {...register("province", validation.province)}
                                onChange={(e) => handleChange(e.target.value)}
                        >
                            <option value="">Chọn tỉnh thành phố</option>
                            {
                                formApi?.provinces && formApi?.provinces.map((pro: any) => (
                                    <option key={pro.name} value={pro.name}>{pro.name}</option>
                                ))
                            }
                        </Select>
                    </div>
                    <div className="mb-2 block w-1/2">
                        <div className="mb-2 block">
                            <Label htmlFor="district" value="Quận/huyện"/>
                        </div>
                        <Select id="district" theme={customSelectTheme} {...register("district", validation.district)}>
                            <option value="">Chọn tỉnh quận/huyện</option>
                            {
                                formApi?.provinces.find((city: any) => city.name === selectedCity)?.districts.map((district) =>
                                    <option key={district.name} value={district.name}>{district.name}</option>
                                )
                            }
                        </Select>
                    </div>
                </div>
                <div>
                    <div className="mb-5">
                        <h3 className="text-[18px] font-medium">Giới tính</h3>
                    </div>
                    <div className="flex gap-20">
                        <div className="mb-2 block">
                            <Radio id="gender" theme={customRadioTheme} {...register("gender")} value={GENDER.MALE}
                                   defaultChecked/>
                            <Label htmlFor="gender" value="Nam" className="ml-2 font-[400] text-[16px]"/>
                        </div>
                        <div className="mb-2 block">
                            <Radio id="gender" theme={customRadioTheme} {...register("gender")} value={GENDER.FEMALE}/>
                            <Label htmlFor="gender" value="Nữ" className="ml-2 font-[400] text-[16px]"/>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="mb-5">
                        <h3 className="text-[18px] font-medium">Sản phẩm cần tư vấn</h3>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="mb-2 flex items-center">
                            <Checkbox id="creditCard" theme={customCheckboxTheme}
                                      {...register("services.creditCard")}/>
                            <Label htmlFor="creditCard" value="Thẻ tín dụng" className="ml-2 font-[400] text-[16px]"/>
                        </div>
                        <div className="mb-2 flex items-center">
                            <Checkbox id="buyFirst" theme={customCheckboxTheme} {...register("services.buyFirst")}/>
                            <Label htmlFor="buyFirst" value="Mua trước trả sau"
                                   className="ml-2 font-[400] text-[16px]"/>
                        </div>
                        <div className="mb-2 flex items-center">
                            <Checkbox id="loan" theme={customCheckboxTheme} {...register("services.load")}/>
                            <Label htmlFor="loan" value="Vay linh Hoạt" className="ml-2 font-[400] text-[16px]"/>
                        </div>
                        <div className="mb-2 flex items-center">
                            <Checkbox id="accountCredit"
                                      theme={customCheckboxTheme} {...register("services.accountCredit")}/>
                            <Label htmlFor="accountCredit" value="Tài khoản M-Pro"
                                   className="ml-2 font-[400] text-[16px]"/>
                        </div>
                        <div className="mb-2 flex items-center">
                            <Checkbox id="fastMoney" theme={customCheckboxTheme} {...register("services.fastMoney")}/>
                            <Label htmlFor="fastMoney" value="Tiền nhanh" className="ml-2 font-[400] text-[16px]"/>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="max-w-md">
                        <div className="mb-2 block">
                            <Label htmlFor="message" value="Chúng tôi có thể giúp gì cho bạn?"/>
                        </div>
                        <Textarea id="message"
                                  {...register("message", validation.message)}
                                  theme={customTextareTheme}
                                  placeholder="Nhập thông tin" rows={4}/>
                        <p className="text-orange-500 text-[14px]">{errors.message?.message}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 absolute bottom-[20px] w-[90%] mx-auto">
                    <Button type="submit" size="medium"
                            className="w-full px-[12px] bg-orange-500 text-white hover:!bg-orange-500 hover:!border-orange-500 hover:!text-white">Xác
                        nhận</Button>
                </div>
            </form>
        </>
    );
};

export default FormRequire;
