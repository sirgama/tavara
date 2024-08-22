import Footer from '@/components/sections/Footer/Footer'
import NavigationBar from '@/components/sections/NavigationBar'
import PackageData from '@/components/sections/SinglePackage/PackageData'
import React from 'react'

const singlepackage = () => {
  return (
    <div>
        <div className='block sm:hidden'>   <NavigationBar /></div>
        <PackageData />
        <Footer />
    </div>
  )
}

export default singlepackage