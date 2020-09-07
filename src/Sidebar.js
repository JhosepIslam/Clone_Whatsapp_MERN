import React from 'react'
import "./Sidebar.css";

import DonutLargueIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {SearchOutlined} from '@material-ui/icons/';

import {Avatar,  IconButton } from '@material-ui/core';
import SidebarChat from './SidebarChat';
function Sidebar() {
    return(
        <div className= "sidebar">            
            <div className= "sidebar_header">
               <Avatar  src= "https://upload.wikimedia.org/wikipedia/commons/a/a5/About.me_icon.jpg"/>
                <div className = "sidebar_headerRight">
                    <IconButton>
                        <DonutLargueIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="sidebar_search">
                <div className = "sidebar_searchContainer">
                    <SearchOutlined/>
                    <input placeholder = "Search or start new chat" type = "text"/>
                </div>
            </div>
            <div className ="sidebar_chats">
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
            </div>


        </div>
    );
    
}

export default Sidebar