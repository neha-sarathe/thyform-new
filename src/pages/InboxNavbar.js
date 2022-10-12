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
            <nav className={"navbar navbar-expand-lg all-navbar navbar-light bg-light pt-0 pb-0 " + (darkmodes ? "text-dark trans_background border-bottom  " : "text-dark trans_background border-bottom ")}>
                <div class="container-fluid  ps-1">
                    <ul class="nav nav-tabs">
                        <li class={"nav-item active ps-3 formlink " + (pageactive[2] === 'inbox' ? "allform-list-focus1" : '')}>
                            <a href='/allform/inbox' class="nav-link-hover link_color "><RiInboxUnarchiveFill/> Inbox</a>
                        </li>
                        <li class={"nav-item formlink " + (pageactive[2] === 'archive' ? "allform-list-focus1" : '')}>
                            <a href="/allform/archive" class="nav-link-hover link_color "> <FaArchive/> Archive</a>
                        </li>
                        <li class={"nav-item formlink " + (pageactive[2] === 'trash' ? "allform-list-focus1" : '')}>
                            <a href="/allform/trash" class="nav-link-hover link_color ">< FaTrashAlt/> Trash</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
