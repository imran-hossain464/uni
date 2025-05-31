import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <Navbar />

      <section className="bg-gray-50 min-h-screen py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">

          {/* Hero Section */}
          <h1 className="text-5xl font-extrabold text-blue-800 mb-6">Together, We Find Help</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-12">
            FindHelp is a people-powered platform where kindness meets action. Whether you need a hand or want to lend one,
            we connect individuals and communities to support each other in meaningful ways.
          </p>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-12 text-left mb-16">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To empower individuals to offer and request support with ease, dignity, and safety. We aim to foster a culture
                of mutual aid by providing a digital space where compassion drives community action.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">Our Vision</h2>
              <p className="text-gray-600">
                A world where no one feels alone in times of need—where communities are built through everyday acts of kindness,
                and people feel empowered to make a difference.
              </p>
            </div>
          </div>

          {/* Empowerment Journey Section */}
<section className="mb-24">
  <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
    How FindHelp Empowers You
  </h2>

  {/* Empowerment Steps */}
  {[
    {
      icon: "https://img.icons8.com/ios-filled/50/helping-hand.png",
      title: "Offer or Request Help",
      text: "FindHelp is your digital notice board. Whether you’re looking for tutoring, emotional support, or assistance with daily needs—or you’re ready to offer it—your post becomes the first step toward real impact.",
    },
    {
      icon: "https://img.icons8.com/ios-filled/50/planner.png",
      title: "Participate in Local Events",
      text: "From blood drives to neighborhood cleanups, join meaningful initiatives around you. Our event hub makes community involvement easy and impactful.",
    },
    {
      icon: "https://img.icons8.com/ios-filled/50/chat.png",
      title: "Connect & Coordinate Safely",
      text: "Use our secure messaging system to build trust, share details, and collaborate. No spam, no pressure—just real, respectful communication.",
    },
    {
      icon: "https://img.icons8.com/ios-filled/50/verified-account.png",
      title: "Build Your Reputation",
      text: "Verified profiles, ratings, and community badges help you stand out as a reliable helper or a respectful requester.",
    },
  ].map((step, i) => (
    <div
      key={i}
      className={`flex flex-col md:flex-row ${
        i % 2 === 1 ? "md:flex-row-reverse" : ""
      } items-start gap-6 md:gap-10 mb-12`}
    >
      <img
        src={step.icon}
        alt={step.title}
        className="w-12 h-12 mt-1 shrink-0"
      />
      <div className="text-left max-w-3xl">
        <h3 className="text-2xl font-semibold text-blue-700 mb-2">
          {step.title}
        </h3>
        <p className="text-gray-600">{step.text}</p>
      </div>
    </div>
  ))}
</section>


          {/* Community Motivation */}
          <div className="bg-blue-100 rounded-xl py-12 px-8 mb-20">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Building Bridges of Support</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We believe in the strength of community. Whether it's a student offering tutoring help, a neighbor organizing a food drive,
              or someone in crisis reaching out—FindHelp is here to connect people, amplify kindness, and make helping easy and meaningful.
            </p>
          </div>

          {/* Call to Action */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Join the Movement</h2>
            <p className="text-gray-600 mb-6">
              Be part of a platform that celebrates giving, connection, and compassion. Start helping or ask for help today.
            </p>
            <a
              href="/signup"
              className="inline-block bg-blue-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
            >
              Get Started
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

// Reusable feature component

export default About;
