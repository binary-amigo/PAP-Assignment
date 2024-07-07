import React from 'react'
import Image from 'next/image'
import logo from '../assets/Logo.png'
import Right from '../assets/Right.png'

const Navbar = () => {
  return (
    <div className='bg-white'>
      <div className="flex justify-between py-6 px-40">
      <div className="p-4">
        <Image src={logo} alt="logo" width={150} height={150} />
      </div>
      <div className="navbar-items flex justify-center items-center gap-8">
        <ul className="flex gap-8">
          <li>Home</li>
          <li>Features</li>
          <li>Community</li>
          <li>Blog</li>
          <li>Pricing</li>
        </ul>
          <button className="pt-3 pb-3 pl-4 pr-4 flex btn btn-primary text-white bg-[#4CAF4F] rounded-md hover:ease-in-out hover:bg-[#66BB69]">
            Register Now &ensp;
          <Image src={Right} />
          </button>
      </div>
    </div>
    </div>
  )
}

export default Navbar
