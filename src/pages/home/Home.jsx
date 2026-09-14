import React from 'react'
import Header from './header/Header'
import Categories from './Categories/Categories'
import PopularC from './PopularC/PopularC'
import About from './About/About'
import EventMain from './EventMain/EventMain'
import OurTech from './OurTech/OurTech'
import BlogPost from './BlogPost/BlogPost'
import Supscripe from './Supscripe/Supscripe'


export default function Home() {
  return (
    <section>
      <Header />
      <Categories />
      <PopularC />
      <About />
      <EventMain />
      <OurTech />
      <BlogPost/>
      <Supscripe/>
    </section>
  )
}
