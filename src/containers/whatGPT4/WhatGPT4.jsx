import React from 'react'
import './whatGPT4.css'
import { Feature } from '../../components'

const WhatGPT4 = () => {
  return (
    <div className='gpt4_whatgpt4 section_margin' id='wgpt4'>
      <div className='gpt4_whargpt4-feature'>
        <Feature title="What is GPT-4" text='GPT-4, developed by OpenAI, is a multimodal AI model that can process text, images, and even videos. It excels in generating human-like text, making it ideal for applications ranging from chatbots to content creation.'/>
      </div>
      <div className='gpt4_whatgpt4-heading'>
        <h1 className='gradient_text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt4_whatgpt4-container'>
        <Feature title='Chatbots' text='Enhance customer interactions with intelligent, responsive chatbots that provide 24/7 support and personalized experiences. '/>
        <Feature title='Knowledgebase' text='Access a vast repository of information and insights powered by GPT-4, helping you make informed decisions quickly and efficiently.'/>
        <Feature title='Education' text='Revolutionize learning with AI-driven educational tools that adapt to individual needs and promote continuous growth.'/>
      </div>
    </div>
  )
}

export default WhatGPT4