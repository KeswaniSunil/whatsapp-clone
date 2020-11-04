//type rfc and then enter

import React , {useState , useEffect , useContext} from 'react';
import { Avatar, IconButton } from '@material-ui/core';
// import DonutLargeIcon from '@material-ui/icons/DonutLarge';
// import ChatIcon from '@material-ui/icons/Chat';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
//OR
import {DonutLarge as DonutLargeIcon ,Chat as ChatIcon , MoreVert as MoreVertIcon , SearchOutlined}from '@material-ui/icons';
import '../styles/Sidebar.css';
import SidebarChat from './SidebarChat.js';
import db from '../firebase.js';
import {Context as UserContext} from "../context/UserContext";


const Sidebar = () => {
    const [rooms,setRooms]=useState([]);
    const {user}=useContext(UserContext);
    // console.log(db);
    useEffect(() => {
        //snapShot means the db instance i.e snapshot of data in rooms collection at any given time. 
        const unsubscribe=db.collection('rooms').onSnapshot(
            (snapshot)=>
                //like to consume api of express we do response.data,here we do snapshot.docs,also we are
                // using map() function of array for some manipulation in which we are storing it as obj of data mapped with its id :-
                setRooms(snapshot.docs.map((doc)=>
                        ({
                            id:doc.id,
                            data:doc.data()
                        })
                    ))
            
        )
        return ()=>{
            unsubscribe();
        }
    }, []);
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar fontSize="small" src={user?.photoURL}/>
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon fontSize="small"/>
                    </IconButton>                    
                    <IconButton>                    
                        <ChatIcon fontSize="small"/>
                    </IconButton>                    
                    <IconButton>
                        <MoreVertIcon fontSize="small"/>
                    </IconButton>
                </div>    
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or Start new Chat" type="text" />
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat addNewChat/>
                {
                    rooms.map(
                        room=> (
                            <SidebarChat 
                                key={room.id}
                                id={room.id}
                                name={room.data.name}    
                            />
                        )
                    )
                }
            </div>
        </div>
    );
}

export default Sidebar;
