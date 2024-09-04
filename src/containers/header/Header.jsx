import React from 'react'
import './header.css'
import ai from '../../assets/ai.png'
const Header = () => {
  return (
    <div className='gpt4_header section_padding' id='home'>
      <div className='gpt4_header-image'>
        <img src={ai} alt='ai'/>
      </div>
      <div className='gpt4_header-content'>
        <h1 className='gradient_text'>Embrace the Future Today: Transform Your World with GPT-4 AI</h1>
        <p>Discover the power of GPT-4, the latest and most advanced AI model developed by OpenAI. With its ability to understand and generate human-like text, GPT-4 is revolutionizing industries and enhancing daily life. From creative writing to complex problem-solving, GPT-4 offers unparalleled capabilities. Join us and explore how GPT-4 can transform your business and unlock new possibilities.</p>
        <div className='gpt4_header-content_input'>
          <input type='email' placeholder='Your Email Address'/>
          <button type='button'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Header