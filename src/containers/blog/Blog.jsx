import React from 'react'
import './blog.css'
import { Article } from '../../components'
import {blog01, blog02, blog03, blog04, blog05} from './imports'
const Blog = () => {
  return (
    <div className='gpt4_blog section_padding' id='blog'>
      <div className='gpt4_blog-heading'>
        <h1 className='gradient_text'>A lot is happening, We are blogging about it.</h1>
      </div>
      <div className='gpt4_blog-container'>
        <div className='gpt4_blog-container_groupA'>
          <Article imgUrl={blog01} date='Aug 1, 2024' title='GPT-4 and OpenAI: The Future is Here. Discover How!'/>
        </div>
        <div className='gpt4_blog-container_groupB'>
          <Article imgUrl={blog02} date='Aug 1, 2024' title='Explore the Boundaries of AI: How GPT-4 is Revolutionizing Industries Worldwide!'/>
          <Article imgUrl={blog03} date='Aug 1, 2024' title='AI Innovations Unveiled: The Impact of GPT-4 on Creat]ive Arts and Media'/>
          <Article imgUrl={blog04} date='Aug 1, 2024' title='GPT-4 in Healthcare: ENhancing Patient Care and Research'/>
          <Article imgUrl={blog05} date='Aug 1, 2024' title='GPT-4 and the Evolution of Human-Machine Collaboration'/>
        </div>
      </div>
    </div>
  )
}

export default Blog