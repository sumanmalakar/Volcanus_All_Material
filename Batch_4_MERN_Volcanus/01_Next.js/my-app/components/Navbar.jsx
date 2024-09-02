import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='nav'>
        <div className="left">WDM</div>
        <div className="right">
         <Link href={'/about'} className="items">About</Link>
         <Link href={'/contact'} className="items">Contact</Link>
         <Link href={'/team'} className="items">Team</Link>
        </div>
    </div>
  )
}

export default Navbar