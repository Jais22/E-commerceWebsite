import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoCart } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi"
import { RxCross2 } from "react-icons/rx"
import { auth } from '../../firebase/FireBaseAuth';
import toast from 'react-hot-toast';

const Navbar = ({ cart, userName }) => {
    const [isOpen, setIsOpen] = useState(false)
    const ToggleChange = () => {
        isOpen === false ? setIsOpen(true) : setIsOpen(false);
    }
    const handleLogOut = () => {
        auth.signOut().then(() => {
            toast.success("logOut Successfully");

        }).catch((error) => {
            toast.error(error);

        })

    }
    return (
        <>
            <div>
                <header className='bg-white border-b border-gray-200 fixed top-0 w-full z-10'>
                    <div className='container mx-auto flex justify-between items-center p-5'>
                        <div>
                            <Link to="/">
                                <h3 className='font-bold text-2xl'>E-<span className='text-red-500'>Shopping</span></h3>

                            </Link>
                        </div>
                        <div className='hidden md:block '>
                            <ul className='flex items-center text-lg justify-center font-semibold' >
                                <Link to="/">
                                    <li className='mr-5 hover:text-gray-900 cursor-pointer'>Home</li>
                                </Link>

                                <Link to='/allProducts'><li className='mr-5 hover:text-gray-900 cursor-pointer'>All Products</li></Link>
                                <Link to='/about'>
                                    <li className='mr-5 hover:text-gray-900 cursor-pointer'>About</li>
                                </Link>
                                <Link to='/contact'>
                                    <li className='mr-5 hover:text-gray-900 cursor-pointer'>Contact</li>
                                </Link>

                            </ul>
                        </div>

                        {
                            isOpen ?
                                (
                                    <div>
                                        <ul className='flex flex-col gap-10 text-2xl absolute top-[73px] left-0 h-screen w-full z-10 bg-red-500 text-white items-center justify-center font-semibold'>
                                            <Link to="/"  onClick={ToggleChange}>
                                                <li className='mt-5 hover:text-gray-900 cursor-pointer'>Home</li>
                                            </Link>
                                            <Link to="/allProducts"  onClick={ToggleChange}>
                                                <li className='mt-5 hover:text-gray-900 cursor-pointer'>All Products</li>
                                            </Link>
                                            <Link to="/about"  onClick={ToggleChange}>
                                                <li className='mt-5 hover:text-gray-900 cursor-pointer'>About</li>
                                            </Link>
                                            <Link to="/contact"  onClick={ToggleChange}>
                                                <li className='mt-5 hover:text-gray-900 cursor-pointer'>Contact</li>
                                            </Link>
                                        </ul>
                                        <button className='absolute top-[75px] z-10 right-0 text-white py-2 px-4 cursor-pointer '>
                                            <RxCross2 size={30} onClick={ToggleChange} />
                                        </button>
                                    </div>

                                )
                                : ("")}

                        <div className='flex justify-center items-center gap-3'>
                            {
                                userName ? (
                                    <>
                                        <Link to='/login'>
                                            <button
                                                className=' bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base font-semibold'
                                                onClick={handleLogOut}>
                                                LogOut</button>
                                        </Link>
                                        <span>{userName}</span>
                                    </>
                                ) : (
                                    <Link to='/login'>
                                        <button className=' bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base font-semibold'>
                                            Login</button>
                                    </Link>
                                )
                            }

                            <Link to='/cart'>
                                <button className='relative'>
                                    <span className='absolute bg-[red] top-[-5px] right-0 text-white px-1 
                                rounded-full text-xs'>{cart.length}</span>
                                    <IoCart size={25} />
                                </button>
                            </Link>
                            {
                                isOpen ? "" : <button className='md:hidden' onClick={ToggleChange}
                                ><GiHamburgerMenu size={25} /></button>
                            }
                        </div>
                    </div>
                </header>
            </div>

        </>
    )
}

export default Navbar