import Link from "next/link";
import SEO from "@/SEO";
import { PAGE_SEO } from "@/SEO/constants";

export default function PageNotFound() {
  return (
    <>
      <SEO
        title={PAGE_SEO.notFound.title}
        description={PAGE_SEO.notFound.description}
        noindex
      />
      <Link href={'/'} className="absolute top-[50px] left-[100px] z-10">To main page</Link>
      <iframe className="w-[100%] h-[60vh]" src="https://lottie.host/embed/a6906bd9-27e3-48bc-9777-2ce75f332f02/BVDN1uxPQu.json" title="Page not found animation"></iframe>
    </>
  )
}
