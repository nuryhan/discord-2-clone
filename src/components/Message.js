import { TrashIcon } from '@heroicons/react/solid';
import moment from 'moment';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useSelector } from 'react-redux';
import { selectChannelId } from '../feautures/channelSlice';
import { auth, db } from '../firebase';

const Message = ({id, name, message, email, photoURL, timestamp }) => {
    const channelId = useSelector(selectChannelId);
    const [user] = useAuthState(auth);

  return (
  <div className="flex items-center p-1 pl-5 my-5 mr-2 hover:bg-discord_messageBg group" >
      <img src={photoURL} alt="" className="h-10 rounded-full cursor-pointer mr-3 hover:shadow-2xl " />
      <div className="flex flex-col">
          <h4 className="flex items-center space-x-2 font-medium  " >
            <span className="hover:underline text-white text-sm cursor-pointer" > {name} </span>
            <span className="text-discord_messageTimestamp text-xs  " > 
                  { moment(timestamp?.toDate().getTime()).format("lll") }
            </span>
          </h4>
          <p class="text-sm text-discord_message" > {message} </p>
      </div>

      {user?.email === email && (
          <div className="hover:bg-discord_deleteIcon 
          p-1 ml-auto rounded-sm text-discord_deleteIcon
           hover:text-white cursor-pointer  " >
              <TrashIcon className="h-5 hidden group-hover:inline" 
              onClick={()=> db.collection("channels").doc(channelId).collection("messages").doc(id).delete() } />
          </div>
      )}
  </div>
  );
};

export default Message;
