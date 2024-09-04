import React from 'react'
import './footer.css'
import gpt4logo from '../../assets/logo.svg'
const Footer = () => {
  return (
    <div className='gpt4_footer section_padding'>
      <div className='gpt4_footer-heading'>
        <h1 className='gradient_text'>Join the AI Revolution Today and Be a Pioneer in Transforming Tomorrow</h1>
      </div>
      <div className='gpt4_footer-btn'>
        <p>Get Started with Early Access</p>
      </div>
      <div className='gpt4_footer-links'>
        <div className='gpt4_footer-links_logo'>
          <img src={gpt4logo} alt='logo'/>
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className='gpt4_footer-links_div'>
          <h4>Links</h4>
          <p>Observations</p>
          <p>Social Media</p>
          <p>Content</p>
          <p>About</p>
        </div>
        <div className='gpt4_footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='gpt4_footer-links_div'>
          <h4>Get in touch</h4>
          <p>+00000000</p>
          <p>Follow us on Twitter</p>
          <p>connect on LinkedIn</p>
          <p>info@gpt4ai.com</p>
        </div>
      </div>
      <div className='gpt4_footer-copyright'>
        <p>© 2024 GPT-4. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer