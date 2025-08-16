import { useRef, useState } from "react"
import { FaArrowLeftLong } from "react-icons/fa6"
import { useNavigate } from "react-router-dom";
import { isValidPhoneNumber } from "../Utils/functions";
import { BUTTON_TEXT } from "../common/enums/enums";
import { generateOtpService, resendOTP, verifyOTP } from "../service/customerSignUpService";
import { toast } from "react-toastify";
export const SignUp = () => {
    const firstNumber = useRef<HTMLInputElement | null>(null);
    const secondNumber = useRef<HTMLInputElement | null>(null);
    const thirdNumber = useRef<HTMLInputElement | null>(null);
    const fourthNumber = useRef<HTMLInputElement | null>(null);
    const fifthNumber = useRef<HTMLInputElement | null>(null);
    const sixthNumber = useRef<HTMLInputElement | null>(null);
    const [isOtpSent, setIsOtpSent] = useState<boolean>(false);
    const [countryCode, setCountryCode] = useState<string>('')
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [headLine, setHeadLine] = useState<string>("What is your phone number?")
    const [note, setNote] = useState<string>("Tap \"Send OTP\" to get an SMS confirmation to help you use TABLETIME.")
    const [buttonText, setButtonText] = useState<string>(BUTTON_TEXT.SENT_OTP)
    const navigate = useNavigate()
    const handleSubmit = async () => {
        if (buttonText === BUTTON_TEXT.SENT_OTP) {
            if (!isValidPhoneNumber(countryCode, phoneNumber)) {
                toast.warn("Please enter valid phone number", {
                    position: "top-center",
                    autoClose: 3000
                })
                return
            }
            const input = countryCode.includes("+")
                ? countryCode + phoneNumber
                : `+${countryCode + phoneNumber}`;
            const otp = await generateOtpService(input)
            if (otp && String(otp).length === 6) {
                console.log("otp: ", otp)
                setIsOtpSent(true)
                setHeadLine("Verify phone number")
                setNote("Check your SMS messages. We've sent you the PIN at")
                setButtonText(BUTTON_TEXT.VERIFY)
            }

        } else if (buttonText === BUTTON_TEXT.VERIFY) {
            if (firstNumber.current && secondNumber.current && thirdNumber.current && fourthNumber.current && fifthNumber.current && sixthNumber.current) {
                const OTP = firstNumber.current.value + secondNumber.current.value + thirdNumber.current.value + fourthNumber.current.value + fifthNumber.current.value + sixthNumber.current.value;
                const input = countryCode.includes("+")
                    ? countryCode + phoneNumber
                    : `+${countryCode + phoneNumber}`;
                const verified: boolean = await verifyOTP(input, OTP)
                if (verified) {
                    navigate('/restaurants')
                } else {
                    window.location.reload()
                }
            }
        }
    }
    return (
        <div className='grid grid-rows-12 h-full' >
            <div className='row-span-1 shadow-xl border-b border-gray-400 rounded-b-3xl flex justify-center items-center'>
                <h3 className='text-primary text-2xl font-bold'>TableTime</h3>
            </div>
            <div className='my-2'>
                <div className='mx-2'>
                    <FaArrowLeftLong className="h-7 w-7" />
                </div>
                <div>
                    <p className='text-4xl my-5 mx-2 font-bold w-[80%]'>
                        {headLine}
                    </p>
                    <p className='mx-3 mt-10 font-medium'>{note} <span className="text-gray-400">9979139239</span></p>
                </div>
                <div className="flex gap-2 mx-3 mt-16">
                    {isOtpSent ? (
                        <div className="flex gap-4 justify-center w-full ">
                            <input
                                ref={firstNumber}
                                type="text"
                                maxLength={1}
                                className="w-10 text-center text-2xl border-b-2 border-gray-300 focus:outline-none focus:border-orange-500"
                                required
                            />
                            <input
                                ref={secondNumber}
                                type="text"
                                maxLength={1}
                                className="w-10 text-center text-2xl border-b-2 border-gray-300 focus:outline-none focus:border-orange-500"
                                required
                            />
                            <input
                                ref={thirdNumber}
                                type="text"
                                maxLength={1}
                                className="w-10 text-center text-2xl border-b-2 border-gray-300 focus:outline-none focus:border-orange-500"
                                required
                            />
                            <input
                                ref={fourthNumber}
                                type="text"
                                maxLength={1}
                                className="w-10 text-center text-2xl border-b-2 border-gray-300 focus:outline-none focus:border-orange-500"
                                required
                            />
                            <input
                                ref={fifthNumber}
                                type="text"
                                maxLength={1}
                                className="w-10 text-center text-2xl border-b-2 border-gray-300 focus:outline-none focus:border-orange-500"
                                required
                            />
                            <input
                                ref={sixthNumber}
                                type="text"
                                maxLength={1}
                                className="w-12 text-center text-2xl border-b-2 border-gray-300 focus:outline-none focus:border-orange-500"
                                required
                            />
                        </div>


                    ) : (<>
                        <input
                            value={countryCode}
                            type="tel"
                            placeholder="+91"
                            className="w-20 px-2 py-2 border-b border-gray-400 rounded focus:outline-none focus:border-black focus:border-b-2"
                            name="countryCode"
                            onChange={(e) => setCountryCode(e.target.value)}
                        />
                        <input
                            value={phoneNumber}
                            type="tel"
                            placeholder="Enter your phone number"
                            className="flex-1 px-2 py-2 border-b border-gray-400  rounded focus:outline-none focus:border-black focus:border-b-2"
                            name="phoneNumber"
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </>)}
                </div>
                <div className="w-full flex flex-col gap-3 justify-center items-center px-3 mt-9">
                    {isOtpSent && <div className="w-full mx-3 mt-6">
                        <p className="font-medium">Don't receive SMS? <span onClick={() => {
                            const input = countryCode.includes("+")
                                ? countryCode + phoneNumber
                                : `+${countryCode + phoneNumber}`;
                            resendOTP(input)
                        }} className="text-secondary font-medium hover:cursor-pointer">Resend Code</span></p>
                    </div>}
                    <button className="w-full mx-3 text-xl bg-secondary p-2 rounded-md text-white font-semibold hover:cursor-pointer" onClick={() => { handleSubmit() }}>
                        {buttonText}
                    </button>
                </div>
            </div>
        </div>
    )
}
