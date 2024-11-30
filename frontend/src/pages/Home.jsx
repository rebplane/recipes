
import React from 'react'
import Header from '../components/Header'
import Featured from '../components/Featured'
import NewRecipes from '../components/NewRecipes'
import Collection from '../components/Collection'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
        <Header/>
        <Featured/>
        <NewRecipes/>
        <Collection/>
        <Footer/>
    </div>
  )
}

export default Home