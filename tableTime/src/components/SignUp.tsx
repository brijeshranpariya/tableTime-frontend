import axios from "axios";
import { useState } from "react"
import { FaArrowLeftLong } from "react-icons/fa6"
import { useNavigate } from "react-router-dom";
export const SignUp = () => {
    const [isOtpSent, setIsOtpSent] = useState<boolean>(false);
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [headLine, setHeadLine] = useState<string>("What is your phone number?")
    const [note, setNote] = useState<string>("Tap \"Send OTP\" to get an SMS confirmation to help you use TABLETIME.")
    const [buttonText, setButtonText] = useState<string>("Send OTP")
    const navigate = useNavigate()
    const handleSubmit = () => {
        setIsOtpSent(true)
        setHeadLine("Verify phone number")
        setNote("Check your SMS messages. We've sent you the PIN at")
        setButtonText("VERIFY")
        if (buttonText == 'VERIFY') {

            navigate('/restaurants')
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
                        <div className="flex gap-5 justify-center w-full">
                            <input
                                type="text"
                                maxLength={1}
                                className="w-12 text-center text-2xl border-b-2 border-gray-300 focus:outline-none focus:border-orange-500"
                            />
                            <input
                                type="text"
                                maxLength={1}
                                className="w-12 text-center text-2xl border-b-2 border-gray-300 focus:outline-none focus:border-orange-500"
                            />
                            <input
                                type="text"
                                maxLength={1}
                                className="w-12 text-center text-2xl border-b-2 border-gray-300 focus:outline-none focus:border-orange-500"
                            />
                            <input
                                type="text"
                                maxLength={1}
                                className="w-12 text-center text-2xl border-b-2 border-gray-300 focus:outline-none focus:border-orange-500"
                            />
                        </div>


                    ) : (<>
                        <input
                            type="tel"
                            placeholder="+91"
                            className="w-20 px-2 py-2 border-b border-gray-400 rounded focus:outline-none focus:border-black focus:border-b-2"
                            name="countryCode"
                        />
                        <input
                            type="tel"
                            placeholder="Enter your phone number"
                            className="flex-1 px-2 py-2 border-b border-gray-400  rounded focus:outline-none focus:border-black focus:border-b-2"
                            name="phoneNumber"
                        />
                    </>)}
                </div>
                <div className="w-full flex flex-col gap-3 justify-center items-center px-3 mt-9">
                    {isOtpSent && <div className="w-full mx-3 mt-6">
                        <p className="font-medium">Don't receive SMS? <span className="text-secondary font-medium hover:cursor-pointer">Resend Code</span></p>
                    </div>}
                    <button className="w-full mx-3 text-xl bg-secondary p-2 rounded-md text-white font-semibold hover:cursor-pointer" onClick={() => { handleSubmit() }}>
                        {buttonText}
                    </button>
                </div>
            </div>
        </div>
    )
}
