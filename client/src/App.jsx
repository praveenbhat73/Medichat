import React from "react";

import { StreamChat } from "stream-chat";
// Stream chat is module which helps in realtime messaging , auth, user managment

import { Chat } from "stream-chat-react";
//{} -> like this type of import is basically importing specific functions or exports 

import Cookies from "universal-cookie";
//above type of import is used to import default exports  
//cookies are used to store user information

// all components import
import ChannelListContainer from "./components/ChannelListContainer";
import ChannelContainer from "./components/ChannelContainer";

//style sheet
import './App.css'
//in the css used is BEM CSS -> Block element modifier  css classname contains three parts ->
// 1) Block -> its main component like sidebar,navbar etc
// 2) Element-> its like small component in the main component -> button
// 3)Modifier -> its used to set property such as disable ex:- header__button__disabled

const apiKey = "w55yfmrea2r3";
const client = StreamChat.getInstance(apiKey);
const App = () => {
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer />
        <ChannelContainer />
      </Chat>
    </div>
  );
};

export default App;
