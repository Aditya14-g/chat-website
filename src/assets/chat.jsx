import React,{useState,useEffect} from 'react';
import {addDoc,collection,serverTimestamp, onSnapshot,query,where} from 'firebase/firestore';
import {auth,db} from "../firebase";
import "../styles/chat.css";
export default function Chat(props){
    const {room}=props;
    const[newMessage,setNewMessage]=useState('');
    const[messages,setMessage]=useState([]);

    const messagesRef = collection(db, "messages");

    useEffect(()=>{
        const queryMessage=query(messagesRef,where("room","==",room));
        const unsuscribe=onSnapshot(queryMessage, (snapshot) => {
            let messages=[];
            snapshot.forEach((doc)=>{
                messages.push({...doc.data(), id: doc.id});
            })
            // console.log(messages);
            setMessage(messages);
        });

        // return () => unsuscribe();
    },[]);

        async function handleSubmit(e){
        e.preventDefault();
        if(newMessage==='') return;
        await addDoc(messagesRef ,{
            text:newMessage,
            createdAt: serverTimestamp(),
            user:auth.currentUser.displayName,
            room:room,
        });

        setNewMessage('');
    }
    console.log(messages);
    return (
        <div className='chat-app'>
            <div className='header'>
                <h1>Welcome to: {room.toUpperCase()}</h1>
            </div>
            <h1>hello</h1>
            <div>
                {messages.map((message)=>(
                    <div className='message' key={message.id}>
                        <span className='user'>{message.user}: </span>
                        {message.text}

                    </div>
        
                ))}
            </div>
            <form onSubmit={handleSubmit} className='new-message-form'>
                <input onChange={(e)=>{setNewMessage(e.target.value)}} className='new-message-input' placeholder='Type your message here...' value={newMessage}/>
                <button className='send-button' type='submit'>Send</button>
            </form>
        </div>
    )
}