import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CartProvider } from './lib/cart'
import { startLenis } from './lib/scroll'
import { MQ_MOTION_OK } from './lib/env'
import PillStage from './three/PillStage'
import AnnouncementBar from './components/AnnouncementBar'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Benefits from './components/Benefits'
import Ingredients from './components/Ingredients'
import Science from './components/Science'
import Reviews from './components/Reviews'
import Offer from './components/Offer'
import Guarantee from './components/Guarantee'
import Faq from './components/Faq'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'
import StickyCart from './components/StickyCart'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  // Lenis lives inside gsap.matchMedia: created only when motion is allowed,
  // auto-destroyed (cleanup returned below) if the preference flips live.
  useLayoutEffect(() => {
    const mm = gsap.matchMedia()
    mm.add(MQ_MOTION_OK, () => startLenis())
    return () => mm.revert()
  }, [])

  return (
    <CartProvider>
      <a className="skip-link" href="#offer">
        Skip to the offer
      </a>
      <AnnouncementBar />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Benefits />
        <Ingredients />
        <Science />
        <Reviews />
        <Offer />
        <Guarantee />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <PillStage />
      <StickyCart />
    </CartProvider>
  )
}
