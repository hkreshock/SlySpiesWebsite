import { useState, useEffect } from 'react'
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { Vision } from './components/vision'
import { Team } from './components/team'
import { Lore } from './components/lore'
import { Gallery } from './components/gallery'
import { Footer } from './components/footer'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Vision data={landingPageData.Vision} />
      <Lore data={landingPageData.Lore} />
      <Team data={landingPageData.Team} />
      <Gallery />
      <Footer />
    </div>
  )
}

export default App
