import Image from "next/image";
import Instagram from '../../assets/images/instagram-icon.png'
import DarkLogo from '../../assets/images/logo-dark.png';
import Link from "next/link";

const Footer = () => {

    return (
        <footer className="font-montserrat md:pt-[147px] pt-[34px] md:pb-[40px] pb-[54px] text-[#5E6282] relative">
            <div className="container mx-auto relative z-[3]">
                <div className="grid grid-cols-12">
                    <div className="lg:col-span-3 md:col-span-6 col-span-12">
                        <Image className="md:w-[150px] w-[100px]" src={DarkLogo} alt="East Tour logo" />
                        <p className=" mt-[44px] text-[15px]">Book your trip in minute, get full <br /> Control for much longer.</p>
                    </div>
                    <div className="lg:col-span-6 md:col-span-6 col-span-12 md:my-0 my-7">
                        <div className="grid gap-5 md:grid-cols-3 grid-cols-2">
                            <div>
                                <h2 className="text-[21px] font-bold mb-[34px] text-[#080809]">Company</h2>
                                <Link href="/about-us" className="mb-[12px] inline-block font-medium hover:underline text-[18px]">About</Link><br />
                                <Link href="/contact" className="mb-[12px] inline-block font-medium hover:underline text-[18px]">Contact</Link><br />
                                <a href="#" className="mb-[12px] inline-block font-medium hover:underline text-[18px]">Mobile</a><br />
                            </div>
                            <div>
                                <h2 className="text-[21px] font-bold mb-[34px] text-[#080809]">Contact</h2>
                                <Link href="/all-tours" className="mb-[12px] inline-block font-medium hover:underline text-[18px]">All tours</Link><br />
                                <Link href="/hotels" className="mb-[12px] inline-block font-medium hover:underline text-[18px]">Hotels</Link><br />
                                <Link href="/cities" className="mb-[12px] inline-block font-medium hover:underline text-[18px]">Cities</Link><br />
                            </div>
                            <div className="md:block hidden">
                                <h2 className="text-[21px] font-bold mb-[34px] text-[#080809]">More</h2>
                                <Link href="/mice" className="mb-[12px] inline-block font-medium hover:underline text-[18px]">MICE</Link><br />
                                <Link href="/transports" className="mb-[12px] inline-block font-medium hover:underline text-[18px]">Transport</Link><br />
                                <a href="#" className="mb-[12px] inline-block font-medium hover:underline text-[18px]">Low fare tips</a><br />
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-3 md:col-span-6 col-span-12">
                        <div className="flex">
                            <svg className="cursor-pointer hover:translate-y-[-3px] transition" xmlns="http://www.w3.org/2000/svg" width="61" height="61" viewBox="0 0 61 61" fill="none">
                                <g filter="url(#filter0_d_163_1023)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M30.5 49C41.8218 49 51 39.8218 51 28.5C51 17.1782 41.8218 8 30.5 8C19.1782 8 10 17.1782 10 28.5C10 39.8218 19.1782 49 30.5 49Z" fill="white"/>
                                </g>
                                <path fillRule="evenodd" clipRule="evenodd" d="M33.1084 26.2445C32.7883 26.1432 32.4202 26.0757 32.0842 26.0757C31.6681 26.0757 30.7719 26.3626 30.7719 26.9195V28.2527H32.9003V30.4971H30.7719V36.6905H28.6275V30.4971H27.5713V28.2527H28.6275V27.122C28.6275 25.4176 29.3636 24 31.14 24C31.7481 24 32.8363 24.0338 33.4284 24.2531L33.1084 26.2445Z" fill="#080809"/>
                                <defs>
                                    <filter id="filter0_d_163_1023" x="0" y="0" width="61" height="61" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dy="2"/>
                                    <feGaussianBlur stdDeviation="5"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_163_1023"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_163_1023" result="shape"/>
                                    </filter>
                                </defs>
                            </svg>
                            <Image className="w-[60px] cursor-pointer hover:translate-y-[-3px] transition mx-[10px]" src={Instagram} alt="instagram-icon" />
                            <div className="relative cursor-pointer hover:translate-y-[-3px] transition">
                                <svg xmlns="http://www.w3.org/2000/svg" width="61" height="61" viewBox="0 0 61 61" fill="none">
                                    <g filter="url(#filter0_d_163_1021)">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M30.5 49C41.8218 49 51 39.8218 51 28.5C51 17.1782 41.8218 8 30.5 8C19.1782 8 10 17.1782 10 28.5C10 39.8218 19.1782 49 30.5 49Z" fill="white"/>
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_163_1021" x="0" y="0" width="61" height="61" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                        <feOffset dy="2"/>
                                        <feGaussianBlur stdDeviation="5"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_163_1021"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_163_1021" result="shape"/>
                                        </filter>
                                    </defs>
                                </svg>
                                <svg className="absolute top-[23px] left-[23px]" xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
                                    <path d="M16 1.42062C15.405 1.66154 14.771 1.82123 14.11 1.89877C14.79 1.524 15.309 0.935077 15.553 0.225231C14.919 0.574154 14.219 0.820615 13.473 0.958154C12.871 0.366462 12.013 0 11.077 0C9.261 0 7.799 1.36062 7.799 3.02862C7.799 3.26862 7.821 3.49938 7.875 3.71908C5.148 3.59631 2.735 2.38985 1.114 0.552C0.831 1.00523 0.665 1.524 0.665 2.08246C0.665 3.13108 1.25 4.06062 2.122 4.59877C1.595 4.58954 1.078 4.44831 0.64 4.22585C0.64 4.23508 0.64 4.24708 0.64 4.25908C0.64 5.73046 1.777 6.95262 3.268 7.23415C3.001 7.30154 2.71 7.33385 2.408 7.33385C2.198 7.33385 1.986 7.32277 1.787 7.28215C2.212 8.48123 3.418 9.36277 4.852 9.39138C3.736 10.1972 2.319 10.6828 0.785 10.6828C0.516 10.6828 0.258 10.6717 0 10.6412C1.453 11.5062 3.175 12 5.032 12C11.068 12 14.368 7.38462 14.368 3.384C14.368 3.25015 14.363 3.12092 14.356 2.99262C15.007 2.56615 15.554 2.03354 16 1.42062Z" fill="#080809"/>
                                </svg>
                            </div>
                        </div>
                        <div className="flex mb-[18px] mt-[32px]">
                            <svg className="mr-[16px]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <g clipPath="url(#clip0_163_988)">
                                    <path d="M18.5252 18.5583L19.3418 17.625C20.1918 16.775 20.2335 15.3333 19.3002 14.4167L17.2585 12.8583C16.3835 11.9833 14.9585 11.9833 14.0918 12.8583L12.8168 14.1C9.65016 12.75 7.15016 10.2583 5.90016 7.19166L7.14183 5.91666C7.56683 5.49166 7.80016 4.93333 7.80016 4.33333C7.80016 3.73333 7.56683 3.175 7.17516 2.79166L5.54183 0.674996C4.66683 -0.200004 3.24183 -0.200004 2.39183 0.658329L1.41683 1.50833C0.500164 2.425 -0.00817108 3.65833 -0.00817108 5C-0.00817108 11.4583 8.5585 20.0167 15.0085 20.0167C16.3418 20.0167 17.5835 19.5083 18.5168 18.575L18.5252 18.5583ZM0.833496 4.98333C0.833496 3.86666 1.25016 2.84166 1.99183 2.1L2.97516 1.25C3.52516 0.699996 4.41683 0.699996 4.9335 1.20833L6.56683 3.325C6.8335 3.59166 6.9835 3.94166 6.9835 4.325C6.9835 4.70833 6.8335 5.05833 6.56683 5.325L5.12516 6.8C5.0085 6.91666 4.97516 7.08333 5.0335 7.24166C6.3585 10.7167 9.18349 13.5417 12.7668 14.9833C12.9168 15.0417 13.0918 15.0083 13.2168 14.8917L14.6918 13.45C15.2418 12.9 16.1335 12.9 16.7252 13.4833L18.7668 15.0417C19.3168 15.5917 19.3168 16.4833 18.7502 17.0583L17.9335 17.9917C17.1752 18.75 16.1502 19.1667 15.0335 19.1667C9.06683 19.1667 0.850163 10.95 0.850163 4.98333H0.833496Z" fill="#5E6282"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_163_988">
                                    <rect width="20" height="20" fill="white" transform="matrix(0 1 -1 0 20 0)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <a href="tel:+998917755969" className="text-[18px] inline-block font-medium hover:underline">+998 91 775 59 69</a><br />
                        </div>
                        <div className="flex">
                            <svg className="mr-[16px]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <g clipPath="url(#clip0_163_992)">
                                    <path d="M20 7.91667V16.25C20 18.3167 18.3167 20 16.25 20H3.75C1.68333 20 0 18.3167 0 16.25V6.25C0 4.18333 1.68333 2.5 3.75 2.5H11.25C11.4833 2.5 11.6667 2.68333 11.6667 2.91667C11.6667 3.15 11.4833 3.33333 11.25 3.33333H3.75C2.40833 3.33333 1.275 4.24167 0.933333 5.475L7.93333 12.475C9.06667 13.6167 10.9167 13.6083 12.0583 12.475L15.95 8.45833C16.1083 8.29167 16.375 8.29167 16.5417 8.45C16.7083 8.60833 16.7083 8.875 16.55 9.04167L12.6583 13.0667C11.925 13.8 10.9583 14.1667 10 14.1667C9.04167 14.1667 8.08333 13.8 7.35 13.0667L0.833333 6.55V16.25C0.833333 17.8583 2.14167 19.1667 3.75 19.1667H16.25C17.8583 19.1667 19.1667 17.8583 19.1667 16.25V7.91667C19.1667 7.68333 19.35 7.5 19.5833 7.5C19.8167 7.5 20 7.68333 20 7.91667ZM13.3333 3.33333C13.3333 1.49167 14.825 0 16.6667 0C18.5083 0 20 1.49167 20 3.33333C20 5.175 18.5083 6.66667 16.6667 6.66667C14.825 6.66667 13.3333 5.175 13.3333 3.33333ZM14.1667 3.33333C14.1667 4.70833 15.2917 5.83333 16.6667 5.83333C18.0417 5.83333 19.1667 4.70833 19.1667 3.33333C19.1667 1.95833 18.0417 0.833333 16.6667 0.833333C15.2917 0.833333 14.1667 1.95833 14.1667 3.33333Z" fill="#5E6282"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_163_992">
                                    <rect width="20" height="20" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <a href="mailto:info@easttour.uz" className="text-[18px] inline-block font-medium hover:underline">info@easttour.uz</a><br />
                        </div>
                    </div>
                </div>
                <p className="md:mt-[86px] mt-[30px] text-center relative z-[3] text-[#000] opacity-60 font-medium">Developed by: <a target="_blank" className="text-[] underline" href="https://t.me/sulaymanov_a">ahror</a></p>
            </div>
            <div className="footer-shadow absolute top-0 right-0 left-0 bottom-0 z-[2]"></div>
        </footer>
    )
}

export default Footer;