import { Link, useLocation, useNavigate } from "react-router-dom"
import '../css/navbar.css'
import { useContext, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import {BsSearch} from 'react-icons/bs'
import Menu from "./Menu";
import { UserContext } from "../context/UserContext";


const NavBar = () => {
  const [prompt,setPrompt]=useState("")
  const [menuOpen,setMenuOpen]=useState(false)
  const navigate=useNavigate()
  const path=useLocation().pathname

  const handleToggleMenu=()=>{
    setMenuOpen(!menuOpen)
  }
  const {user}=useContext(UserContext)
  return (
    <main>
      <div className="navBar">
        <h1><Link to='/'>Blog</Link></h1>
        {path==="/" && <div className="search">
          <p onClick={()=>navigate(prompt?"?search="+prompt:navigate("/"))}><BsSearch/></p>
          <input onChange={(e)=>setPrompt(e.target.value)} type="text" placeholder="Search a post"/>
        </div>}
        <div className="navBar2">
          {user? <h3 className="space"><Link to='/write'>Write</Link></h3> : <h3 className="space"><Link to={'/login'}>Login</Link></h3>}

          {user? <div onClick={handleToggleMenu}>
            <p className="toggler">{menuOpen ? <FaTimes /> : <FaBars />}</p>
            {menuOpen && <Menu/>}
          </div> : <h3><Link to='/register'>Register</Link></h3>}
        </div>
        <div className="menu-icon" onClick={handleToggleMenu} style={{display:"none"}}>
          <p className="toggler">{menuOpen ? <FaTimes /> : <FaBars />}</p>
          {menuOpen && <Menu/>}
        </div>
      </div>
    </main>
  )
}

export default NavBar
