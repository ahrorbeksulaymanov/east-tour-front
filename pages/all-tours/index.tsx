import SEO from '@/SEO'
import { PAGE_SEO } from '@/SEO/constants'
import AllTours from '@/components/AllTours'
import AllToursFirst from '@/components/AllTours/firstBlock'
import PopularCitiesSlider from '@/components/AllTours/citiesSlider'
import ToTopBtn from '@/components/Buttons/toTop'
import { BASE_URL } from '@/congif/constans'
import { IBasic, ICity, ITour } from '@/models'

export default function Tours({tours, cities}: {tours: IBasic<ITour[]>, cities: IBasic<ICity[]>}) {    
  
  return (
      <>
        <SEO
          title={PAGE_SEO.tours.title}
          description={PAGE_SEO.tours.description}
          keywords={PAGE_SEO.tours.keywords}
          path="/all-tours"
        />
        <AllToursFirst />
        <AllTours data={tours?.data?.items} />
        <PopularCitiesSlider data={cities?.data?.items} />
        <ToTopBtn />
      </>
  )
}

export async function getServerSideProps() {
  const response = await fetch(`${BASE_URL}/tours`)
  const tours = await response.json()

  const citiesResponse = await fetch(`${BASE_URL}/cities`)
  const cities = await citiesResponse.json()

  return {
    props: {
      tours,
      cities
    },
  }
}