import React from 'react'
import './features.css'
import { Feature } from '../../components'

const featuresData = [
  {
    title: 'Improving Efficiency Instantly',
    text:'Our AI tools streamline processes and boost productivity, helping you achieve more in less time.'
  }, {
    title: 'Join a Community of Innovators',
    text: 'Connect with like-minded individuals and share your journey towards a smarter future.'
  }, {
    title: 'Transform Your Business',
    text: 'Leverage AI to drive growth and innovation in your organization. The future is here, and it is powered by AI.'
  },
  {
    title: 'Request Early Access to Get Started',
    text: 'Be among the first to experience our cutting-edge AI technology. Sign up now and unlock new possibilities.'
  }
]

const Features = () => {
  return (
    <div className='gpt4_features section_padding' id='features'>
      <div className='gpt4_features-heading'>
        <h1 className='gradient_text'>Step into the Future with GPT-4: Revolutionize Your World Today.</h1>
        <p>Get Started with Early Access</p>
      </div>
      <div className='gpt4_features-container'>
        {featuresData.map( (item, index) =>(
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        ))}
      </div>
    </div>
  )
}

export default Features