import React,{useState,useContext} from 'react'
import hamburger from "../../Assets/hamburger.png"
import Youtube from "../../Assets/Youtube-Logo-with text.png"
import search from "../../Assets/search.png"
import listen from "../../Assets/listen.png"
import Create from "../../Assets/Create.png"
import Apps from "../../Assets/Apps.png"       
import Notifications from "../../Assets/Notifications.png"       
import Profile from "../../Assets/Profile.png"     
import Context from '../../context/Context' 

const Navbar = () => {
  function showSideMenu(){
    console.log("clicked");
     let sideMenu = document.getElementById("sideMenu");
     sideMenu.classList.toggle("show");
    console.log(sideMenu);
  }

  const {setSearchQuery} = useContext(Context)

  const [query,setQuery] = useState('');

  return (
      <nav className="navbar">
          <div className="nav-left">
              <img src={hamburger} alt="" onClick={showSideMenu} className="toogler-icon-menu"/>
              <img src={Youtube} alt="" />
          </div>

          <div className="nav-center">
              <form className="nav-form" role="search">
                  <input type="search" placeholder="Search" id="Search" value={query} onChange={(e)=>setQuery(e.target.value)}/>
                  <button type="submit" id="searchBtn" onClick={(e) => {
    e.preventDefault();
    setSearchQuery(query);
}}>
    <img src={search} alt="searchBtn"/>
</button>
                  <img src={listen} alt="listen"/>
                </form>
          </div>

          <div className="nav-right">   
              <ul className="navbar-list">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                      <img src={Create} alt="" />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                      <img src={Apps} alt=""/>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                      <img src={Notifications} alt=""/>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                      <img src={Profile} alt=""/>
                  </a>
                </li>

              </ul>
          </div>
          <img src={hamburger} alt="" className="toogler-icon-menu"/>

      </nav>
  )


}

export default Navbar

