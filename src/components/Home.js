import React from 'react'
import Content from './Content';
import Hot from './Hot';
import Navbar from './Navbar';
import Slider from './Slider';
import Footer from './Footer';
import reality from '../data/reality.json'
import movies from '../data/movies.json'
function Home() {
  return (
    <>
      <Navbar/>
      <Slider/>
      <Hot/>
      <Content data={reality} title={'Reality Shows'}/>
      <Content data={movies} title={'English Shows'}/>
      <Footer/>
    </>
  )
}

export default Home