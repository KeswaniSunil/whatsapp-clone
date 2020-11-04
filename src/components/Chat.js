import React,{useEffect , useState , useContext} from 'react';
import '../styles/Chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import {SearchOutlined , AttachFile , MoreVert , InsertEmoticon , Mic , Send}from '@material-ui/icons';
import db from '../firebase';
import firebase from 'firebase';
import {useParams} from 'react-router-dom';
import {Context as UserContext} from "../context/UserContext";

const Chat = () => {
    const [input,setInput]=useState("");
    const [seed,setSeed]=useState('');
    const { roomId }=useParams();
    const [roomName,setRoomName]=useState("");
    const [messages,setMessages]=useState([]);

    const {state}=useContext(UserContext);

    useEffect(()=>{
        if(roomId){

            // console.log("Id changes "+roomId);
            // console.log(user);
            db.collection('rooms').doc(roomId)
            .onSnapshot(snapshot=>(
                setRoomName(snapshot.data().name)
            ))

            db.collection('rooms').doc(roomId)
            .collection('messages').orderBy('timestamp','asc')
            .onSnapshot(snapshot=>(
                setMessages(snapshot.docs.map(
                    doc=>doc.data()
                ))
            ))
        setSeed(Math.floor(Math.random()*5000));
        }
    },[roomId]);


    const sendMessage=(e)=>{
        e.preventDefault();
        db.collection('rooms').doc(roomId)
        .collection('messages').add({
            message:input,
            name:state.user?.displayName,
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput("");
    }
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="chat__headerInfo">
                    <h4>{roomName}</h4>
                    <p> last seen{" "}
                        {new Date(
                            messages[messages.length - 1]?.
                            timestamp?.toDate()
                        ).toUTCString()}
                    </p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined fontSize="small"/>
                    </IconButton>                    
                    <IconButton>                    
                        <AttachFile fontSize="small"/>
                    </IconButton>                    
                    <IconButton>
                        <MoreVert fontSize="small"/>
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                {messages.map(message=>(
                    <p className={`chat_bodyMessage ${message.name===state.user?.displayName && 'chat_bodyReciever'}`}>
                        <span className="chat_bodyMessageName">{message.name}</span>
                        {message.message}
                        <span className="chat_bodyMessageTimeStamp">
                            {new Date(message.timestamp?.toDate()).toUTCString()}
                        </span>
                    </p>
                ))}
            </div>
            <div className="chat__footer">
                <IconButton>                       
                    <InsertEmoticon fontSize="small"/>
                </IconButton>                    
                <form>
                    <input 
                        type="text" 
                        value={input}
                        placeholder="Type a Message"
                        onChange={e => setInput(e.target.value)}
                    />
                    <button type="submit" onClick={sendMessage}>
                        <IconButton>                       
                            <Send/>
                        </IconButton>
                    </button>
                </form>
                <IconButton>
                    <Mic fontSize="small"/>
                </IconButton>
            </div>
        </div>
    );
}

export default Chat;
