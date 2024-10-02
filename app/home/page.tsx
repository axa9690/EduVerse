"use client";

import React from 'react';
import Navbar from '../components/Navbar';
import '../globals.css';

const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/background.jpg')" }}>
            {/* Background image and layout container */}
            <div className="min-h-screen relative">
                <Navbar />

                {/* Hero Section */}
                <div className="flex flex-col items-center justify-center text-center py-12 empowering">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 font-jua">
                        Empowering Students and Academics for Success
                    </h1>
                </div>
                <div className="grid-1024x600">
                {/* Top Left Box */}
                <div className="box-1024x600 box-phone box-tablet box-laptop bg-white p-8 rounded-lg shadow-md flex flex-col opacity-90">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-cyan-900 font-jua text-center">Explore Opportunities</h2>
                    <ul><li className="text-cyan-600 font-jua text-lg md:text-2xl text-center">Join Mentorship Program</li></ul>
                </div>

                {/* Top Right Box */}
                <div className="box-1024x600 box-phone box-tablet-right box-laptop-right bg-white p-8 rounded-lg shadow-md flex flex-col opacity-90">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-cyan-900 font-jua text-center">Upcoming Academic Events</h2>
                    <ul className="text-cyan-600 font-jua text-lg md:text-2xl text-center">
                        <a><li>Conferences</li></a>
                        <li>Workshops</li>
                    </ul>
                </div>

                {/* Bottom Left Box */}
                <div className="box-1024x600 box-phone box-tablet-bottom-left box-laptop-bottom-left bg-white p-8 rounded-lg shadow-md flex flex-col opacity-90">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-cyan-900 font-jua text-center">Join the Conversations</h2>
                    <ul className="text-cyan-600 font-jua text-lg md:text-2xl text-center">
                        <li>Forums</li>
                        <li>Groups</li>
                    </ul>
                </div>

                {/* Bottom Right Box */}
                <div className="box-1024x600 box-phone box-tablet-bottom-right box-laptop-bottom-right bg-white p-8 rounded-lg shadow-md flex flex-col opacity-90">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-cyan-900 font-jua text-center">Explore Career Development Resources</h2>
                    <p className="text-cyan-600 font-jua text-lg md:text-2xl text-center">Resume Builder Tool</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
