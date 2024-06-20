
import NextNProgress from "nextjs-progressbar";
import MainLayout from '@/components/layout/main-layout'
 import "../styles/globals.css"
 import "../styles/colm.css"
import { QueryClient, QueryClientProvider } from 'react-query'

import { ReactQueryDevtools } from 'react-query/devtools';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 const queryClient = new QueryClient()
export default function App({ Component, pageProps }) {
  return (
    <main >
         <NextNProgress
          color="orange"
          height={4}
          options={{ showSpinner: false }}
        />
      <QueryClientProvider client={queryClient}>
          <MainLayout >
          <Component {...pageProps} />
          <ToastContainer  
            position="bottom-right"
            autoClose={1000}
            theme="colored"
          />
            
          </MainLayout>
          <ReactQueryDevtools initialIsOpen={false} />
          
      </QueryClientProvider>
</main>
  )
 
}
