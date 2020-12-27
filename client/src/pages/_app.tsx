import type { AppProps /*, AppContext */ } from 'next/app'
import { useRouter } from 'next/router'
import Axios from 'axios'

import { AuthProvider } from '../context/auth'

import '../styles/tailwind.css'
import '../styles/icons.css'

import Navbar from '../components/Navbar'

Axios.defaults.baseURL = 'http://localhost:5000/api'
Axios.defaults.withCredentials = true

function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter()
  const authRoutes = ['/register', '/login']
  const authRoute = authRoutes.includes(pathname)

  return (
    <AuthProvider>
      {!authRoute && <Navbar />}
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default App
