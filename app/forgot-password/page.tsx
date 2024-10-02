"use client";

import React, { useState } from 'react';

const ForgotPassword: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        console.log('Password reset for:', email);
        console.log('New Password:', password);
        // Implement password reset logic here
    };
    

    return (
        
        <div className="flex flex-col items-center justify-center min-h-screen bg-[rgba(168,237,215,0.2)] p-4">
            <a href="/forgot-password"><img
                src="/eduverse.jpg" 
                alt="EduVerse"
                className="mb-6 custom-image" 
            /></a> 
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-gray-800 font-jua">Forgot Password</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 p-2 border rounded w-full text-center placeholder:text-center font-jua"
                            placeholder="Enter your Email"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="mt-1 p-2 border rounded w-full text-center placeholder:text-center font-jua"
                            placeholder="Enter your New Password"
                        />
                    </div>
                    <div className="mb-6">
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className="mt-1 p-2 border rounded w-full text-center placeholder:text-center font-jua"
                            placeholder="Re-enter your New Password"
                        />
                    </div>
                    <button type="submit" className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 font-jua text-2xl">
                        Submit
                    </button>
                    <div className="mt-4 text-center">
                        <a href="/login" className="text-blue-500 hover:underline font-jua text-base md:text-xl">Back to Login</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
