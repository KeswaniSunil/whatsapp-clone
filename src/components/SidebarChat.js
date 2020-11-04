import React,{useEffect , useState} from 'react';
import { Avatar, IconButton} from '@material-ui/core';
import '../styles/SidebarChat.css';
import AddIcon from '@material-ui/icons/Add';
import db from '../firebase.js';
import {Link} from 'react-router-dom'
const SidebarChat = ({addNewChat , id ,name}) => {
    const [seed,setSeed]=useState('')
    const [message,setMessages]=useState([]);

    useEffect(()=>{
        if(id){
            db.collection('rooms').doc(id)
            .collection('messages').orderBy('timestamp','desc')
            .onSnapshot(snapshot=>(
                setMessages(snapshot.docs.map((doc)=>doc.data()))
            ));
        }
        setSeed(Math.floor(Math.random()*5000));
    },[id]);
    
    const createChat=()=>{
        const roomName=prompt("Please Enter name for Chat");
        if(roomName){
            db.collection('rooms').add({
                name:roomName
            });
        }
    }

    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className="sidebarChat">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="sidebarChat__info">
                    <h2>{name}</h2>
                    <p>{message[0]?.message}</p>
                </div>
            </div>
        </Link>
    ) : (
        <div className="sidebarChat2" onClick={createChat}>
            <IconButton>
                    <AddIcon fontSize="small"/>
            </IconButton>
            <div className="sidebarChat__info">
                <h4>Add New Chat Room</h4>
            </div>
        </div>
    );
}

export default SidebarChat;
