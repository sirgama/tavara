import React, { useState, useEffect } from 'react';
import "@/styles/globals.css"
import { Inter, Playfair_Display, Poppins } from "next/font/google";
import { useRouter } from 'next/router';
import { ClimbingBoxLoader } from "react-spinners";



const poppins = Poppins({ weight: ["400" ], subsets: ["latin"]})



function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (
    <>
      {loading && <div className='flex items-center justify-center h-screen w-screen ' ><ClimbingBoxLoader color='#EF4444' size={20} /></div>}
      <main className={poppins.className}> 
      <Component {...pageProps} />
    </main>
    </>
  );
}

export default App;