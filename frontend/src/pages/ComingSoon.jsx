
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function ComingSoon() {
  return (
    <div>
        <Header/>
            <div className="h-screen flex flex-col items-center justify-center">
                <h1 className="text-6xl font-poppins">This page is under construction. Coming soon!</h1>
                <img src="/images/construction.jpg" class="h-1/2" alt="RebbyChayLogo" />
            </div>
        
        
        <Footer/>
    </div>
  )
}

export default ComingSoon