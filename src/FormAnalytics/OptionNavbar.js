import React from 'react'

export const OptionNavbar = ({ darkmodes, setDarkmodes }) => {
    let pageactive = ""
    const path = window.location.pathname
    pageactive = path.split('/')
    console.log("path on optionNavbar", pageactive[2])
    return (
        <>
<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h4">FORM ANALYTICS</span>
  </div>
</nav>

            <nav className={"navbar navbar-expand-lg all-navbar navbar-light bg-light pt-0 pb-0 " + (darkmodes ? "text-dark trans_background border-bottom  " : "text-dark trans_background border-bottom ")}>
                <div class="container-fluid  ps-1">
                    <ul class="nav nav-tabs">
                        <li class={"nav-item active ps-3 formlink " + (pageactive[2] === 'formanalytics' ? "allform-list-focus1" : '')}>
                            <a href='/allform/formanalytics' class="nav-link-hover link_color ">This Week</a>
                        </li>
                        <li class={"nav-item formlink " + (pageactive[2] === 'month' ? "allform-list-focus1" : '')}>
                            <a href="/allform/month" class="nav-link-hover link_color">This Month</a>
                        </li>
                        <li class={"nav-item formlink " + (pageactive[2] === 'alltime' ? "allform-list-focus1" : '')}>
                            <a href="/allform/alltime" class="nav-link-hover link_color">All-time</a>
                        </li>
                        <li class={"nav-item formlink " + (pageactive[2] === 'custom' ? "allform-list-focus1" : '')}>
                            <a href="/allform/custom" class="nav-link-hover link_color">Custom</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
