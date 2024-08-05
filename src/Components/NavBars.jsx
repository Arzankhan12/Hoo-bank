import { useState } from 'react'
import {logo,menu,close} from '../assets'
import {navLinks} from '../Constants'

const NavBars = () => {

  const [toggle,setToggle] =useState(false)

  return (
    <nav className='w-full py-6 justify-between items-center navbar'>
       <img src={logo} alt="Hoo Bank" className='w-[124px] h-[32]' />

       <ul className='list-none sm:flex hidden  items-center justify-end flex-1 -mt-7'>
       {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white
             ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}> 
              <a href={`#${nav.id}`}>
              {nav.title}
              </a>
          </li>
))}
       </ul>

       <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
         src={toggle? close : menu}
         alt="menu" className='-mt-7 w-[28px] h-[28px] object-contain'
         onClick={()=>{
          setToggle((prev)=> !prev)}
        }
         />
         <div className={`${toggle? 'flex' : 'hidden'} p-10 bg-black-gradient absolute top-20 right-0 mx-3 my-2 min-w-[140px] rounded-xl sidebar`}>

              <ul className='list-none flex flex-col items-center justify-end flex-1 -mt-7'>
            {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[13px] text-white
                  ${index === navLinks.length - 1 ? "mr-0" : "mb-5"}`}> 
                  <a href={`#${nav.id}`}>
                  {nav.title}
                   </a>
                </li>
        ))}
       </ul>

         </div>
       </div>
  </nav>
  )
}

export default NavBars