import React from 'react'

const Layout = ({children}) => {
  return (
    <div>
      <h1 className={"text-7xl"}>Our Works</h1>
      {children}
    </div>
  )
}

export default Layout