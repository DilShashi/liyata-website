import React from 'react'
import Header from '../components/Header/Header'
import Bg_category from '../components/Category/Background'
import Footer from '../Footer/Footer'

function page() {
  return (
    <div>
      {/* Background behind all content */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Bg_category />
      </div>

      <Footer />

    </div>
  )
}

export default page
