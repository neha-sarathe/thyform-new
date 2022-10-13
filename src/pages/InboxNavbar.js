import React from 'react'
import { Link } from 'react-router-dom';
import { FaTrashAlt, FaArchive } from "react-icons/fa";
import { RiInboxUnarchiveFill } from "react-icons/ri";
export const InboxNavbar = ({ darkmodes, setDarkmodes }) => {
    let pageactive = ""
    const path = window.location.pathname
    pageactive = path.split('/')
    console.log(pageactive[2])
    return (
        <>
            {/* <nav className={"navbar navbar-expand-lg all-navbar navbar-light bg-light pt-0 pb-0 " + (darkmodes ? "text-dark trans_background border-bottom  " : "text-dark trans_background border-bottom ")}>
                <div class="container-fluid  ps-1">
                    <ul class="nav nav-tabs">
                        <li class={"nav-item active formlink mr-2 " + (pageactive[2] === 'inbox' ? "allform-list-focus1" : '')}>
                            <a href='/allform/inbox' class="nav-link-hover link_color "><RiInboxUnarchiveFill/> Inbox</a>
                        </li>
                        <li class={"nav-item formlink mr-2 " + (pageactive[2] === 'archive' ? "allform-list-focus1" : '')}>
                            <a href="/allform/archive" class="nav-link-hover link_color "> <FaArchive/> Archive</a>
                        </li>
                        <li class={"nav-item formlink " + (pageactive[2] === 'trash' ? "allform-list-focus1" : '')}>
                            <a href="/allform/trash" class="nav-link-hover link_color ">< FaTrashAlt/> Trash</a>
                        </li>
                    </ul>
                </div>
            </nav> */}
            <nav className={"navbar navbar-expand-lg all-navbar navbar-light bg-light pt-0 pb-0 " + (darkmodes ? "text-dark trans_background border-bottom  " : "text-dark trans_background border-bottom ")}>
                <div class="container-fluid  ps-1">
                    <ul class="nav nav-tabs">
                        <li class={"nav-item active formlink inbox_link_bgcolor " + (pageactive[2] === 'inbox' ? "inbox-list-focus1" : '')}>
                            <a href='/allform/inbox' class="inbox_nav_link  "><RiInboxUnarchiveFill/> Inbox</a>
                        </li>
                        <li class={"nav-item formlink inbox_link_bgcolor " + (pageactive[2] === 'archive' ? "inbox-list-focus1" : '')}>
                            <a href="/allform/archive" class="inbox_nav_link  "> <FaArchive/> Archive</a>
                        </li>
                        <li class={"nav-item formlink inbox_link_bgcolor " + (pageactive[2] === 'trash' ? "inbox-list-focus1" : '')}>
                            <a href="/allform/trash" class="inbox_nav_link  ">< FaTrashAlt/> Trash</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
