import React from 'react';
import SideBar from '../sideBar/SideBar';
import "./input.css";
import "../../css/main.css"
const Input = () => {
  return (
    <div className='content sidebar-container'>
    <div className="sidebar-content">
      <SideBar/>
    </div>
    <div className="main-content">
        <h1>Alert</h1>
    </div>
</div>
  )
}

export default Input
