import Link from 'next/link';
import React from 'react';

export default function Resume() {
  return (
    <div className="min-h-screen border-4 border-black rounded-lg shadow-lg shadow-black py-10">
      {/* Back Button */}
      <Link
        className="absolute top-5 left-5 bg-black text-white px-4 py-2 rounded-full flex items-center hover:bg-blue-300 transition"
        href="/about">
        <span className="mr-2">About Me</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 4.5l7.5 7.5-7.5 7.5M19.5 12H4.5"
          />
        </svg>
      </Link>

      {/* Main Container */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
        {/* Header */}
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
          Adam Gonzalez Jr.
        </h1>
        <p className="text-center text-gray-600 text-lg font-medium">
          Full Stack Software Engineer
        </p>
        <div className="flex justify-center space-x-4 mt-2 text-sm text-gray-600">
          <p>San Francisco, CA</p>
        </div>

        {/* About Me Section */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 border-b-2 border-gray-300 pb-1">
            About Me
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Motivated and adaptable Full Stack Software Engineer with a Bachelor&apos;s degree in Computer Science and hands-on
            experience in application development. Proficient in Python, React, Node.js, and web development, with a proven ability
            to build interactive portfolio websites and deliver scalable solutions. Seeking an entry-level software engineering role
            to contribute to a development team, continue learning, and apply my technical skills to solve real-world problems.
          </p>
        </section>

        {/* Skills Section */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 border-b-2 border-gray-300 pb-1">
            Skills
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Programming Languages: Python, JavaScript</li>
            <li>Frameworks & Tools: React, Node.js, TailwindCSS</li>
            <li>Development Expertise: Full Stack Development, Database Optimization, API Integration</li>
            <li>Other Skills: Data Structures & Algorithms, Code Quality, Design Documentation, Reliability</li>
          </ul>
        </section>

        {/* Experience Section */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 border-b-2 border-gray-300 pb-1">
            Experience
          </h2>
          {[
            {
              title: "Freelance Full Stack Developer",
              company: "Self-Employed | Stockton | May 2022 – Present",
              points: [
                "Developed and maintained full-stack web applications using React, Node.js, and TailwindCSS.",
                "Collaborated with clients to identify project requirements and deliver custom solutions.",
                "Integrated third-party APIs and optimized database structures for scalable applications.",
              ],
            },
            {
              title: "Appraiser 1",
              company: "San Joaquin County | Jan 2024 – Present",
              points: [
                "Conducted property inspections to assess fair and accurate values using statistical models.",
                "Utilized machine learning techniques to improve mass appraisal accuracy.",
                "Ensured compliance with tax assessment regulations.",
              ],
            },
            {
              title: "Career Break",
              company: "San Francisco, CA | June 2020 – Dec 2023",
              points: [
                "Cared full-time for my ill mother while continuing professional development.",
                "Completed over 250+ LeetCode questions and built web projects for clients.",
              ],
            },
          ].map((job, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold">{job.title}</h3>
              <p className="text-gray-500">{job.company}</p>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                {job.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Education Section */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 border-b-2 border-gray-300 pb-1">
            Education
          </h2>
          <p className="text-gray-700">
            <strong>Bachelor of Science in Computer Science</strong>
            <br />
            California State University, Chico | May 2020
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Relevant Coursework: Data Structures and Algorithms, Database Systems, Operating Systems, Software Engineering.</li>
            <li>Group Project: Led a team of 4 developers to create a smart home automation app, earning 2nd place in the CS department project competition.</li>
            <li>Student Instructor: Tutored underclassmen in algorithms and data structures.</li>
          </ul>
        </section>

        {/* Portfolio Highlights Section */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 border-b-2 border-gray-300 pb-1">
            Portfolio Highlights
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Recipe Terminal App:</strong> Interactive application leveraging APIs to provide recipes based on user-selected ingredients.
            </li>
            <li>
              <strong>Portfolio Website:</strong> Dynamic site showcasing my projects, experience, and skills, built with TailwindCSS and deployed using CI/CD pipelines.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

