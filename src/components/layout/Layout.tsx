import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import CursorLight from '../effects/CursorLight'
import AmbientBackground from '../effects/AmbientBackground'

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="relative min-h-screen">
      <div className="site-background" />
      <CursorLight />
      <AmbientBackground />
      <Navbar />
      <main className="pt-16 md:pt-18">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
