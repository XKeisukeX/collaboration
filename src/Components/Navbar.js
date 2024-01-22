import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function Navbar() {

    const [nav, setNav] = useState(false);

    var Links = [
        {name:"Home", link:"/"},
        {name:"Gallery", link:"#gallery"},
        {name:"Deals", link:"#deals"},
        {name:"Contacts", link:"#contacts"},
    ];

    const handleNav = () => {
        setNav(false);
    }

    return (
        <div className='w-full min-h-[50px] flex justify-between items-center absolute z-10 bg-gray-700/80 text-white py-2'>
            <ul className='hidden sm:flex px-4 space-x-4'>
                <li><a href="/" className='font-medium'>Home</a></li>
                <li><a href="#gallery" className='font-medium'>Gallery</a></li>
                <li><a href="#deals" className='font-medium'>Deals</a></li>
                <li><a href="#contacts" className='font-medium'>Contacts</a></li>
            </ul>
            <div>
                <i className="fa fa-facebook-f mx-4"></i>
                <i className="fa fa-instagram mx-4"></i>
                <i className="fa fa-twitter mx-4"></i>
                <i className="fa fa-google-plus mx-4"></i>
            </div>
            <div className='sm:hidden z-10 mr-4 w-8 h-8 cursor-pointer' onClick={() => setNav(!nav)}>
                {
                    nav ? <XMarkIcon /> : <Bars3BottomRightIcon />
                }
            </div>
            <div className={nav ? 
            'overflow-y-hidden md:hidden absolute text-gray-300 left-0 top-0 h-screen px-4 py-7 md:w-auto w-full flex flex-col bg-black/90 ease-in duration-300'
            : 'absolute top-0 h-screen left-[-100%] ease-in duration-500'}>
            <ul className='h-full w-full pt-12 text-center'>
                {/* <li className='py-8'><a href="/" className='font-medium text-lg'>Home</a></li>
                <li className='py-8'><a href="#gallery" className='font-medium text-lg'>Gallery</a></li>
                <li className='py-8'><a href="#deals" className='font-medium text-lg'>Deals</a></li>
                <li className='py-8'><a href="#contacts" className='font-medium text-lg'>Contacts</a></li> */}
                {
                    Links.map((Link) => (
                        <li key={Link} className='py-8'>
                            <a href={Link.link} className='font-medium text-lg' onClick={handleNav}>{Link.name}</a>
                        </li>
                    ))
                }
            </ul>
            </div>
        </div>
    )
}