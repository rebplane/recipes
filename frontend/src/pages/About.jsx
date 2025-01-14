
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function About() {
  return (
    <div class="dark:text-white dark:bg-gray-950">
        <Header/>
            <div className="h-screen flex flex-col mt-20 ml-20 md:mb-0 mb-96 max-md:mx-5 ">
                <div className="md:flex">
                        <img src="/images/rebbychay.png" class="md:h-3/4 h-96 w-96 border border-black" alt="RebbyChayLogo" />
                    <div className="md:ml-20 h-full">
                        <h1 className="text-6xl font-poppins md:mt-0 mt-10">About Us</h1>
                        <p className="text-2xl mt-10 md:w-1/2">Hello! Thanks for visiting our website. We are Rebby and Chay, two software developers in Canada. Rebby grew up in Canada with Vietnamese parents, and Chay grew up in Greece before moving to Canada a few years ago. </p>
                        <p className="text-2xl mt-10 md:w-1/2">Growing up with both Chinese and Greek backgrounds, we have both eaten a wide variety of food over the years. With one of us being lactose intolerant, and previously needing to be on a FODMAP + elimination diet, we are very aware of food intolerances and how they can affect people, and make eating and cooking feel hopeless.</p>
                        <p className="text-2xl mt-10 md:w-1/2">Our recipes are those that we have cooked over the years while trying to find foods that both of us can eat while still being delicious. We hope that you enjoy our recipes!</p>
                    </div>
                </div>
            </div>
        
        
        <Footer/>
    </div>
  )
}

export default About