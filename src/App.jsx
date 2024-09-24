import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Card from '../components/Card'
import cardData from "../data.js";

function App() {
  const cardElements = cardData.map((card) => <Card key = {card.id} item = {card} />)

  return (
    <>
      <Navbar/>
      <Hero/>
      <section className="cardsList">
        {cardElements}
      </section>
    </>
  )
}

export default App
