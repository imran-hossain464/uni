import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


const Help = () => {
  const navigate = useNavigate()

  return (
    <>
    <Navbar/>
      <div className="min-h-screen bg-yellow-100 flex flex-col justify-between">
        {/* Header Section */}
        <header className="bg-yellow-500 py-12 shadow-md">
          <h1 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 font-serif">
            Help Request and Offer
          </h1>
        </header>

        {/* Button Section */}
        <main className="flex flex-col items-center justify-center flex-grow gap-8 py-16 px-4">
          <button
            onClick={() => navigate('/hook', { state: {type: 'Request for Help'}})}
            className="w-72 sm:w-96 h-16 text-xl sm:text-2xl font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 rounded-xl transition duration-300 shadow-md"
          >
            Submit Request for Help
          </button>

          <button
            onClick={() => navigate('/hook', {state: {type: 'Offer for Help'}})}
            className="w-72 sm:w-96 h-16 text-xl sm:text-2xl font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 rounded-xl transition duration-300 shadow-md"
          >
            Offer for Help
          </button>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  )
}

export default Help
