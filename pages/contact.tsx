import SEO from '@/SEO'
import { PAGE_SEO } from '@/SEO/constants'
import ToTopBtn from '@/components/Buttons/toTop'
import ContactFirst from '@/components/Contact/firstBlock'
import ContactForm from '@/components/Contact'

export default function Contact () {
  
  return (
      <>
        <SEO
          title={PAGE_SEO.contact.title}
          description={PAGE_SEO.contact.description}
          keywords={PAGE_SEO.contact.keywords}
          path="/contact"
        />
        <ContactFirst />
        <ContactForm />
        <ToTopBtn />
      </>
  )
}
