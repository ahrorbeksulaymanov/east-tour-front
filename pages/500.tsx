import Link from "next/link";
import SEO from "@/SEO";

export default function Error500Page() {
  return (
    <>
      <SEO
        title="Server Error"
        description="Something went wrong. Please return to East Tour and continue planning your Uzbekistan trip."
        noindex
      />
      <Link href={'/'} className="absolute top-[50px] left-[100px] z-10">To main page</Link>
      <iframe className="w-[100%] h-[60vh]" src="https://lottie.host/embed/36fc402c-8357-4c45-b94b-25636eabe268/QApUVLLtY5.json" title="Server error animation"></iframe>
    </>
  )
}
