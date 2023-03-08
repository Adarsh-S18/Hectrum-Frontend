import React from 'react'
import Conversations from '../../Components/Conversations/Conversations'
import MessageContent from '../../Components/MessageContent/MessageContent'
import './Messages.scss'
function Message() {
    return (
        <div className='messenger'>
            <div className="chatmenu">
                <div className="menuwrapper">
                    <input type='text' placeholder='Search for friends' className='search' />
                    <Conversations />
                    <Conversations />
                    <Conversations />
                    <Conversations />
                    <Conversations />
                </div>
            </div>
            <div className="chatbox">
                <div className="chatboxwrapper">
                    <div className="chatboxtop">
                    <MessageContent />
                    <MessageContent own={true}/>
                    <MessageContent />
                    <MessageContent own={true}/>
                    <MessageContent />
                    <MessageContent own={true}/>
                    <MessageContent />
                    <MessageContent own={true}/>
                    <MessageContent />
                    <MessageContent own={true}/>
                    <MessageContent />
                    <MessageContent own={true}/>
                    </div>
                    <div className="chatboxbottom">
                        <textarea className='messtype' placeholder='Type something...' ></textarea>
                        <button className='sendbut'>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message
