import SEO from '@/SEO'
import { PAGE_SEO } from '@/SEO/constants'
import AboutC from '@/components/AboutUs'
import EmployeesSlider from '@/components/AboutUs/employeesSlider'
import AboutUsFirst from '@/components/AboutUs/firstBlock'
import ToTopBtn from '@/components/Buttons/toTop'
import { BASE_URL } from '@/congif/constans'
import { IBasic, IEmployee } from '@/models'


export default function AboutUs({users}: {users: IBasic<IEmployee[]>}) {
      
  return (
      <>
        <SEO
          title={PAGE_SEO.about.title}
          description={PAGE_SEO.about.description}
          keywords={PAGE_SEO.about.keywords}
          path="/about-us"
        />
        <AboutUsFirst />
        <AboutC />
        <EmployeesSlider data={users?.data?.items} />
        <ToTopBtn />
      </>
  )
}

export async function getServerSideProps() {
  const response = await fetch(
    `${BASE_URL}/users`
  )
  const users = await response.json()
  return {
    props: {
      users
    },
  }
}
