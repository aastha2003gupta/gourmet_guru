import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { GiChefToque } from 'react-icons/gi';
import Button from './Button';
import './Navbar.css'; // Import custom CSS for additional styling

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className='navbar w-full fixed z-10'>
      <nav className='flex w-full py-4 px-6 md:px-20 items-center justify-between'>
        <a href="/" className='flex items-center text-white text-xl font-semibold cursor-pointer'>
          <GiChefToque className="mr-2" />  {/* Adding the chef's hat icon */}
          Gourmet<span className='font-bold'>Guru</span>
        </a>

        <ul className='hidden md:flex text-white gap-8 text-lg'>
          <li className='hover:text-gray-400'>
            <a href="/">Home</a>
          </li>
          <li className='hover:text-gray-400'>
            <a href="/#recipes">Discover Recipes</a>
          </li>
          <li className='hover:text-gray-400'>
            <a href="/generate-recipe">Create Your Own</a>
          </li>
          <li className='hover:text-gray-400'>
            <a href="/recipe-tutorial">Cooking Guides</a>
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <Button
            title='Join Us'
            containerStyle='bg-transparent border border-white text-white hover:bg-white hover:text-slate-700 rounded-full px-6 py-2 transition duration-300'
            onClick={() => window.location.href = '/signup'}
          />
          <Button
            title='Sign In'
            containerStyle='bg-white text-slate-700 hover:bg-gray-200 rounded-full px-6 py-2 transition duration-300'
            onClick={() => window.location.href = '/login'}
          />
        </div>

        <button className='block md:hidden text-white text-2xl'
          onClick={() => setOpen(prev => !prev)}>
          {open ? <AiOutlineClose /> : <HiMenuAlt3 />}
        </button>
      </nav>
      <div className={`${open ? "flex" : "hidden"} md:hidden flex-col w-full px-4 pt-4 pb-6 text-white gap-4 text-lg bg-black transition duration-300`}>
        <a href="/" className='hover:text-gray-400'>Home</a>
        <a href="/#recipes" className='hover:text-gray-400'>Discover Recipes</a>
        <a href="/generate-recipe" className='hover:text-gray-400'>Create Your Own</a>
        <a href="/recipe-tutorial" className='hover:text-gray-400'>Cooking Guides</a>
        <a href="/signup" className='hover:text-gray-400'>Join Us</a>
        <a href="/login" className='hover:text-gray-400'>Sign In</a>
      </div>
    </header>
  );
};

export default Navbar;


