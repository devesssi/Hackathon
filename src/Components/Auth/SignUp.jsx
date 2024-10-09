import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const SignUp = () => {
  const [isLogin, setIsLogin] = useState(false);

  const handleSignup = (event) => {
    event.preventDefault();
    alert("Signed Up: " + event.target.email.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    alert("Logged In: " + event.target.email.value);
  };

  return (
    <div className="bg-gray-200 flex justify-center items-center h-screen">
      <div
        className={`flex bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-3xl transition-transform duration-500 ${
          isLogin ? 'translate-x-0' : 'translate-x-[-100%]'
        }`}
      >
        {/* Description Section */}
        <div className="hidden md:flex w-1/2 p-10 bg-gray-100 flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">Welcome to Our Platform!</h1>
          <p className="text-gray-700 mb-6">
            Our application offers a variety of features to help you manage your
            tasks efficiently. Sign up to explore personalized dashboards,
            reminders, and more!
          </p>
          <p className="text-gray-500">
            Join our community and never miss a deadline again. Your journey
            starts here.
          </p>
        </div>

        {/* Sign Up Form */}
        <div
          id="signup"
          className={`w-full md:w-1/2 p-10 transition-opacity duration-500 ease-in-out ${isLogin ? 'hidden' : ''}`}
        >
          <form id="signup-form" onSubmit={handleSignup}>
            <h1 className="text-2xl font-bold mb-6">Create Account</h1>
            <p className="mb-4 text-gray-600">
              Join us and start your journey. Please fill in the details below.
            </p>
            <input
              type="text"
              placeholder="Name"
              required
              name="name"
              className="border border-gray-300 p-3 rounded w-full mb-4"
            />
            <input
              type="email"
              placeholder="Email"
              required
              name="email"
              className="border border-gray-300 p-3 rounded w-full mb-4"
            />
            <input
              type="password"
              placeholder="Password"
              required
              name="password"
              className="border border-gray-300 p-3 rounded w-full mb-4"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white p-3 rounded w-full hover:bg-indigo-700"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-4 text-center text-gray-500">
            Already have an account?
            <span className="cursor-pointer text-indigo-600" onClick={() => setIsLogin(true)}>
              Log In
            </span>
          </p>
        </div>

        {/* Login Form */}
        <div
          id="login"
          className={`w-full md:w-1/2 p-10 bg-indigo-600 text-white flex flex-col justify-center transition-opacity duration-500 ease-in-out ${isLogin ? '' : 'hidden'}`}
        >
          <h1 className="text-2xl font-bold mb-4">Welcome Back!</h1>
          <p className="mb-6">Please login to continue and access your account.</p>
          <form id="login-form" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              required
              name="email"
              className="border border-white p-3 rounded w-full mb-4"
            />
            <input
              type="password"
              placeholder="Password"
              required
              name="password"
              className="border border-white p-3 rounded w-full mb-4"
            />
            <button
              type="submit"
              className="bg-white text-indigo-600 p-3 rounded w-full hover:bg-gray-200"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-center">
            Don't have an account?
            <span className="cursor-pointer text-white" onClick={() => setIsLogin(false)}>
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
