import {assets} from '../assets/assets.js'
import {navItems} from '../constants/index.jsx'
import {Menu, X} from 'lucide-react'
import {useState} from 'react'

const Navbar = () => {

    const [MobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
        const toggleNavbar = () => {
            setIsMobileDrawerOpen(!MobileDrawerOpen);
        }
    return (
    <nav className="sticky top-0 z-50 py-1 border-b border-[#004B6E] backdrop-blur bg-white">
        <div className="container mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    <img className="h-11 w-11" src={assets.Logo} alt="logo" />
                    <span className='text-4xl tracking-tight px-3 text-[#004B6E]'>AR Treasure Hunt</span>
                </div>
                <ul className='hidden text-3xl lg:flex ml-14 space-x-8 text-[#004B6E]'>
                    {navItems.map((item, index) => (
                        <li key = {index}>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                    <div className="hidden lg:flex justify-center items-center">
                        <a href="#" className='py-1 px-3 border rounded-lg bg-[#004B6E] text-white'>Sponser Us</a>
                    </div>
                </ul>
                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick = {toggleNavbar}>
                        {MobileDrawerOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>
            {MobileDrawerOpen &&(
                <div className="fixed right-0 z-20 bg-white w-full p-12 flex flex-col justify-center items-center text-right lg:hidden text-3xl text-[#004B6E]">
                    <ul>
                        {navItems.map((item, index) => (
                            <li key = {index}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                        <div className="flex mt-3 ">
                            <a href="#" className='py-1 px-3 border rounded-lg bg-[#004B6E] text-white'>Sponser Us</a>
                        </div>
                    </ul>
                </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar