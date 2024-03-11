import React from 'react'
import '../styles/Home.css';

function Home({id}) {
  return (
    <div id={id} className="hero-section">
    <img src="banner.png" alt="Law Firm Banner" className="hero-image" />    
  </div>
  )
}

export default Home