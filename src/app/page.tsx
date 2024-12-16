'use client'

import DontMiss from "../app/components/DontMiss";
import Essential from "../app/components/Essential";
import Featured from "../app/components/Featured";
import GearUp from "../app/components/Gearup";
import Hero from "../app/components/Hero";
import Navigation from "../app/components/Navigation";
import { CarouselSize } from "../app/components/Best"


export default function Home() {
  return (
  <main>
 
    <Hero/>
    <CarouselSize/>
    <Featured/>
    <GearUp/>
    <DontMiss/>
    <Essential/>
    <Navigation/>
  </main>
  )
}