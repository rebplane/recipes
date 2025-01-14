
import React from 'react'
import Header from '../components/Header'
import Collection from '../components/Collection'
import Footer from '../components/Footer'

function RecipeList() {
  return (
    <div class="dark:bg-gray-950">
        <Header/>
        <Collection/>
        <Footer/>
    </div>
  )
}

export default RecipeList