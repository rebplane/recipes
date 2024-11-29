
import React from 'react'
import Header from '../components/Header'
import Featured from '../components/Featured'
import NewRecipes from '../components/NewRecipes'

function Home() {
  return (
    <div>
        <Header/>
        <Featured/>
        <hr class="mt-5"></hr>
        <NewRecipes/>
    </div>
  )
}

export default Home