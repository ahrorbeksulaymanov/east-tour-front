import SEO from '@/SEO'
import { PAGE_SEO } from '@/SEO/constants'
import ToTopBtn from '@/components/Buttons/toTop'
import FirstBlock from '@/components/FirstBlock'
import AboutUsBlock from '@/components/aboutUsBlock'
import ContactUsBlock from '@/components/contactUsBlock'
import PerfectCities from '@/components/Cities/perfectCities'
import PhotoGallery from '@/components/photoGallery'
import PopularHotels from '@/components/Hotels/popularHotels'
import PopularTours from '@/components/AllTours/popularTours'

import { IBasic, ICity, IGallery, IHotel, ITour } from '@/models'

export default function Home({cities, hotels, galleries, tours}: {cities: IBasic<ICity[]>, tours: IBasic<ITour[]>, hotels: IBasic<IHotel[]>, galleries: IBasic<IGallery[]> }) {    

  return (
      <>
        <SEO
          title={PAGE_SEO.home.title}
          description={PAGE_SEO.home.description}
          keywords={PAGE_SEO.home.keywords}
          path="/"
        />
        <FirstBlock />
        <PopularTours data={tours?.data?.items} />
        <PopularHotels data={hotels?.data?.items} />
        <PerfectCities data={cities?.data?.items} />
        <AboutUsBlock />
        <PhotoGallery data={galleries?.data?.items} />
        <ContactUsBlock />
        <ToTopBtn />
      </>
  )
}


export async function getServerSideProps() {

  // const tourResponse = await fetch( `${BASE_URL}/tours?size=${6}&page=1` )
  // const tours = await tourResponse.json()

  // const citiesResponse = await fetch( `${BASE_URL}/cities?size=${6}&page=1` )
  // const cities = await citiesResponse.json()

  // console.log("fffffffffffffffffffff",cities)

  // const hotelsResponse = await fetch(`${BASE_URL}/hotels?size=${3}&page=1`)
  // const hotels = await hotelsResponse.json()

  // const galleriesResponse = await fetch(`${BASE_URL}/galleries`)
  // const galleries = await galleriesResponse.json()

  return {
    props: {
      tours: [],
      cities: [],
      hotels: [],
      galleries: []
    }
  };
}