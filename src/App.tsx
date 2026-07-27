import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import FreeHosting from './pages/FreeHosting'
import PremiumHosting from './pages/PremiumHosting'
import Features from './pages/Features'
import Community from './pages/Community'
import Login from './pages/Login'
import StartFree from './pages/StartFree'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/free-hosting" element={<FreeHosting />} />
          <Route path="/premium-hosting" element={<PremiumHosting />} />
          <Route path="/features" element={<Features />} />
          <Route path="/community" element={<Community />} />
          <Route path="/login" element={<Login />} />
          <Route path="/start-free" element={<StartFree />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
