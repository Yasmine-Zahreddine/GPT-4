import React, {useState} from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg'

const Menu = ()=> (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wgpt4">What is GPT4</a></p>
    <p><a href="#possibility">AI Innovations</a></p>
    <p><a href="#features">AI Applications</a></p>
    <p><a href="#blog">Library</a></p>
  </>
)

const Navbar = () => {
  const[toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='gpt4_navbar'>
      <div className='gpt4_navbar-links'>
        <div className='gpt4_navbar-links_logo'>
          <img src={logo} alt='logo'/>
        </div>
        <div className='gpt4_navbar-links_container'>
          <Menu/>
        </div>
      </div>
      <div className='gpt4_navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='gpt4_navbar-menu'>
        {toggleMenu ? <RiCloseLine color='#fff' size= {27} onClick={()=>{setToggleMenu(false)}}/> : <RiMenu3Line color='#fff' size={27} onClick={()=>setToggleMenu(true)}/>}
        {toggleMenu && (
          <div className='gpt4_navbar-menu_container scale-up-center'>
            <div className='gpt4_navbar-menu_container-links'>
              <Menu/>
              <div className='gpt4_navbar-menu_container-links-sign'>
                <p>Sign in</p>
                <button type='button'>Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar