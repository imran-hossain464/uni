import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Help = () => {
  const navigate = useNavigate()

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-blue-50 flex flex-col justify-between">
        {/* Header Section */}
        <header className="bg-blue-600 py-12 shadow-md">
          <h1 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold text-white font-serif">
            Help Request and Offer
          </h1>
        </header>

        {/* Button Section */}
        <main className="flex flex-col items-center justify-center flex-grow gap-8 py-16 px-4">
          <button
  onClick={() => navigate('/hook', { state: { type: 'Request for Help' } })}
  className="w-72 sm:w-96 h-16 text-xl sm:text-2xl font-medium text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-300 rounded-xl transition duration-300 shadow-md"
>
  Submit Request for Help
</button>


          <button
            onClick={() => navigate('/hook', { state: { type: 'Offer for Help' } })}
            className="w-72 sm:w-96 h-16 text-xl sm:text-2xl font-medium text-blue-600 border border-blue-600 hover:bg-blue-100 focus:outline-none focus:ring-4 focus:ring-blue-200 rounded-xl transition duration-300 shadow-md bg-white"
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
