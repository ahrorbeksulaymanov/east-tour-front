import SEO from '@/SEO'
import { PAGE_SEO } from '@/SEO/constants'
import ToTopBtn from '@/components/Buttons/toTop'
import AllMice from '@/components/Mice'
import MiceFirst from '@/components/Mice/firstBlock'
import { BASE_URL } from '@/congif/constans'
import { IBasic, IMice } from '@/models'

export default function Mice({mice}: {mice: IBasic<IMice[]>}) {
  
  return (
      <>
        <SEO
          title={PAGE_SEO.mice.title}
          description={PAGE_SEO.mice.description}
          keywords={PAGE_SEO.mice.keywords}
          path="/mice"
        />
        <MiceFirst />
        <AllMice data={mice?.data?.items} />
        <ToTopBtn />
      </>
  )
}

export async function getServerSideProps() {
  const miceResponse = await fetch( `${BASE_URL}/mice` )
  const mice = await miceResponse.json()

  return {
    props: {
      mice,
    },
  }
}