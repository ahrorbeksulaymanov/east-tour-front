import SEO from '@/SEO'
import { PAGE_SEO } from '@/SEO/constants'
import ToTopBtn from '@/components/Buttons/toTop'
import AllTransports from '@/components/Transports'
import TransportFirst from '@/components/Transports/firstBlock'
import { BASE_URL } from '@/congif/constans'
import { IBasic, ITransport, ITransportType } from '@/models'


export async function getServerSideProps(context: any) {

  const { transportTypeId } = context.query;

  const transportTypeResponse = await fetch( `${BASE_URL}/transport-types` )
  const transportTypes = await transportTypeResponse.json()

  const transportsResponse = await fetch( `${BASE_URL}/transports${transportTypeId ? `?transportTypeId=${transportTypeId}` : ""}` )
  const transports = await transportsResponse.json()

  return {
    props: {
      transportTypes,
      transports,
    },
  }
}


export default function Transports ({transportTypes, transports}: {transportTypes: {message: string, status: number, data: ITransportType[]}, transports: IBasic<ITransport[]>}) {
  
  return (
      <>
        <SEO
          title={PAGE_SEO.transports.title}
          description={PAGE_SEO.transports.description}
          keywords={PAGE_SEO.transports.keywords}
          path="/transports"
        />
        <TransportFirst />
        <AllTransports transportTypes={transportTypes?.data} transports={transports?.data?.items} />
        <ToTopBtn />
      </>
  )
}
