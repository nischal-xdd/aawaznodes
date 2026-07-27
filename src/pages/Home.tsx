import AnnouncementBar from '../components/home/AnnouncementBar'
import HeroSection from '../components/home/HeroSection'
import FeaturesGrid from '../components/home/FeaturesGrid'
import DashboardShowcase from '../components/home/DashboardShowcase'
import TrustSection from '../components/home/TrustSection'
import TeamSection from '../components/home/TeamSection'

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <HeroSection />
      <FeaturesGrid />
      <DashboardShowcase />
      <TrustSection />
      <TeamSection />
    </>
  )
}
