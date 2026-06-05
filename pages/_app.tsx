import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";
import Layout from '@/components/Layouts';
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }: AppProps) {    

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);  

  useEffect(() => {
    if (typeof window !== "undefined") {
      // window.replainSettings = { id: '1c198726-9281-400b-a433-095eba6aeacf' };
      window.replainSettings = { id: '5865130c-733c-405a-9e84-129460eabd17' };

      (function(u){
        var s=document.createElement('script');
        s.async=true;
        s.src=u;
        var x=document.getElementsByTagName('script')[0];
        if(x.parentNode) x.parentNode.insertBefore(s,x);

      })('https://widget.replain.cc/dist/client.js')

    }
  }, []);
  
  return (
    <div>
      <NextNProgress color="#FFB800" startPosition={0.3} stopDelayMs={100} height={1} showOnShallow={true} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}
