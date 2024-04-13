import React from 'react'
import logo from "../../assets/nba-logo.png";
import "./header.css"
const Header = () => {
  return (
    <div className='headerdiv'>
    <img src={logo} alt=""/>
    <h2>NBA Legends</h2>
    </div>  
  )
}

export default Header