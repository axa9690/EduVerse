import React, { useState } from 'react';
import Dropdown from './Dropdown'; // Import the dropdown component

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="w-full bg-[#caf1e4] py-4 flex justify-between items-center px-4 md:px-8">
            <div className="flex items-center">
                <a href="/home">
                    <img
                        src="favicon.ico" // Update with your logo image path
                        alt="Logo"
                        className="h-12 w-12"
                    />
                </a>
            </div>

            {/* Hamburger Menu */}
            <div className="md:hidden">
                <button onClick={toggleMenu} className="focus:outline-none">
                    <svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
            </div>

            {/* Menu Items */}
            <ul className={`flex-col md:flex-row md:flex md:space-x-8 text-lg font-jua text-black items-center ${isMenuOpen ? 'flex' : 'hidden'} md:flex`}>
                <li><a href="/home" className="hover:underline">Home</a></li>
                <li><a href="#opportunities" className="hover:underline">Opportunities</a></li>
                <li><a href="#events" className="hover:underline">Events</a></li>
                <li><a href="#resources" className="hover:underline">Resources</a></li>
                <li><a href="#networking" className="hover:underline">Networking</a></li>
                <li><a href="#chat" className="hover:underline">Chat</a></li>
                <li><Dropdown /></li>
            </ul>
        </nav>
    );
};

export default Navbar;
