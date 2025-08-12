import React from 'react';

// Functional component for the landing page
const LandingPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            {/* Header section with navigation */}
            <header className="bg-white shadow-md">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-800">Katharina-Schmid.at</h1>
                    <nav className="space-x-4">
                        <a href="#services" className="text-gray-600 hover:text-blue-500">Services</a>
                        <a href="#about" className="text-gray-600 hover:text-blue-500">About</a>
                        <a href="#contact" className="text-gray-600 hover:text-blue-500">Contact</a>
                    </nav>
                </div>
            </header>

            {/* Hero section with a call to action */}
            <section className="bg-blue-600 text-white flex flex-col justify-center items-center text-center py-20">
                <h2 className="text-4xl font-bold mb-4">Welcome to Katharina Schmid</h2>
                <p className="text-lg mb-8">Your trusted partner for exceptional services.</p>
                <a href="#contact" className="bg-white text-blue-600 px-4 py-2 rounded-lg shadow-md transition duration-300 hover:bg-gray-200">Get in Touch</a>
            </section>

            {/* Services section */}
            <section id="services" className="py-20 container mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Service cards */}
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                        <h3 className="text-xl font-semibold mb-2">Service One</h3>
                        <p className="text-gray-600">Description of service one.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                        <h3 className="text-xl font-semibold mb-2">Service Two</h3>
                        <p className="text-gray-600">Description of service two.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                        <h3 className="text-xl font-semibold mb-2">Service Three</h3>
                        <p className="text-gray-600">Description of service three.</p>
                    </div>
                </div>
            </section>

            {/* About section */}
            <section id="about" className="bg-gray-100 py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
                    <p className="text-lg text-gray-600">Information about the company and its mission.</p>
                </div>
            </section>

            {/* Contact section */}
            <section id="contact" className="py-20 container mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">Contact Us</h2>
                <form className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                        <input className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" id="name" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                        <input className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" id="email" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                        <textarea className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" id="message" rows="4" required></textarea>
                    </div>
                    <button className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition duration-300" type="submit">Send Message</button>
                </form>
            </section>

            {/* Footer section */}
            <footer className="bg-gray-800 text-white py-6 text-center">
                <p>&copy; 2023 Katharina-Schmid.at. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;