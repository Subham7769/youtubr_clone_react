import React from 'react'    
import home_fill from "../../Assets/home-fill.png"
import Icon from "../../Assets/Icon.png"
import preview from "../../Assets/preview.png"
import library from "../../Assets/library.png"
import history from "../../Assets/history.png"
import yourVideos from "../../Assets/yourVideos.png"
import watchLater from "../../Assets/watchLater.png"
import liked from "../../Assets/liked.png"
import arrowBottom from "../../Assets/arrowBottom.png"
import png1 from "../../Assets/1.png"
import png2 from "../../Assets/2.png"
import png3 from "../../Assets/3.png"
import png4 from "../../Assets/4.png"
import Youtube_Premium from "../../Assets/Youtube Premium.png"
import Gaming from "../../Assets/Gaming.png"
import Live from "../../Assets/Live.png"


const Sidemenu = () => {

    
  return (
    <div id="sideMenu">
        <div className="container">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a href="#" className="nav-link">
                        <img src={home_fill} alt="Home"/>
                        <span className="linkText">Home</span>
                    </a>
                </li>
                <li className="nav-item  ">
                    <a href="#" className="nav-link" >
                        <img src={Icon} alt="Explore" />
                        <span className="linkText">Explore</span>
                    </a>
                </li>
                <li className="nav-item  ">
                    <a href="#" className="nav-link" >
                        <img src={preview} alt="Subscriptions" />
                        <span className="linkText">Subscriptions</span>
                    </a>
                </li>
            </ul>
            <hr/>
        </div>
        <div className="container">
            <ul className="navbar-nav">
                <li className="nav-item  ">
                    <a href="#" className="nav-link" >
                        <img src={library} alt="library" />
                        <span className="linkText">library</span>
                    </a>
                </li>
                <li className="nav-item  ">
                    <a href="#" className="nav-link" >
                        <img src={history} alt="History" />
                        <span className="linkText">History</span>
                    </a>
                </li>
                <li className="nav-item  ">
                    <a href="#" className="nav-link" >
                        <img src={yourVideos} alt="Your Videos" />
                        <span className="linkText">Your Videos</span>
                    </a>
                </li>
                <li className="nav-item  ">
                    <a href="#" className="nav-link" >
                        <img src={watchLater} alt="Watch Later" />
                        <span className="linkText">Watch Later</span>
                    </a>
                </li>
                <li className="nav-item  ">
                    <a href="#" className="nav-link" >
                        <img src={liked} alt="Liked Videos" />
                        <span className="linkText">Liked Videos</span>
                    </a>
                </li>
                <li className="nav-item  ">
                    <a href="#" className="nav-link" >
                        <img src={arrowBottom} alt="Show More" />
                        <span className="linkText">Show More</span>
                    </a>
                </li>
            </ul>
            <hr />
        </div>
        <div className="container">
            <p className="con-head">SUBSCRIPTIONS</p>
            <ul className="navbar-nav">
                <li className="nav-item  ">
                    <a href="#" className="nav-link" >
                        <img src={png1} alt="user" className="me-3 rounded-circle"/>
                        <span className="linkText">James Gouse</span>
                    </a>
                </li>
                <li className="nav-item  ">
                    <a href="#" className="nav-link" >
                        <img src={png2} alt="user" className="me-3 rounded-circle"/>
                        <span className="linkText">Alan Cooper</span>
                    </a>
                </li>
                <li className="nav-item  ">
                    <a href="#" className="nav-link" >
                        <img src={png3} alt="user" className="me-3 rounded-circle"/>
                        <span className="linkText">Marcus Levin</span>
                    </a>
                </li>
                <li className="nav-item  ">
                    <a href="#" className="nav-link" >
                        <img src={png4} alt="user" className="me-3 rounded-circle"/>
                        <span className="linkText">Alexis Sears</span>
                    </a>
                </li>
                <li className="nav-item  ">
                    <a href="#" className="nav-link" >
                        <img src={png2} alt="user" className="me-3 rounded-circle"/>
                        <span className="linkText">Jesica Lambert</span>
                    </a>
                </li>
                <li className="nav-item  ">
                    <a href="#" className="nav-link" >
                        <img src={arrowBottom} alt="Show More" />
                        <span className="linkText">Show More</span>
                    </a>
                </li>
            </ul>
            <hr />
        </div>
        <div className="container">
            <p className="con-head">MORE FROM YOUTUBE</p>
            <ul className="navbar-nav">
                <li className="nav-item  ">
                    <a href="#" className="nav-link" >
                        <img src={Youtube_Premium} alt="Youtube Premium" className="me-3 rounded-circle"/>
                        <span className="linkText">Youtube Premium</span>
                    </a>
                </li>
                <li className="nav-item  ">
                    <a href="#" className="nav-link" >
                        <img src={Gaming} alt="Gaming" className="me-3 rounded-circle"/>
                        <span className="linkText">Gaming</span>
                    </a>
                </li>
                <li className="nav-item  ">
                    <a href="#" className="nav-link" >
                        <img src={Live} alt="Live" className="me-3 rounded-circle"/>
                        <span className="linkText">Live</span>
                    </a>
                </li>
                <li className="nav-item  ">
                    <a href="#" className="nav-link" >
                        <img src={arrowBottom} alt="Show More"  />
                        <span className="linkText">Show More</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidemenu