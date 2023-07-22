import React from 'react'

function Navbar() {
  return (
    <>
    <div className="navbar p-3 bg-dark text-light">
        <div className="logo">
            <h1>Simple News App</h1>
        </div>
        <div className="search">
            <input className="p-1" type="text" placeholder="Search Bar" />
        </div>
    </div>
    </>
  )
}

export default Navbar