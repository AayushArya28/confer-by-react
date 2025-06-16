import React from 'react';
import './Hero.css';

function Hero() {
    return (
        <div className="hero-container h-[70vh]  mt-[70vh]">
            {/* BIT Mesra Section */}
            <div className="hero-section">
                <h2 className="heading">BIT Mesra, Ranchi</h2>
                <div className="line"></div>
                <p>
                    <strong>Birla Institute of Technology (BIT), Mesra</strong>, established in 1955 by visionary <strong>B.M. Birla</strong>, is a premier technical institution in India. Located in Ranchi, Jharkhand, BIT is known for its cutting-edge research, academic excellence, and innovative initiatives.
                </p>
                <p>
                    The institute pioneered India’s first <strong>Department of Space Engineering & Rocketry</strong> and established the <strong>Science & Technology Entrepreneurs’ Park (STEP)</strong> to foster innovation and entrepreneurship. BIT offers a wide range of programs in engineering, sciences, management, and architecture, and is accredited with an <strong>'A' Grade by NAAC</strong> and recognized by <strong>UGC</strong>.
                </p>
                <p>
                    <strong>BIT Mesra</strong> continues to shape future leaders through excellence in research, global collaborations, and a strong industry-academia interface.
                </p>
                <div className='button-container'>
                    <a href="https://bitmesra.ac.in/" className="btn" target="_blank" rel="noopener noreferrer"><b>Learn More</b></a>
                </div>
            </div>

            {/* BIT Patna Section */}
            <div className="hero-section">
                <h2 className="heading">BIT Patna Campus</h2>
                <div className="line"></div>
                <p>
                    Established in <strong>2006</strong> through a collaboration between the <strong>Government of Bihar</strong> and <strong>BIT Mesra</strong>, the <strong>Birla Institute of Technology (BIT), Patna Campus</strong> is dedicated to advancing education in Engineering and Technology.
                </p>
                <p>
                    <strong>Academic Programs:</strong> Undergraduate programs include <strong>B.Tech.</strong> in Civil, CSE, ECE, EEE, AIML, and Mechanical Engineering, along with <strong>BBA</strong> and <strong>BCA</strong>. Postgraduate offerings include <strong>M.Tech. in Computer Science</strong> and <strong>MBA</strong>, along with <strong>Ph.D.</strong> programs across various disciplines.
                </p>
                <p>
                    <strong>Campus Facilities:</strong> The 25-acre campus features modern laboratories, central library, auditoriums, hostels, sports complexes, and recreational areas, fostering a holistic academic environment.
                </p>
                <p>
                    <strong>Industry Engagement and Placements:</strong> BIT Patna maintains strong industry connections, ensuring excellent placement opportunities. Notably, its students have achieved top ranks in national-level exams like <strong>GATE</strong> and <strong>UPSC ESE</strong>.
                </p>
                <p>
                    <strong>BIT Patna</strong> continues its commitment to academic excellence, innovation, and producing future-ready professionals.
                </p>
                <div className='button-container'>
                    <a href="https://bitmesra.ac.in/8" className="btn" target="_blank" rel="noopener noreferrer"><b>Learn More</b></a>
                </div>
            </div>

            {/* Conference Section */}
            <div className="hero-section">
                <h2 className="heading">Welcome to IMPACT 2025</h2>
                <div className="line"></div>
                <p>
                    IMPACT 2025: Intelligent Machine Processes and AI-Centric Technologies is an International Conference bringing together experts from AI, ML, Data Science, and Emerging Technologies.
                </p>
                <div className='button-container'>
                    <a href="about.html" className="btn"><b>Learn More</b></a>
                </div>
            </div>
        </div>
    );
}

export default Hero;
