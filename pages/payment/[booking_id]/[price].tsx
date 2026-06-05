import SEO from "@/SEO";
import { PAGE_SEO } from "@/SEO/constants";
import ToTopBtn from "@/components/Buttons/toTop";
import PaymentComponent from "@/components/TourView/payment";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function PaymentPage() {
    
    const router = useRouter();

    useEffect(() => {
        const isChecked = localStorage.getItem("phone_is_checked")
        if(isChecked !== "1") {
            return router.back()
        }
    }, [])

    return (
        <>
            <SEO
                title={PAGE_SEO.payment.title}
                description={PAGE_SEO.payment.description}
                noindex
            />
            <PaymentComponent />
            <ToTopBtn />
        </>
    )
}