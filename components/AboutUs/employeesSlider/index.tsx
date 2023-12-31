

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';
import useWindowSize from '@/custom-hooks/useWindowSize';
import EmployeeCard from '@/components/Cards/EmployeeCard';
import { IEmployee } from '@/models';

export default function EmployeesSlider({data} : {data: IEmployee[]}) {
  
  const swiperRef = useRef<any>();
  const {width} = useWindowSize()

  return (
    <div className='pt-[65px] pb-[60px] employees-slider'>
      <div className='container mx-auto'>
        <h1 className='lg:text-[42px] md:text-[35px] sm:text-[30px] text-[24px] font-noto font-normal'>Our employees</h1>
        <Swiper
          onSwiper={(swiper) => { 
            swiperRef.current = swiper;
          }}
          pagination={{
            clickable: true,
          }}
          slidesPerView={width >  1300 ? 4 : width >  992 ? 3 : width >  576 ? 2 : 1}
          spaceBetween={0}
          loop={true}
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            waitForTransition: true
          }}
          
        >
          {                
            data?.map((item: IEmployee, index: number) => (
              <SwiperSlide className='p-3 mb-12' key={index}>
                <EmployeeCard item={item} isHover={false} />
              </SwiperSlide>
            ))
          }
        </Swiper>
        <div className="relative bg-white z-20">
          <div className='absolute right-0 md:top-[-45px] top-[-40px] z-10'>
            <button onClick={() => swiperRef.current.slidePrev()} className='hover:bg-[#fff8dd] slider-button md:w-[48px] w-[38px] md:h-[48px] h-[38px] md:mr-4 mr-2'>
              <svg className='mx-auto md:w-[24px] w-[20px] md:h-[24px] h-[20px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <path className='arrow-icon' d="M19 10.9998H7.14L10.77 6.63979C10.9397 6.43557 11.0214 6.17229 10.997 5.90786C10.9726 5.64344 10.8442 5.39953 10.64 5.22979C10.4358 5.06005 10.1725 4.97839 9.90808 5.00277C9.64365 5.02715 9.39974 5.15557 9.23 5.35979L4.23 11.3598C4.19636 11.4075 4.16628 11.4576 4.14 11.5098C4.14 11.5598 4.14 11.5898 4.07 11.6398C4.02467 11.7544 4.00094 11.8765 4 11.9998C4.00094 12.1231 4.02467 12.2451 4.07 12.3598C4.07 12.4098 4.07 12.4398 4.14 12.4898C4.16628 12.5419 4.19636 12.5921 4.23 12.6398L9.23 18.6398C9.32402 18.7527 9.44176 18.8434 9.57485 18.9057C9.70793 18.9679 9.85309 19 10 18.9998C10.2337 19.0002 10.4601 18.9189 10.64 18.7698C10.7413 18.6858 10.825 18.5827 10.8863 18.4664C10.9477 18.35 10.9855 18.2227 10.9975 18.0918C11.0096 17.9608 10.9957 17.8287 10.9567 17.7031C10.9176 17.5775 10.8542 17.4608 10.77 17.3598L7.14 12.9998H19C19.2652 12.9998 19.5196 12.8944 19.7071 12.7069C19.8946 12.5194 20 12.265 20 11.9998C20 11.7346 19.8946 11.4802 19.7071 11.2927C19.5196 11.1051 19.2652 10.9998 19 10.9998Z" />
              </svg>
            </button>

            <button onClick={() => swiperRef.current.slideNext()} className='hover:bg-[#fff8dd] slider-button md:w-[48px] w-[38px] md:h-[48px] h-[38px] md:ml-4 ml-2'>
              <svg className='mx-auto md:w-[24px] w-[20px] md:h-[24px] h-[20px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <path className='arrow-icon' d="M5 10.9998H16.86L13.23 6.63979C13.0603 6.43557 12.9786 6.17229 13.003 5.90786C13.0274 5.64344 13.1558 5.39953 13.36 5.22979C13.5642 5.06005 13.8275 4.97839 14.0919 5.00277C14.3563 5.02715 14.6003 5.15557 14.77 5.35979L19.77 11.3598C19.8036 11.4075 19.8337 11.4576 19.86 11.5098C19.86 11.5598 19.86 11.5898 19.93 11.6398C19.9753 11.7544 19.9991 11.8765 20 11.9998C19.9991 12.1231 19.9753 12.2451 19.93 12.3598C19.93 12.4098 19.93 12.4398 19.86 12.4898C19.8337 12.5419 19.8036 12.5921 19.77 12.6398L14.77 18.6398C14.676 18.7527 14.5582 18.8434 14.4252 18.9057C14.2921 18.9679 14.1469 19 14 18.9998C13.7663 19.0002 13.5399 18.9189 13.36 18.7698C13.2587 18.6858 13.175 18.5827 13.1137 18.4664C13.0523 18.35 13.0145 18.2227 13.0025 18.0918C12.9904 17.9608 13.0043 17.8287 13.0433 17.7031C13.0824 17.5775 13.1458 17.4608 13.23 17.3598L16.86 12.9998H5C4.73478 12.9998 4.48043 12.8944 4.29289 12.7069C4.10536 12.5194 4 12.265 4 11.9998C4 11.7346 4.10536 11.4802 4.29289 11.2927C4.48043 11.1051 4.73478 10.9998 5 10.9998Z" />
              </svg> 
            </button>
          </div>
        </div>

        <iframe 
          className='w-[100%] mt-16 h-[400px]'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23968.65172389776!2d69.32228464496731!3d41.32884185821204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b534175ed31%3A0x52a8f9d9414a2ad8!2sTUIT!5e0!3m2!1sen!2s!4v1699624265009!5m2!1sen!2s" 
          style={{border: 0}} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
