import React from 'react';
import BannerImage from '../assets/banner.jpg';
import './Header.css';

function Photobanner() {
    return (
        <div id="photobanner h-[70vh]">
            <div className="banner-overlay">
                <img src={BannerImage} alt="Banner" className="banner-image active" />
                <div className="overlay-text">
                    <p>First International Conference on</p>
                    <h2 className='font-bold'>Intelligent Machine Processes and AI-Centric Technologies</h2>
                    <h2 className='font-bold'>(IMPACT 25)</h2>
                    <p>Department of CSE</p>
                    <p>BIT MESRA, Patna campus</p>
                    <p>In Hybrid Mode</p>
                </div>
            </div>
        </div>
    );
}

export default Photobanner;
