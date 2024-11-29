
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
        <hr class="mt-10"></hr>
        <NewRecipes/>
        <hr class="mt-10"></hr>
        <Collection/>
        <Footer/>
    </div>
  )
}

export default Home