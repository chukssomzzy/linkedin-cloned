import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next'


function MyApp({ Component, pageProps }: AppProps) {
  return  (
      <ThemeProvider attribute='class'> 
    <Component {...pageProps} /> 
      </ThemeProvider>
          )
}

export default MyApp
