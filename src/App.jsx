import './App.css'
import Companylogo from './components/Companylogo'
import FeatureSection from './components/FeatureSection'
import Hero from './components/Hero'
import './components/Navbar'
import Navbar from './components/Navbar'
import PurposeSection from './components/PurposeSection'
import Schedule from './components/Schedule'
import Monitor from './components/Monitor'
import './index.css'
import Price from './components/Price'
import Service from './components/Service'
import { OurTeam } from './components/Ourteam'
import Team from './components/Test'
import Test from './components/Test'
import Footer from './components/Footer'
import NewsletterSection from './components/NewsletterSection'
import Work from './components/Work'

function App() {
  return (
    <main className='relative min-h-screen overflow-x-hidden'>
      {/* Gradient background */}
      <div className='absolute -top-28 -left-28 w-[528px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] z-0' />
      
      <Navbar/>
      <Hero/>
      <Companylogo/>
      <PurposeSection/>
      <FeatureSection/>
      <Work/>
      <Schedule/>
      <Monitor/>
      <Price/>
      <Service/>
      <OurTeam/>
      <Test/>
      <NewsletterSection/>
      <Footer/>
    </main>
  )
}

export default App