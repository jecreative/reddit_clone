import type { AppProps /*, AppContext */ } from 'next/app'
import { useRouter } from 'next/router'
import Axios from 'axios'

import '../styles/tailwind.css'
import Navbar from '../components/Navbar'

Axios.defaults.baseURL = 'http://localhost:5000/api'
Axios.defaults.withCredentials = true

function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter()
  const authRoutes = ['/register', '/login']
  const authRoute = authRoutes.includes(pathname)

  return (
    <>
      {!authRoute && <Navbar />}
      <Component {...pageProps} />
    </>
  )
}

export default App
