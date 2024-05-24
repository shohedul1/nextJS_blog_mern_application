import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='mt-40'>
      <h1 className={"lg:text-7xl text-4xl "}>Our Works</h1>
      {children}
    </div>
  )
}

export default Layout