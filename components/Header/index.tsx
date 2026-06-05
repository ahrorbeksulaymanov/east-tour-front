import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useScrollTop from "@/custom-hooks/useOnscrollTopHeight";
import Image from "next/image";
import LightLogo from '../../assets/images/logo-light.png';
import DarkLogo from '../../assets/images/logo-dark.png';
import Link from "next/link";
import SidebarDrawer from "../Sidebar";
import useWindowSize from "@/custom-hooks/useWindowSize";

const HeaderClient = () => {

    const router = useRouter();
    const scrollHeight = useScrollTop();
    const {width} = useWindowSize()
    const [openSidebar, setOpenSidebar] = useState(false);

    const googleTranslateElementInit = () => {
        // @ts-ignore
        new window.google.translate.TranslateElement({
            pageLanguage: 'en',
            includedLanguages : "en,fr,de,es,ru,zh-CN", // include this for selected languages
        },
        'google_translate_element');
    }

    useEffect(() => {
        if(typeof window !== undefined){
            let addScript = document.createElement('script');
            addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
            addScript.async = true;
            addScript.defer = true;
            document.body.appendChild(addScript);
            // @ts-ignore
            window.googleTranslateElementInit = googleTranslateElementInit;

            return () => {
                document.body.removeChild(addScript); // Cleanup
            };

        }
    }, [typeof window])

    useEffect(() => {
        if(width < 992){
            setOpenSidebar(false)
        }
    }, [width])

    return ( 
        <div className={`${scrollHeight > 150 ? "bg-white text-second-color shadow-sm" : "bg-transparent text-white"} fixed transition right-0 left-0 top-0 z-[4]`}>
            <div className="container mx-auto">
                <header className="flex justify-start items-start">
                    <Link href="/">
                        <Image 
                            className="xl:w-[150px] md:w-[120px] w-[100px] my-[15px] flex-shrink-0" 
                            src={scrollHeight > 150 ? DarkLogo : LightLogo} 
                            alt="East Tour - Uzbekistan travel agency logo" 
                            priority 
                            width={150}
                            height={120}
                        />
                    </Link>
                    <div className="lg:flex hidden items-center md:text-[16px] text-[14px] xl:ml-[100px] ml-[50px]">
                        <Link href="/" className={`${router.pathname == "/" ? "active-link" : ""} xl:mr-[48px] lg:mr-[30px] md:mr-[15px] pt-[30px] relative`}  >Home</Link>
                        <Link href="/all-tours" className={`${router.pathname == "/all-tours" ? "active-link" : ""} xl:mr-[48px] lg:mr-[30px] md:mr-[15px] pt-[30px] relative`}>All tours</Link>
                        <Link href="/hotels" className={`${router.pathname == "/hotels" ? "active-link" : ""} xl:mr-[48px] lg:mr-[30px] md:mr-[15px] pt-[30px] relative`}>Hotels</Link>
                        <Link href="/cities" className={`${router.pathname == "/cities" ? "active-link" : ""} xl:mr-[48px] lg:mr-[30px] md:mr-[15px] pt-[30px] relative`}>Cities</Link>
                        <Link href="/mice" className={`${router.pathname == "/mice" ? "active-link" : ""} xl:mr-[48px] lg:mr-[30px] md:mr-[15px] pt-[30px] relative`}>MICE</Link>
                        <Link href="/transports" className={`${router.pathname == "/transports" ? "active-link" : ""} xl:mr-[48px] lg:mr-[30px] md:mr-[15px] pt-[30px] relative`}>Transport</Link>
                        <Link href="/about-us" className={`${router.pathname == "/about-us" ? "active-link" : ""} xl:mr-[48px] lg:mr-[30px] md:mr-[15px] pt-[30px] relative`}>About us</Link>
                        <Link href="/contact" className={`${router.pathname == "/contact" ? "active-link" : ""} pt-[30px] relative`} >Contact</Link>
                    </div>
                    <div className={`lg:block hidden mt-[33px] ml-auto ${scrollHeight > 150 ? "language-select" : ""}`} id="google_translate_element"> </div>
                    <div onClick={() => setOpenSidebar(true)} className={`lg:hidden block p-3 bg-white ml-auto ${scrollHeight > 150 ? "my-[10px]" : "mt-[21px]"} bg-opacity-60 rounded-full cursor-pointer`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path className={`${scrollHeight < 150 ? "fill-white" : "fill-second-color"}`} d="M22.5 10.5H1.5C0.671578 10.5 0 11.1716 0 12C0 12.8284 0.671578 13.5 1.5 13.5H22.5C23.3284 13.5 24 12.8284 24 12C24 11.1716 23.3284 10.5 22.5 10.5Z" fill="white"/>
                            <path className={`${scrollHeight < 150 ? "fill-white" : "fill-second-color"}`} d="M1.5 6.5H22.5C23.3284 6.5 24 5.82842 24 5C24 4.17158 23.3284 3.5 22.5 3.5H1.5C0.671578 3.5 0 4.17158 0 5C0 5.82842 0.671578 6.5 1.5 6.5Z" fill="white"/>
                            <path className={`${scrollHeight < 150 ? "fill-white" : "fill-second-color"}`} d="M22.5 17.5H1.5C0.671578 17.5 0 18.1716 0 19C0 19.8284 0.671578 20.5 1.5 20.5H22.5C23.3284 20.5 24 19.8284 24 19C24 18.1716 23.3284 17.5 22.5 17.5Z" fill="white"/>
                        </svg>
                    </div>
                </header>
            </div>
            <SidebarDrawer openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
        </div>
    )
}

export default HeaderClient;


