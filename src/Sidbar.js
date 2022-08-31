import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import Charts from './Charts';
import { BiLineChart } from "react-icons/bi";
import { RiLayoutGridLine } from "react-icons/ri";
export const Sidbar = ({ darkmodes, setDarkmodes, isOpen, toggleSidebar }) => {
  const [isHoveringdash, setIsHoveringdash] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    console.log('hellooo')
    setIsHovering(true);
  };
  console.log('hellooo', isHovering)
  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const handleMouseOverdash = () => {
    console.log('hellooo')
    setIsHoveringdash(true);
  };
  console.log('hellooo', isHovering)
  const handleMouseOutdash = () => {
    setIsHoveringdash(false);
  };
  return (
    <>
      {/* #191B20 */}
      <nav className={"sidebar sidebar-offcanvas " + (darkmodes ? "sidebar-bg-mini-dark" : "sidebar-bg-mini-light")} id="sidebar">
        <ul className="nav">
          <li onMouseOver={handleMouseOverdash} onMouseEnter={handleMouseOut} onMouseOut={handleMouseOut} class={"nav-item " + (darkmodes ? "nav-item-dark " : "nav-item-light ") + (isHoveringdash ? "hover-open" : "")}  >
            <a className={"nav-link " + (darkmodes ? "nav-link-dark-a nav-link-mini-icon-dark" : "nav-link-light-a nav-link-mini-icon-light")} data-bs-toggle="collapse" href="#dashboards" aria-expanded="false" aria-controls="dashboards">
              <Link to="/dashboard" className='dashboard-icon'><RiLayoutGridLine
                className={"name-icon" + (darkmodes ? "text-white " : "text-dark ")} /></Link>
              <span className={"menu-title " + (darkmodes ? "text-white " : "text-dark ") + (isHoveringdash && darkmodes ? "bg-dark text-white" : '')}>Dashboard</span>
              <i className="menu-arrow "></i>
            </a>
            <div className={"collapse " + (darkmodes ? "bg-dark " : "")} id="dashboards">
              <ul class={"nav flex-column sub-menu " + (darkmodes ? "sub-menu-dark " : "sub-menu-light ")}>
                <li class={"nav-item " + (darkmodes ? "nav-item-dark " : "nav-item-light ")}> <Link class={"nav-link " + (darkmodes ? "nav-link-dark-a text-white" : "nav-link-light-a")} to="/dashboard">Default</Link></li>
                {/* <li class="nav-item"> <a class="nav-link" href="pages/dashboards/crm.html">CRM</a></li>
                <li class="nav-item"> <a class="nav-link" href="pages/dashboards/purple.html">Purple</a></li>
                <li class="nav-item"> <a class="nav-link" href="pages/dashboards/purple-dark.html">Purple Dark</a></li>
                <li class="nav-item"> <a class="nav-link" href="pages/dashboards/sales.html">Sale</a></li> */}
              </ul>

            </div>
          </li>


          <li onMouseEnter={handleMouseOver} onMouseOver={handleMouseOutdash} onMouseLeave={handleMouseOutdash} class={"nav-item " + (darkmodes ? "nav-item-dark " : "nav-item-light ") + (isHovering ? "hover-open " : "")}  >
            <a className={"nav-link dashboard-icon " + (darkmodes ? "nav-link-dark-a nav-link-mini-icon-dark" : "nav-link-light-a nav-link-mini-icon-light")} data-bs-toggle="collapse" href="#charts" aria-expanded="false" aria-controls="charts">
              <BiLineChart
              />
              <span className={"menu-title icon_margin " + (darkmodes ? "text-white " : "text-dark ")+(isHovering && darkmodes ? "bg-dark text-white" : '')}>Charts</span>
              <i className="menu-arrow"></i>
            </a>
            <div className={"collapse " + (darkmodes ? "bg-dark " : "")} id="charts">
              <ul className={"nav flex-column sub-menu " + (darkmodes ? "sub-menu-dark " : "sub-menu-light ")}>
                {/* <li class="nav-item"> <Link class="nav-link" to='/Charts'>ChartJs</Link></li> */}
                <li class={"nav-item " + (darkmodes ? "nav-item-dark" : "nav-item-light")}> <Link className={"nav-link " + (darkmodes ? "nav-link-dark-a text-white" : "nav-link-light-a")} to="/charts">Chart Js</Link></li>
                <li class={"nav-item " + (darkmodes ? "nav-item-dark" : "nav-item-light")}> <Link to="/morris" className={"nav-link " + (darkmodes ? "nav-link-dark-a text-white" : "nav-link-light-a ")} >Morris</Link></li>

              </ul>
            </div>
          </li>
          <li onMouseOver={handleMouseOverdash} onMouseEnter={handleMouseOut} onMouseOut={handleMouseOut} class={"nav-item " + (darkmodes ? "nav-item-dark " : "nav-item-light ") + (isHoveringdash ? "hover-open" : "")}  >
          <a href="/allform" className={"nav-link d-flex " + (darkmodes ? "nav-link-dark-a nav-link-mini-icon-dark" : "nav-link-light-a nav-link-mini-icon-light")} >
             <RiLayoutGridLine
                className={"name-icon" + (darkmodes ? "text-white " : "text-dark ")} />
              <span className={"menu-title " + (darkmodes ? "text-white " : "text-dark ") + (isHoveringdash && darkmodes ? "bg-dark text-white" : '')}>Allform</span>
              <i className="menu-arrow "></i>
           
              </a>
          </li>
        </ul>
      </nav>
    </>
  )
}
export default Sidbar;