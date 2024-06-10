import "@/styles/globals.css";
import { Inter, Playfair_Display } from "next/font/google";




const playfair_display = Playfair_Display({ weight: ["400" ], subsets: ["cyrillic"]})

export default function App({ Component, pageProps }) {
  return (
    <main className={playfair_display.className}>
      <Component {...pageProps} />;
    </main>
  )
}
