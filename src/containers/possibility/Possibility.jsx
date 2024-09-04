import React from 'react'
import './possibility.css'
import possibilityImage from'../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className='gpt4_possibility section_padding' id='possibility'>
      <div className='gpt4_possibility-content'>
        <h1 className='gradient_text'>Unleash the Power of Innovation</h1>
        <p>Imagine a world where AI can assist you in ways beyond your wildest dreams. GPT-4, OpenAI’s most advanced system, brings unparalleled creativity, problem-solving, and collaboration to your fingertips. Whether you’re composing music, writing screenplays, or engaging in extended conversations, GPT-4 is here to elevate your experience.</p>
        <h4>Get Started with Early Access</h4>
      </div>
      <div className='gpt4_possibility-image'>
        <img src={possibilityImage} alt='possibility'/>
      </div>
    </div>
  )
}

export default Possibility