import React, { useState } from 'react';

const Dropdown: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div
            className="relative inline-block text-left"
            onMouseEnter={() => setIsOpen(true)}  // Show dropdown on hover
            onMouseLeave={() => setIsOpen(false)} // Hide dropdown when mouse leaves
        >
            <div>
                <a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault(); // Prevent default anchor behavior
                        toggleDropdown(); // Optional: keep the toggle for click functionality
                    }}
                    className="inline-flex justify-between items-center rounded-md text-lg font-jua text-black hover:underline px-2"
                >
                    Name
                    <svg
                        className={`ml-2 w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </a>
            </div>

            {isOpen && (
                <div className="absolute right-0 z-10 mt-2 w-56 rounded-md shadow-lg bg-[#caf1e4] ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="none">
                        <a href="#profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
                        <a href="#settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                        <a href="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
