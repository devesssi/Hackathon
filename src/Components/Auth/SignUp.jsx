import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function RegisterForm() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState({
        username: false,
        email: false,
        password: false,
        confirmPassword: false,
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value,
        });
    };

    const validateEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Clear previous errors
        setErrors({
            username: false,
            email: false,
            password: false,
            confirmPassword: false,
        });

        let isValid = true;

        // Validate username
        if (!formData.username) {
            setErrors((prevErrors) => ({ ...prevErrors, username: true }));
            isValid = false;
        }

        // Validate email
        if (!formData.email || !validateEmail(formData.email)) {
            setErrors((prevErrors) => ({ ...prevErrors, email: true }));
            isValid = false;
        }

        // Validate password
        if (!formData.password) {
            setErrors((prevErrors) => ({ ...prevErrors, password: true }));
            isValid = false;
        }

        // Validate confirm password
        if (formData.password !== formData.confirmPassword) {
            setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: true }));
            isValid = false;
        }

        if (isValid) {
            // Submit form logic here
            alert('Form submitted successfully!');
        }
    };

    return (
        <div className="bg-gradient-to-r from-gray-100 to-gray-300  mt-14 flex items-center justify-center min-h-screen">
            <div className="flex flex-col lg:flex-row w-full max-w-6xl">
                {/* Platform Info Section */}
                <div className="hidden lg:flex lg:w-2/3 flex-col justify-center p-8">
                    <div className="h-full flex flex-col justify-between">
                        <div>
                            <h2 className="text-5xl font-bold mb-6 font-serif text-blue-800">Join the Engineering Hub</h2>
                            <p className="mb-10 text-xl leading-relaxed text-gray-700">
                                Unlock access to comprehensive engineering study materials, course content, and interactive learning tools.
                                Prepare for semester exams with ease, collaborate with peers, and stay updated with the latest advancements in engineering.
                            </p>
                            <p className="text-xl leading-relaxed text-blue-900">
                                From first-year basics to advanced topics, we cover it all. Whether you're preparing for exams or building a solid foundation, we’re here to support your journey.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Registration Form Section */}
                <div className="bg-white rounded-lg shadow-lg p-8 w-full lg:w-1/3">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create Your Student Account</h2>
                    <form onSubmit={handleSubmit} noValidate>
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                value={formData.username}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.username ? 'border-red-500' : ''}`}
                                placeholder="Enter your username"
                            />
                            {errors.username && (
                                <p className="text-red-500 text-sm mt-2">Username is required.</p>
                            )}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.email ? 'border-red-500' : ''}`}
                                placeholder="Enter your email"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-2">Please enter a valid email.</p>
                            )}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.password ? 'border-red-500' : ''}`}
                                placeholder="Enter your password"
                            />
                            {errors.password && (
                                <p className="text-red-500 text-sm mt-2">Password is required.</p>
                            )}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="confirmPassword" className="block text-gray-700 font-semibold mb-2">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.confirmPassword ? 'border-red-500' : ''}`}
                                placeholder="Confirm your password"
                            />
                            {errors.confirmPassword && (
                                <p className="text-red-500 text-sm mt-2">Passwords do not match.</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                        >
                            Register
                        </button>
                    </form>
                    <p className="text-center text-gray-600 mt-4">
                        Already have an account?{' '}
                        <Link to="login" className="text-blue-600 font-semibold">
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
